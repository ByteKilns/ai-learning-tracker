export type SectionKey = "learn" | "build" | "project" | "revision" | "check";

export interface DaySection {
  durationMin: number;
  items: string[];
}

export interface ResourceStep {
  icon: string;
  label: string;
  detail: string;
}

export interface Day {
  day: number;
  phaseNumber: number;
  phaseName: string;
  focus: string;
  skillPillar: string;
  notes: string;
  sections: Record<SectionKey, DaySection>;
  resourceFlow: {
    startHere: ResourceStep;
    next: ResourceStep | null;
    practice: ResourceStep;
    verify: ResourceStep;
  };
}

export interface Phase {
  number: number;
  name: string;
  startDay: number;
  endDay: number;
}

export interface Project {
  project: string;
  when: string;
  purpose: string;
  evolution: string;
}

export interface StudySystemEntry {
  component: string;
  howToUse: string;
}

export interface Resource {
  resource: string;
  role: string;
  whenToUse: string;
  notes: string;
  link?: string;
}

export interface RegressionSprint {
  sprint: number;
  day: number;
  whatToRetrieve: string;
  blankPageReconstruction: string;
  integrationDrill: string;
  passCondition: string;
}
