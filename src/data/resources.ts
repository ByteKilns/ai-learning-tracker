import type { Resource } from "@/lib/types";

export const resources: Resource[] = [
  {
    "resource": "Mathematics for Machine Learning — Deisenroth et al.",
    "role": "Math foundation",
    "whenToUse": "Days 1–7; revisit before ML/DL",
    "notes": "Vectors, matrices, probability and ML-oriented mathematics."
  },
  {
    "resource": "3Blue1Brown — Essence of Linear Algebra",
    "role": "Visual intuition",
    "whenToUse": "Days 1–4",
    "notes": "Use alongside the math book for geometric intuition."
  },
  {
    "resource": "Hands-On Machine Learning — Aurélien Géron",
    "role": "Primary practical ML/DL",
    "whenToUse": "Days 6–23",
    "notes": "Use selected chapters for ML workflow, classical ML and neural networks."
  },
  {
    "resource": "Deep Learning — Goodfellow, Bengio & Courville",
    "role": "Deep theory reference",
    "whenToUse": "Days 15–23 and later",
    "notes": "Selective reading for optimization, representation and theory; not a cover-to-cover target."
  },
  {
    "resource": "Build a Large Language Model (From Scratch) — Sebastian Raschka",
    "role": "Transformer/LLM internals",
    "whenToUse": "Days 22–35",
    "notes": "Use for tokenization, attention, transformer blocks and generation."
  },
  {
    "resource": "Designing Machine Learning Systems — Chip Huyen",
    "role": "Production ML/system design",
    "whenToUse": "Days 50–63",
    "notes": "Use for reliability, data, deployment, monitoring and trade-offs."
  },
  {
    "resource": "AI Engineering — Chip Huyen",
    "role": "AI application engineering",
    "whenToUse": "Days 29–70",
    "notes": "Use for LLM applications, evaluation, context, retrieval and production considerations."
  },
  {
    "resource": "Designing Data-Intensive Applications — Martin Kleppmann",
    "role": "Distributed systems reference",
    "whenToUse": "Days 52–63, then post-75",
    "notes": "Selective reference for storage, consistency, replication and system design."
  },
  {
    "resource": "Official framework/API documentation",
    "role": "Current implementation truth",
    "whenToUse": "Every relevant day",
    "notes": "Prefer official docs over stale tutorials for APIs and framework behavior."
  }
];
