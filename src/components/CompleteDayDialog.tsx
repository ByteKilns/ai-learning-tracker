"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { completeDay } from "@/lib/actions";

export function CompleteDayDialog({ day }: { day: number }) {
  const [confidence, setConfidence] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button>Complete Day</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>How confident are you?</DialogTitle>
        </DialogHeader>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <Button
              key={n}
              variant={confidence === n ? "default" : "outline"}
              onClick={() => setConfidence(n)}
            >
              {n}
            </Button>
          ))}
        </div>
        <Textarea
          placeholder="What went wrong? (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <DialogFooter>
          <Button
            disabled={confidence === null || isPending}
            onClick={() =>
              startTransition(async () => {
                await completeDay(day, confidence!, note || null);
                setOpen(false);
              })
            }
          >
            Complete Day
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
