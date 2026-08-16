import type { RegressionSprint } from "@/lib/types";

export const regressionSprints: RegressionSprint[] = [
  {
    "sprint": 1,
    "day": 7,
    "whatToRetrieve": "Math + ML workflow",
    "blankPageReconstruction": "Vectors, dot product, matrix multiplication, sklearn baseline",
    "integrationDrill": "Break a data split / metric and diagnose",
    "passCondition": "Explain + implement + debug without notes"
  },
  {
    "sprint": 2,
    "day": 14,
    "whatToRetrieve": "Classical ML + eval + SDD",
    "blankPageReconstruction": "Classifier + evaluation loop + spec",
    "integrationDrill": "Inject leakage/metric bug; repair spec",
    "passCondition": "Evidence of correct diagnosis and repair"
  },
  {
    "sprint": 3,
    "day": 21,
    "whatToRetrieve": "DL + PyTorch",
    "blankPageReconstruction": "MLP/training loop/CNN",
    "integrationDrill": "Break optimizer/data pipeline",
    "passCondition": "Explain training failure and fix"
  },
  {
    "sprint": 4,
    "day": 28,
    "whatToRetrieve": "Attention + Transformers",
    "blankPageReconstruction": "Single-head attention + transformer diagram",
    "integrationDrill": "Shape/scale/softmax failure",
    "passCondition": "Correct implementation and explanation"
  },
  {
    "sprint": 5,
    "day": 35,
    "whatToRetrieve": "LLM + coding agents",
    "blankPageReconstruction": "Structured output + tool loop",
    "integrationDrill": "Bad context / malformed tool call",
    "passCondition": "Bounded agent with verifier"
  },
  {
    "sprint": 6,
    "day": 42,
    "whatToRetrieve": "RAG",
    "blankPageReconstruction": "Ingestion + retrieval + generation",
    "integrationDrill": "Break retrieval and diagnose",
    "passCondition": "Retrieval and generation errors separated"
  },
  {
    "sprint": 7,
    "day": 49,
    "whatToRetrieve": "LangGraph + agents",
    "blankPageReconstruction": "Routing + branch + cycle + tool",
    "integrationDrill": "Break termination/tool permission",
    "passCondition": "Safe workflow from blank"
  },
  {
    "sprint": 8,
    "day": 56,
    "whatToRetrieve": "Production AI + software engineering",
    "blankPageReconstruction": "API + persistence + logging + retry",
    "integrationDrill": "Simulate outage/security failure",
    "passCondition": "Correct recovery and trade-off explanation"
  },
  {
    "sprint": 9,
    "day": 63,
    "whatToRetrieve": "Evals + product + agentic engineering",
    "blankPageReconstruction": "Small AI service + eval + spec",
    "integrationDrill": "Regression + agent verification",
    "passCondition": "Pass evals and defend architecture"
  },
  {
    "sprint": 10,
    "day": 70,
    "whatToRetrieve": "Capstone architecture",
    "blankPageReconstruction": "End-to-end Jira AI Engineer",
    "integrationDrill": "Failure drill + security + approval",
    "passCondition": "Portfolio-ready evidence"
  },
  {
    "sprint": 11,
    "day": 74,
    "whatToRetrieve": "Final technical defense",
    "blankPageReconstruction": "Core concepts and architecture from memory",
    "integrationDrill": "Mixed failures across stack",
    "passCondition": "Interview-level explanation + implementation"
  }
];
