"use server";

import { getDb } from "./mongodb";
import { regressionSprints } from "@/data/regressionSprints";
import {
  nextRegressionSprintAfter,
  shouldAddToRegression,
} from "./progress";
import type { SectionKey } from "./types";
import { revalidatePath } from "next/cache";

export interface DayProgressDoc {
  day: number;
  learn: boolean;
  build: boolean;
  project: boolean;
  revision: boolean;
  check: boolean;
  status: "not_started" | "in_progress" | "complete";
  confidence: number | null;
  whatWentWrong: string | null;
  completedAt: Date | null;
  updatedAt: Date;
}

export interface RegressionAdditionDoc {
  sprintNumber: number;
  sourceDay: number;
  topic: string;
  addedAt: Date;
}

export async function getAllProgress(): Promise<DayProgressDoc[]> {
  const db = await getDb();
  return db
    .collection<DayProgressDoc>("dayProgress")
    .find({}, { projection: { _id: 0 } })
    .toArray();
}

export async function getDayProgress(day: number): Promise<DayProgressDoc | null> {
  const db = await getDb();
  return db
    .collection<DayProgressDoc>("dayProgress")
    .findOne({ day }, { projection: { _id: 0 } });
}

export async function toggleSection(
  day: number,
  section: SectionKey,
  done: boolean,
): Promise<void> {
  const db = await getDb();
  const existing = await db.collection<DayProgressDoc>("dayProgress").findOne({ day });
  const base: DayProgressDoc = existing ?? {
    day,
    learn: false,
    build: false,
    project: false,
    revision: false,
    check: false,
    status: "not_started",
    confidence: null,
    whatWentWrong: null,
    completedAt: null,
    updatedAt: new Date(),
  };
  base[section] = done;
  const anyDone = base.learn || base.build || base.project || base.revision || base.check;
  if (base.status !== "complete") {
    base.status = anyDone ? "in_progress" : "not_started";
  }
  base.updatedAt = new Date();

  await db
    .collection<DayProgressDoc>("dayProgress")
    .updateOne({ day }, { $set: base }, { upsert: true });

  revalidatePath("/dashboard");
  revalidatePath(`/day/${day}`);
  revalidatePath("/progress");
}

export async function completeDay(
  day: number,
  confidence: number,
  whatWentWrong: string | null,
): Promise<void> {
  const db = await getDb();
  const now = new Date();

  await db.collection<DayProgressDoc>("dayProgress").updateOne(
    { day },
    {
      $set: {
        day,
        learn: true,
        build: true,
        project: true,
        revision: true,
        check: true,
        status: "complete",
        confidence,
        whatWentWrong,
        completedAt: now,
        updatedAt: now,
      },
    },
    { upsert: true },
  );

  if (shouldAddToRegression(confidence)) {
    const dayRow = (await import("@/data/days")).days.find((d) => d.day === day);
    const target = nextRegressionSprintAfter(regressionSprints, day);
    if (target && dayRow) {
      await db.collection<RegressionAdditionDoc>("regressionAdditions").insertOne({
        sprintNumber: target.sprint,
        sourceDay: day,
        topic: dayRow.focus,
        addedAt: now,
      });
    }
  }

  revalidatePath("/dashboard");
  revalidatePath(`/day/${day}`);
  revalidatePath("/roadmap");
  revalidatePath("/progress");
}

export async function getRegressionAdditions(
  sprintNumber: number,
): Promise<RegressionAdditionDoc[]> {
  const db = await getDb();
  return db
    .collection<RegressionAdditionDoc>("regressionAdditions")
    .find({ sprintNumber }, { projection: { _id: 0 } })
    .toArray();
}
