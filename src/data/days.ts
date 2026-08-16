import type { Day } from "@/lib/types";

export const days: Day[] = [
  {
    "day": 1,
    "phaseName": "Phase 1 — Foundations + Sprint",
    "focus": "Scalars, vectors, dimensions",
    "skillPillar": "AI applications + Software engineering",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Scalars vs vectors, notation, dimensions, norms and geometry."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "NumPy vector operations from scratch + verify with NumPy."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira AI Engineer: define problem, users, MVP and constraints."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Recall vectors/norms without notes."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Scalars, vectors, dimensions"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Mathematics for Machine Learning",
        "detail": "Scalars vs vectors, notation, dimensions, norms and geometry."
      },
      "next": {
        "icon": "🎥",
        "label": "3Blue1Brown",
        "detail": "Scalars vs vectors, notation, dimensions, norms and geometry."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "NumPy vector operations from scratch + verify with NumPy."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on scalars, vectors, dimensions without giving me the answer."
      }
    },
    "phaseNumber": 1
  },
  {
    "day": 2,
    "phaseName": "Phase 1 — Foundations + Sprint",
    "focus": "Dot products and cosine similarity",
    "skillPillar": "AI applications + ML foundations",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Dot product, angle, projection, cosine similarity and why similarity matters."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement dot product and cosine similarity without NumPy."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: ticket -> structured requirement JSON."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Rebuild dot product from blank editor."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Dot products and cosine similarity"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Mathematics for Machine Learning",
        "detail": "Dot product, angle, projection, cosine similarity and why similarity matters."
      },
      "next": {
        "icon": "🎥",
        "label": "3Blue1Brown",
        "detail": "Dot product, angle, projection, cosine similarity and why similarity matters."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement dot product and cosine similarity without NumPy."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on dot products and cosine similarity without giving me the answer."
      }
    },
    "phaseNumber": 1
  },
  {
    "day": 3,
    "phaseName": "Phase 1 — Foundations + Sprint",
    "focus": "Matrices and matrix multiplication",
    "skillPillar": "ML foundations",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Matrix shapes, matrix-vector multiplication, matrix-matrix multiplication."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement matrix multiplication;",
          "inspect shapes and failures."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: structured requirement -> acceptance criteria."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain W x + b geometrically."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Matrices and matrix multiplication"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Mathematics for Machine Learning",
        "detail": "Matrix shapes, matrix-vector multiplication, matrix-matrix multiplication."
      },
      "next": {
        "icon": "🎥",
        "label": "3Blue1Brown",
        "detail": "Matrix shapes, matrix-vector multiplication, matrix-matrix multiplication."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement matrix multiplication; inspect shapes and failures."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on matrices and matrix multiplication without giving me the answer."
      }
    },
    "phaseNumber": 1
  },
  {
    "day": 4,
    "phaseName": "Phase 1 — Foundations + Sprint",
    "focus": "Linear transformations",
    "skillPillar": "ML foundations",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Matrices as transformations;",
          "basis, span, linear independence."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Visualize 2D transformations;",
          "write a small matrix toolkit."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: requirement -> implementation plan."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain basis/span/linear transformation."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Linear transformations"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Mathematics for Machine Learning",
        "detail": "Matrices as transformations; basis, span, linear independence."
      },
      "next": {
        "icon": "🎥",
        "label": "3Blue1Brown",
        "detail": "Matrices as transformations; basis, span, linear independence."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Visualize 2D transformations; write a small matrix toolkit."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on linear transformations without giving me the answer."
      }
    },
    "phaseNumber": 1
  },
  {
    "day": 5,
    "phaseName": "Phase 1 — Foundations + Sprint",
    "focus": "Probability and statistics",
    "skillPillar": "ML foundations",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Random variables, distributions, mean/variance, conditional probability, Bayes intuition."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement basic statistics and sampling experiments."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira V1: ticket -> plan -> code suggestion."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Probability/ML interview questions."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Probability and statistics"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Mathematics for Machine Learning",
        "detail": "Random variables, distributions, mean/variance, conditional probability, Bayes intuition."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement basic statistics and sampling experiments."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on probability and statistics without giving me the answer."
      }
    },
    "phaseNumber": 1
  },
  {
    "day": 6,
    "phaseName": "Phase 1 — Foundations + Sprint",
    "focus": "ML workflow",
    "skillPillar": "AI applications + Software engineering",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Features, labels, train/validation/test, leakage, baseline, metrics."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build a tiny sklearn baseline with a reproducible split."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira V1: add generated unit-test suggestions."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain leakage and baseline choice."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: ML workflow"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Hands-On Machine Learning",
        "detail": "Features, labels, train/validation/test, leakage, baseline, metrics."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build a tiny sklearn baseline with a reproducible split."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on ml workflow without giving me the answer."
      }
    },
    "phaseNumber": 1
  },
  {
    "day": 7,
    "phaseName": "Phase 1 — Foundations + Sprint",
    "focus": "REGRESSION SPRINT #1",
    "skillPillar": "Evaluation + continuous learning",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "No major new topic: retrieve math + ML foundations."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Blank-page reconstruction: vectors, dot product, matrix multiplication, sklearn baseline."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira V1 demo and architecture explanation."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Record weak areas and recovery tasks."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: REGRESSION SPRINT #1"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Sprint checklist",
        "detail": "No major new topic: retrieve math + ML foundations."
      },
      "next": {
        "icon": "🎥",
        "label": "prior notes",
        "detail": "No major new topic: retrieve math + ML foundations."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Blank-page reconstruction: vectors, dot product, matrix multiplication, sklearn baseline."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on regression sprint #1 without giving me the answer."
      }
    },
    "phaseNumber": 1
  },
  {
    "day": 8,
    "phaseName": "Phase 2 — Classical ML + Evals",
    "focus": "Linear regression",
    "skillPillar": "ML foundations",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "OLS intuition, loss functions, residuals, gradient intuition."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement linear regression with NumPy;",
          "compare sklearn."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Classical ML mini-project: define dataset + target."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain bias/variance."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Linear regression"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Hands-On Machine Learning",
        "detail": "OLS intuition, loss functions, residuals, gradient intuition."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement linear regression with NumPy; compare sklearn."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on linear regression without giving me the answer."
      }
    },
    "phaseNumber": 2
  },
  {
    "day": 9,
    "phaseName": "Phase 2 — Classical ML + Evals",
    "focus": "Logistic regression",
    "skillPillar": "ML foundations",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Logits, sigmoid, decision boundary, classification metrics."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Train classifier;",
          "confusion matrix, precision, recall, F1."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Mini-project: baseline classifier."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Metric selection from a scenario."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Logistic regression"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Hands-On Machine Learning",
        "detail": "Logits, sigmoid, decision boundary, classification metrics."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Train classifier; confusion matrix, precision, recall, F1."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on logistic regression without giving me the answer."
      }
    },
    "phaseNumber": 2
  },
  {
    "day": 10,
    "phaseName": "Phase 2 — Classical ML + Evals",
    "focus": "Trees and ensembles",
    "skillPillar": "ML foundations",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Decision trees, random forests, boosting, feature importance."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Train/compare tree models;",
          "inspect overfitting."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Mini-project model comparison."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain why ensembles help."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Trees and ensembles"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Hands-On Machine Learning",
        "detail": "Decision trees, random forests, boosting, feature importance."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Train/compare tree models; inspect overfitting."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on trees and ensembles without giving me the answer."
      }
    },
    "phaseNumber": 2
  },
  {
    "day": 11,
    "phaseName": "Phase 2 — Classical ML + Evals",
    "focus": "Unsupervised learning",
    "skillPillar": "ML foundations",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "K-means, clustering intuition, dimensionality reduction."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Cluster a dataset;",
          "visualize;",
          "discuss failure modes."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Mini-project: segmentation/exploration."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain when clustering is appropriate."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Unsupervised learning"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Hands-On Machine Learning",
        "detail": "K-means, clustering intuition, dimensionality reduction."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Cluster a dataset; visualize; discuss failure modes."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on unsupervised learning without giving me the answer."
      }
    },
    "phaseNumber": 2
  },
  {
    "day": 12,
    "phaseName": "Phase 2 — Classical ML + Evals",
    "focus": "Evaluation and error analysis",
    "skillPillar": "Evaluation",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Holdouts, cross-validation, calibration, error buckets, data issues."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Create evaluation report and error taxonomy."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Classical ML project: evaluation harness."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Build an error-analysis table from failures."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Evaluation and error analysis"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Hands-On Machine Learning",
        "detail": "Holdouts, cross-validation, calibration, error buckets, data issues."
      },
      "next": {
        "icon": "🎥",
        "label": "ChatGPT",
        "detail": "Holdouts, cross-validation, calibration, error buckets, data issues."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Create evaluation report and error taxonomy."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on evaluation and error analysis without giving me the answer."
      }
    },
    "phaseNumber": 2
  },
  {
    "day": 13,
    "phaseName": "Phase 2 — Classical ML + Evals",
    "focus": "Spec-driven development",
    "skillPillar": "Coding agents + software engineering",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Constitution/spec/plan/implement/validate/replan;",
          "acceptance criteria."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Create a project spec and validation checklist for Jira AI Engineer."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira V2: specification -> plan -> implementation -> tests."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain why specs reduce agent drift."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Spec-driven development"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "DeepLearning.AI SDD material",
        "detail": "Constitution/spec/plan/implement/validate/replan; acceptance criteria."
      },
      "next": {
        "icon": "🎥",
        "label": "project docs",
        "detail": "Constitution/spec/plan/implement/validate/replan; acceptance criteria."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Create a project spec and validation checklist for Jira AI Engineer."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on spec-driven development without giving me the answer."
      }
    },
    "phaseNumber": 2
  },
  {
    "day": 14,
    "phaseName": "Phase 2 — Classical ML + Evals",
    "focus": "REGRESSION SPRINT #2",
    "skillPillar": "Evaluation + coding agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Classical ML + evaluation + SDD retrieval."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Rebuild one classifier and its eval loop from blank files;",
          "debug deliberate failures."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira V2 review: spec quality + test evidence."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Recovery plan for weak metrics/engineering concepts."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: REGRESSION SPRINT #2"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Sprint checklist",
        "detail": "Classical ML + evaluation + SDD retrieval."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Rebuild one classifier and its eval loop from blank files; debug deliberate failures."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on regression sprint #2 without giving me the answer."
      }
    },
    "phaseNumber": 2
  },
  {
    "day": 15,
    "phaseName": "Phase 3 — Deep Learning + PyTorch",
    "focus": "Neural network foundations",
    "skillPillar": "ML/DL",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Perceptron, layers, activations, forward pass."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement a tiny MLP forward pass in NumPy."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: map spec acceptance criteria to tests."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain forward pass."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Neural network foundations"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Hands-On Machine Learning",
        "detail": "Perceptron, layers, activations, forward pass."
      },
      "next": {
        "icon": "🎥",
        "label": "Goodfellow",
        "detail": "Perceptron, layers, activations, forward pass."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement a tiny MLP forward pass in NumPy."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on neural network foundations without giving me the answer."
      }
    },
    "phaseNumber": 3
  },
  {
    "day": 16,
    "phaseName": "Phase 3 — Deep Learning + PyTorch",
    "focus": "Backpropagation",
    "skillPillar": "ML/DL",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Computational graphs, gradients, chain rule intuition."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Manual backprop on a tiny network;",
          "gradient check."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: generated tests + test oracle design."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Derive one gradient from memory."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Backpropagation"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Goodfellow",
        "detail": "Computational graphs, gradients, chain rule intuition."
      },
      "next": {
        "icon": "🎥",
        "label": "ChatGPT",
        "detail": "Computational graphs, gradients, chain rule intuition."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Manual backprop on a tiny network; gradient check."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on backpropagation without giving me the answer."
      }
    },
    "phaseNumber": 3
  },
  {
    "day": 17,
    "phaseName": "Phase 3 — Deep Learning + PyTorch",
    "focus": "Optimization and regularization",
    "skillPillar": "ML/DL",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "SGD, momentum, Adam intuition, learning rate, weight decay, dropout."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Train PyTorch model;",
          "compare learning rates."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "DL mini-project starts."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Diagnose under/overfitting."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Optimization and regularization"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Hands-On Machine Learning",
        "detail": "SGD, momentum, Adam intuition, learning rate, weight decay, dropout."
      },
      "next": {
        "icon": "🎥",
        "label": "PyTorch docs",
        "detail": "SGD, momentum, Adam intuition, learning rate, weight decay, dropout."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Train PyTorch model; compare learning rates."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on optimization and regularization without giving me the answer."
      }
    },
    "phaseNumber": 3
  },
  {
    "day": 18,
    "phaseName": "Phase 3 — Deep Learning + PyTorch",
    "focus": "PyTorch fundamentals",
    "skillPillar": "Software engineering + ML/DL",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Tensors, Dataset/DataLoader, modules, training loop, checkpoints."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build clean PyTorch training loop."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "DL mini-project: dataset + model + training."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Rebuild training loop without template."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: PyTorch fundamentals"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "PyTorch docs",
        "detail": "Tensors, Dataset/DataLoader, modules, training loop, checkpoints."
      },
      "next": {
        "icon": "🎥",
        "label": "Hands-On Machine Learning",
        "detail": "Tensors, Dataset/DataLoader, modules, training loop, checkpoints."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build clean PyTorch training loop."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on pytorch fundamentals without giving me the answer."
      }
    },
    "phaseNumber": 3
  },
  {
    "day": 19,
    "phaseName": "Phase 3 — Deep Learning + PyTorch",
    "focus": "CNNs",
    "skillPillar": "ML/DL",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Convolution, receptive fields, pooling, augmentation."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Train small CNN;",
          "inspect confusion matrix."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "DL mini-project: image classifier."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain convolution intuitively."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: CNNs"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Hands-On Machine Learning",
        "detail": "Convolution, receptive fields, pooling, augmentation."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Train small CNN; inspect confusion matrix."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on cnns without giving me the answer."
      }
    },
    "phaseNumber": 3
  },
  {
    "day": 20,
    "phaseName": "Phase 3 — Deep Learning + PyTorch",
    "focus": "Model debugging",
    "skillPillar": "Evaluation + ML/DL",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Learning curves, data issues, class imbalance, reproducibility."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Add experiment logging and failure analysis."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "DL project: compare 2–3 controlled experiments."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain one failure and fix."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Model debugging"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "PyTorch docs",
        "detail": "Learning curves, data issues, class imbalance, reproducibility."
      },
      "next": {
        "icon": "🎥",
        "label": "ChatGPT",
        "detail": "Learning curves, data issues, class imbalance, reproducibility."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Add experiment logging and failure analysis."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on model debugging without giving me the answer."
      }
    },
    "phaseNumber": 3
  },
  {
    "day": 21,
    "phaseName": "Phase 3 — Deep Learning + PyTorch",
    "focus": "REGRESSION SPRINT #3",
    "skillPillar": "Evaluation + ML/DL",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "DL retrieval and implementation."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Blank-page MLP/PyTorch training loop;",
          "debug an intentionally broken model."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Explain architecture and experiment results."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Recovery tasks from confidence score."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: REGRESSION SPRINT #3"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Sprint checklist",
        "detail": "DL retrieval and implementation."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Blank-page MLP/PyTorch training loop; debug an intentionally broken model."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on regression sprint #3 without giving me the answer."
      }
    },
    "phaseNumber": 3
  },
  {
    "day": 22,
    "phaseName": "Phase 4 — Transformers + Historical Project #1",
    "focus": "Attention intuition",
    "skillPillar": "Transformers/LLMs",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Queries, keys, values;",
          "dot-product attention."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement single-head attention from scratch."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Connect attention to vector math."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain QK^T."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Attention intuition"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Build a Large Language Model From Scratch",
        "detail": "Queries, keys, values; dot-product attention."
      },
      "next": {
        "icon": "🎥",
        "label": "3Blue1Brown",
        "detail": "Queries, keys, values; dot-product attention."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement single-head attention from scratch."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on attention intuition without giving me the answer."
      }
    },
    "phaseNumber": 4
  },
  {
    "day": 23,
    "phaseName": "Phase 4 — Transformers + Historical Project #1",
    "focus": "Multi-head attention",
    "skillPillar": "Transformers/LLMs",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Heads, projections, concatenation, scaling."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement multi-head attention in PyTorch."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Transformer component notebook."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain why multiple heads help."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Multi-head attention"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Build a Large Language Model From Scratch",
        "detail": "Heads, projections, concatenation, scaling."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement multi-head attention in PyTorch."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on multi-head attention without giving me the answer."
      }
    },
    "phaseNumber": 4
  },
  {
    "day": 24,
    "phaseName": "Phase 4 — Transformers + Historical Project #1",
    "focus": "Transformer block",
    "skillPillar": "Transformers/LLMs",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Residuals, layer norm, feed-forward network."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement a small transformer block."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Transformer notebook: stack blocks."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Draw block from memory."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Transformer block"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Raschka",
        "detail": "Residuals, layer norm, feed-forward network."
      },
      "next": {
        "icon": "🎥",
        "label": "Transformer paper",
        "detail": "Residuals, layer norm, feed-forward network."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement a small transformer block."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on transformer block without giving me the answer."
      }
    },
    "phaseNumber": 4
  },
  {
    "day": 25,
    "phaseName": "Phase 4 — Transformers + Historical Project #1",
    "focus": "Tokenization and embeddings",
    "skillPillar": "Transformers/LLMs",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Tokens, vocabularies, embedding lookup, positional information."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build toy tokenizer + embedding lookup."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Movie recommender Then-vs-Now placeholder: collect old-project inputs when available."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain embedding vs one-hot."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Tokenization and embeddings"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Raschka",
        "detail": "Tokens, vocabularies, embedding lookup, positional information."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build toy tokenizer + embedding lookup."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on tokenization and embeddings without giving me the answer."
      }
    },
    "phaseNumber": 4
  },
  {
    "day": 26,
    "phaseName": "Phase 4 — Transformers + Historical Project #1",
    "focus": "Generation basics",
    "skillPillar": "Transformers/LLMs",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Next-token prediction, logits, greedy vs sampling."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement tiny decoder loop;",
          "compare decoding."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "LLM mini-lab."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain temperature/top-k/top-p."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Generation basics"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Raschka",
        "detail": "Next-token prediction, logits, greedy vs sampling."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement tiny decoder loop; compare decoding."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on generation basics without giving me the answer."
      }
    },
    "phaseNumber": 4
  },
  {
    "day": 27,
    "phaseName": "Phase 4 — Transformers + Historical Project #1",
    "focus": "Movie Recommender — THEN vs NOW",
    "skillPillar": "Shaping the build",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Placeholder: historical VAE/recommendation/React details will be inserted later."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Create comparison template only;",
          "do not invent historical facts."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Map old concepts to modern embeddings/retrieval/ranking/LLM possibilities."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "List questions to recover from old materials."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Movie Recommender — THEN vs NOW"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Reserved historical-project placeholder",
        "detail": "Placeholder: historical VAE/recommendation/React details will be inserted later."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Create comparison template only; do not invent historical facts."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on movie recommender — then vs now without giving me the answer."
      }
    },
    "phaseNumber": 4
  },
  {
    "day": 28,
    "phaseName": "Phase 4 — Transformers + Historical Project #1",
    "focus": "REGRESSION SPRINT #4",
    "skillPillar": "Evaluation + communication",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Transformers + movie recommender comparison checkpoint."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Blank-page attention implementation + transformer diagram."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Explain what changed from the old recommender only from supplied evidence."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Record gaps;",
          "no guessed history."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: REGRESSION SPRINT #4"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Sprint checklist",
        "detail": "Transformers + movie recommender comparison checkpoint."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Blank-page attention implementation + transformer diagram."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on regression sprint #4 without giving me the answer."
      }
    },
    "phaseNumber": 4
  },
  {
    "day": 29,
    "phaseName": "Phase 5 — LLMs + Coding Agents",
    "focus": "LLM architecture",
    "skillPillar": "Transformers/LLMs",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Decoder-only models, context window, inference flow."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Trace a prompt through tokenization -> model -> decoding."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira V3: requirement + repo context design."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain LLM inference at a high level."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: LLM architecture"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Raschka",
        "detail": "Decoder-only models, context window, inference flow."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Trace a prompt through tokenization -> model -> decoding."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on llm architecture without giving me the answer."
      }
    },
    "phaseNumber": 5
  },
  {
    "day": 30,
    "phaseName": "Phase 5 — LLMs + Coding Agents",
    "focus": "Prompting and structured output",
    "skillPillar": "AI applications",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Roles, instructions, examples, constraints, schemas."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build reliable structured-output parser with validation."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: requirement -> typed plan JSON."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Test malformed outputs."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Prompting and structured output"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI Engineering / official model docs",
        "detail": "Roles, instructions, examples, constraints, schemas."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build reliable structured-output parser with validation."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on prompting and structured output without giving me the answer."
      }
    },
    "phaseNumber": 5
  },
  {
    "day": 31,
    "phaseName": "Phase 5 — LLMs + Coding Agents",
    "focus": "Tool calling",
    "skillPillar": "AI applications + coding agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Tool schemas, validation, permissions, retries."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement tool-calling loop with safe mock tools."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: repository/tool interface design."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain tool boundary vs model output."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Tool calling"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI Engineering",
        "detail": "Tool schemas, validation, permissions, retries."
      },
      "next": {
        "icon": "🎥",
        "label": "official docs",
        "detail": "Tool schemas, validation, permissions, retries."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement tool-calling loop with safe mock tools."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on tool calling without giving me the answer."
      }
    },
    "phaseNumber": 5
  },
  {
    "day": 32,
    "phaseName": "Phase 5 — LLMs + Coding Agents",
    "focus": "Coding-agent fundamentals",
    "skillPillar": "Coding agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Context, planning vs execution, steering, verification loops."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Use a coding agent on a small repo with tests and a clear spec."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira V3: agent-assisted implementation with verifier."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Review agent changes line-by-line."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Coding-agent fundamentals"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "DeepLearning.AI AI Engineering / SDD",
        "detail": "Context, planning vs execution, steering, verification loops."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Use a coding agent on a small repo with tests and a clear spec."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on coding-agent fundamentals without giving me the answer."
      }
    },
    "phaseNumber": 5
  },
  {
    "day": 33,
    "phaseName": "Phase 5 — LLMs + Coding Agents",
    "focus": "Context engineering",
    "skillPillar": "Coding agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Context selection, compression, relevance, state, memory."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build a context packer/selector for a small repo."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: relevant-file retrieval strategy."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain why more context can be worse."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Context engineering"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI Engineering / agent material",
        "detail": "Context selection, compression, relevance, state, memory."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build a context packer/selector for a small repo."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on context engineering without giving me the answer."
      }
    },
    "phaseNumber": 5
  },
  {
    "day": 34,
    "phaseName": "Phase 5 — LLMs + Coding Agents",
    "focus": "Jira V3 integration",
    "skillPillar": "Coding agents + software engineering",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Requirement -> spec -> repo context -> code -> tests -> review."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement end-to-end V3 with explicit approval boundary."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira AI Engineer milestone demo."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Run regression tests against previous tickets."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Jira V3 integration"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Project docs",
        "detail": "Requirement -> spec -> repo context -> code -> tests -> review."
      },
      "next": {
        "icon": "🎥",
        "label": "official APIs",
        "detail": "Requirement -> spec -> repo context -> code -> tests -> review."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement end-to-end V3 with explicit approval boundary."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on jira v3 integration without giving me the answer."
      }
    },
    "phaseNumber": 5
  },
  {
    "day": 35,
    "phaseName": "Phase 5 — LLMs + Coding Agents",
    "focus": "REGRESSION SPRINT #5",
    "skillPillar": "Evaluation + coding agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "LLM + coding-agent retrieval."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build structured-output workflow and tool loop from blank;",
          "diagnose bad context."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira V3 architecture defense."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Record failure modes and fixes."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: REGRESSION SPRINT #5"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Sprint checklist",
        "detail": "LLM + coding-agent retrieval."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build structured-output workflow and tool loop from blank; diagnose bad context."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on regression sprint #5 without giving me the answer."
      }
    },
    "phaseNumber": 5
  },
  {
    "day": 36,
    "phaseName": "Phase 6 — RAG + Evaluation",
    "focus": "Embeddings",
    "skillPillar": "RAG",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Semantic representation, embedding spaces, similarity."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Generate embeddings;",
          "inspect nearest neighbors."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "RAG project starts."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain semantic vs lexical search."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Embeddings"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI Engineering",
        "detail": "Semantic representation, embedding spaces, similarity."
      },
      "next": {
        "icon": "🎥",
        "label": "embedding docs",
        "detail": "Semantic representation, embedding spaces, similarity."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Generate embeddings; inspect nearest neighbors."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on embeddings without giving me the answer."
      }
    },
    "phaseNumber": 6
  },
  {
    "day": 37,
    "phaseName": "Phase 6 — RAG + Evaluation",
    "focus": "Chunking and ingestion",
    "skillPillar": "RAG",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Chunk size, overlap, metadata, parsing."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build ingestion pipeline with metadata."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "RAG: ingest project docs."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Compare chunking strategies."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Chunking and ingestion"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI Engineering",
        "detail": "Chunk size, overlap, metadata, parsing."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build ingestion pipeline with metadata."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on chunking and ingestion without giving me the answer."
      }
    },
    "phaseNumber": 6
  },
  {
    "day": 38,
    "phaseName": "Phase 6 — RAG + Evaluation",
    "focus": "Vector search",
    "skillPillar": "RAG",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "ANN intuition, filtering, top-k, hybrid retrieval."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Use a vector DB;",
          "measure retrieval hits."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "RAG retrieval layer."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain recall@k concept."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Vector search"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Vector DB docs",
        "detail": "ANN intuition, filtering, top-k, hybrid retrieval."
      },
      "next": {
        "icon": "🎥",
        "label": "AI Engineering",
        "detail": "ANN intuition, filtering, top-k, hybrid retrieval."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Use a vector DB; measure retrieval hits."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on vector search without giving me the answer."
      }
    },
    "phaseNumber": 6
  },
  {
    "day": 39,
    "phaseName": "Phase 6 — RAG + Evaluation",
    "focus": "Grounded generation",
    "skillPillar": "Evaluation + RAG",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Context assembly, citations/evidence, refusal behavior."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build grounded answer flow with evidence display."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "RAG application."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Break it with missing context."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Grounded generation"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI Engineering",
        "detail": "Context assembly, citations/evidence, refusal behavior."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build grounded answer flow with evidence display."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on grounded generation without giving me the answer."
      }
    },
    "phaseNumber": 6
  },
  {
    "day": 40,
    "phaseName": "Phase 6 — RAG + Evaluation",
    "focus": "RAG failure analysis",
    "skillPillar": "Evaluation",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Irrelevant retrieval, missing chunks, stale data, context overload."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Create failure taxonomy + targeted tests."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "RAG evaluation set."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Fix 3 deliberate failures."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: RAG failure analysis"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI Engineering",
        "detail": "Irrelevant retrieval, missing chunks, stale data, context overload."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Create failure taxonomy + targeted tests."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on rag failure analysis without giving me the answer."
      }
    },
    "phaseNumber": 6
  },
  {
    "day": 41,
    "phaseName": "Phase 6 — RAG + Evaluation",
    "focus": "RAG evaluation",
    "skillPillar": "Evaluation",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Retrieval quality, answer correctness, groundedness, regression set."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build eval harness and baseline metrics."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira repository RAG: search relevant files."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Compare before/after retrieval changes."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: RAG evaluation"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI Engineering",
        "detail": "Retrieval quality, answer correctness, groundedness, regression set."
      },
      "next": {
        "icon": "🎥",
        "label": "ChatGPT",
        "detail": "Retrieval quality, answer correctness, groundedness, regression set."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build eval harness and baseline metrics."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on rag evaluation without giving me the answer."
      }
    },
    "phaseNumber": 6
  },
  {
    "day": 42,
    "phaseName": "Phase 6 — RAG + Evaluation",
    "focus": "REGRESSION SPRINT #6",
    "skillPillar": "Evaluation + RAG",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "RAG reconstruction and diagnosis."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Rebuild ingestion/retrieval/generation from empty project;",
          "intentionally break retrieval."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira repo-RAG checkpoint."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Record retrieval vs generation failures."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: REGRESSION SPRINT #6"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Sprint checklist",
        "detail": "RAG reconstruction and diagnosis."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Rebuild ingestion/retrieval/generation from empty project; intentionally break retrieval."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on regression sprint #6 without giving me the answer."
      }
    },
    "phaseNumber": 6
  },
  {
    "day": 43,
    "phaseName": "Phase 7 — LangGraph + Agents + Agent Skills",
    "focus": "LangGraph state and nodes",
    "skillPillar": "Agents + software engineering",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "State, TypedDict, nodes, START/END, compile/invoke."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Rebuild Smart Router + Calculator."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Project 1 complete from memory."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain state transitions."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: LangGraph state and nodes"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "LangGraph official docs",
        "detail": "State, TypedDict, nodes, START/END, compile/invoke."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Rebuild Smart Router + Calculator."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on langgraph state and nodes without giving me the answer."
      }
    },
    "phaseNumber": 7
  },
  {
    "day": 44,
    "phaseName": "Phase 7 — LangGraph + Agents + Agent Skills",
    "focus": "Conditional routing",
    "skillPillar": "Agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Conditional edges, routing functions, state updates."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Add calculator/chat routing and tests."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Project 1 extension."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Test edge cases."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Conditional routing"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "LangGraph docs",
        "detail": "Conditional edges, routing functions, state updates."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Add calculator/chat routing and tests."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on conditional routing without giving me the answer."
      }
    },
    "phaseNumber": 7
  },
  {
    "day": 45,
    "phaseName": "Phase 7 — LangGraph + Agents + Agent Skills",
    "focus": "Parallel branches",
    "skillPillar": "Agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Shared state, independent branches, aggregation."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build Social Media Pipeline with Collect Results node."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Project 2 complete."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain branch convergence."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Parallel branches"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "LangGraph docs",
        "detail": "Shared state, independent branches, aggregation."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build Social Media Pipeline with Collect Results node."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on parallel branches without giving me the answer."
      }
    },
    "phaseNumber": 7
  },
  {
    "day": 46,
    "phaseName": "Phase 7 — LangGraph + Agents + Agent Skills",
    "focus": "Cycles and termination",
    "skillPillar": "Agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Reviewer/rewrite loop, counters, termination conditions."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build Self-Correcting Content workflow."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Project 3 complete."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Break infinite-loop protection deliberately."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Cycles and termination"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "LangGraph docs",
        "detail": "Reviewer/rewrite loop, counters, termination conditions."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build Self-Correcting Content workflow."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on cycles and termination without giving me the answer."
      }
    },
    "phaseNumber": 7
  },
  {
    "day": 47,
    "phaseName": "Phase 7 — LangGraph + Agents + Agent Skills",
    "focus": "Tools and agent workflows",
    "skillPillar": "Agents + security",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Tool nodes, permissions, retries, failure handling."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Add tools and approval boundary."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Mini agent: plan -> tool -> observe -> respond."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain workflow vs autonomous agent."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Tools and agent workflows"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "LangGraph docs",
        "detail": "Tool nodes, permissions, retries, failure handling."
      },
      "next": {
        "icon": "🎥",
        "label": "AI Engineering",
        "detail": "Tool nodes, permissions, retries, failure handling."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Add tools and approval boundary."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on tools and agent workflows without giving me the answer."
      }
    },
    "phaseNumber": 7
  },
  {
    "day": 48,
    "phaseName": "Phase 7 — LangGraph + Agents + Agent Skills",
    "focus": "MCP and reusable Agent Skills",
    "skillPillar": "Coding agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Tool interoperability, reusable skills, progressive disclosure."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build one small skill/tool package;",
          "connect through a controlled interface."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira V4: tools/MCP/skills experiment."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain when not to use multi-agent/MCP."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: MCP and reusable Agent Skills"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Current official docs / DeepLearning.AI material",
        "detail": "Tool interoperability, reusable skills, progressive disclosure."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build one small skill/tool package; connect through a controlled interface."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on mcp and reusable agent skills without giving me the answer."
      }
    },
    "phaseNumber": 7
  },
  {
    "day": 49,
    "phaseName": "Phase 7 — LangGraph + Agents + Agent Skills",
    "focus": "REGRESSION SPRINT #7",
    "skillPillar": "Evaluation + agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Workflow reconstruction."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Blank-page design + implement routing + branch + cycle + tool + termination."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira V4 architecture review."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Recovery tasks from failures."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: REGRESSION SPRINT #7"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Sprint checklist",
        "detail": "Workflow reconstruction."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Blank-page design + implement routing + branch + cycle + tool + termination."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on regression sprint #7 without giving me the answer."
      }
    },
    "phaseNumber": 7
  },
  {
    "day": 50,
    "phaseName": "Phase 8 — Production AI + Software Engineering",
    "focus": "FastAPI and service boundaries",
    "skillPillar": "Software engineering",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "API design, request/response models, async basics."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Expose one AI workflow through FastAPI."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira service boundary."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain API vs workflow boundary."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: FastAPI and service boundaries"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "FastAPI docs",
        "detail": "API design, request/response models, async basics."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Expose one AI workflow through FastAPI."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on fastapi and service boundaries without giving me the answer."
      }
    },
    "phaseNumber": 8
  },
  {
    "day": 51,
    "phaseName": "Phase 8 — Production AI + Software Engineering",
    "focus": "Persistence and data",
    "skillPillar": "Software engineering",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Postgres basics, schema design, migrations, caching."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Persist jobs/results/evals."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: store tickets, runs, approvals."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain consistency trade-offs."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Persistence and data"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "PostgreSQL docs",
        "detail": "Postgres basics, schema design, migrations, caching."
      },
      "next": {
        "icon": "🎥",
        "label": "DDIA selectively",
        "detail": "Postgres basics, schema design, migrations, caching."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Persist jobs/results/evals."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on persistence and data without giving me the answer."
      }
    },
    "phaseNumber": 8
  },
  {
    "day": 52,
    "phaseName": "Phase 8 — Production AI + Software Engineering",
    "focus": "Docker and configuration",
    "skillPillar": "Software engineering",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Containers, env vars, secrets, config separation."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Containerize service;",
          "local compose."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira deployment skeleton."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Debug config failure."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Docker and configuration"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Docker docs",
        "detail": "Containers, env vars, secrets, config separation."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Containerize service; local compose."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on docker and configuration without giving me the answer."
      }
    },
    "phaseNumber": 8
  },
  {
    "day": 53,
    "phaseName": "Phase 8 — Production AI + Software Engineering",
    "focus": "Reliability",
    "skillPillar": "Software engineering",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Retries, timeouts, idempotency, queues/background work."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Add retry limits, timeouts, idempotency keys."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: safe execution controls."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Simulate provider outage."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Reliability"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Designing Machine Learning Systems",
        "detail": "Retries, timeouts, idempotency, queues/background work."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Add retry limits, timeouts, idempotency keys."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on reliability without giving me the answer."
      }
    },
    "phaseNumber": 8
  },
  {
    "day": 54,
    "phaseName": "Phase 8 — Production AI + Software Engineering",
    "focus": "Security and guardrails",
    "skillPillar": "Security",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Prompt injection, excessive permissions, secret exposure, unsafe code execution."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Add allowlists, sandboxing strategy, approval gates."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: human approval before code execution/merge."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Threat-model one workflow."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Security and guardrails"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "OWASP",
        "detail": "Prompt injection, excessive permissions, secret exposure, unsafe code execution."
      },
      "next": {
        "icon": "🎥",
        "label": "AI security docs",
        "detail": "Prompt injection, excessive permissions, secret exposure, unsafe code execution."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Add allowlists, sandboxing strategy, approval gates."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on security and guardrails without giving me the answer."
      }
    },
    "phaseNumber": 8
  },
  {
    "day": 55,
    "phaseName": "Phase 8 — Production AI + Software Engineering",
    "focus": "Observability and cost",
    "skillPillar": "Evaluation + production",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Structured logs, traces, token/cost accounting, latency."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Add run IDs, logs, latency/cost metrics."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: evaluation dashboard basics."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain where cost/latency comes from."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Observability and cost"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI Engineering",
        "detail": "Structured logs, traces, token/cost accounting, latency."
      },
      "next": {
        "icon": "🎥",
        "label": "observability docs",
        "detail": "Structured logs, traces, token/cost accounting, latency."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Add run IDs, logs, latency/cost metrics."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on observability and cost without giving me the answer."
      }
    },
    "phaseNumber": 8
  },
  {
    "day": 56,
    "phaseName": "Phase 8 — Production AI + Software Engineering",
    "focus": "System design trade-offs",
    "skillPillar": "System design",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Scale, reliability, latency, cost, caching, failure recovery."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Draw architecture and alternatives for Jira AI Engineer."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Portfolio architecture document."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Mock system-design interview."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: System design trade-offs"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Designing Machine Learning Systems",
        "detail": "Scale, reliability, latency, cost, caching, failure recovery."
      },
      "next": {
        "icon": "🎥",
        "label": "DDIA",
        "detail": "Scale, reliability, latency, cost, caching, failure recovery."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Draw architecture and alternatives for Jira AI Engineer."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on system design trade-offs without giving me the answer."
      }
    },
    "phaseNumber": 8
  },
  {
    "day": 57,
    "phaseName": "Phase 9 — Evals + Product + AI-Native Engineering",
    "focus": "Evaluation architecture",
    "skillPillar": "Evaluation",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Offline vs online evals, golden sets, graders, human review."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build reusable eval runner."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: regression suite across tickets."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain evaluator failure modes."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Evaluation architecture"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI Engineering",
        "detail": "Offline vs online evals, golden sets, graders, human review."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build reusable eval runner."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on evaluation architecture without giving me the answer."
      }
    },
    "phaseNumber": 9
  },
  {
    "day": 58,
    "phaseName": "Phase 9 — Evals + Product + AI-Native Engineering",
    "focus": "Regression engineering",
    "skillPillar": "Evaluation",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Golden test sets, versioning, prompt/model changes."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Automate regression suite in CI-like workflow."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: every change runs targeted evals."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Intentionally introduce regression."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Regression engineering"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI Engineering",
        "detail": "Golden test sets, versioning, prompt/model changes."
      },
      "next": {
        "icon": "🎥",
        "label": "project docs",
        "detail": "Golden test sets, versioning, prompt/model changes."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Automate regression suite in CI-like workflow."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on regression engineering without giving me the answer."
      }
    },
    "phaseNumber": 9
  },
  {
    "day": 59,
    "phaseName": "Phase 9 — Evals + Product + AI-Native Engineering",
    "focus": "Agent verification",
    "skillPillar": "Coding agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Verifiers, test oracles, bounded autonomy, approval points."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Add verifier node and quality gate."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: code + tests + reviewer + human."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain where autonomy must stop."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Agent verification"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "SDD",
        "detail": "Verifiers, test oracles, bounded autonomy, approval points."
      },
      "next": {
        "icon": "🎥",
        "label": "coding-agent material",
        "detail": "Verifiers, test oracles, bounded autonomy, approval points."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Add verifier node and quality gate."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on agent verification without giving me the answer."
      }
    },
    "phaseNumber": 9
  },
  {
    "day": 60,
    "phaseName": "Phase 9 — Evals + Product + AI-Native Engineering",
    "focus": "Product/build shaping",
    "skillPillar": "Shaping the build",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Problem framing, users, success metrics, MVP, non-goals."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Write product brief + acceptance criteria."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: refine one real ticket as product owner/engineer."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Defend why/why-not build."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Product/build shaping"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "AI engineering/product material",
        "detail": "Problem framing, users, success metrics, MVP, non-goals."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Write product brief + acceptance criteria."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on product/build shaping without giving me the answer."
      }
    },
    "phaseNumber": 9
  },
  {
    "day": 61,
    "phaseName": "Phase 9 — Evals + Product + AI-Native Engineering",
    "focus": "Architecture decision records",
    "skillPillar": "Software engineering",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Capture alternatives, constraints, decision and consequences."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Write 3 ADRs for Jira system."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Portfolio engineering record."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Interview: defend each trade-off."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Architecture decision records"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Designing Machine Learning Systems",
        "detail": "Capture alternatives, constraints, decision and consequences."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Write 3 ADRs for Jira system."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on architecture decision records without giving me the answer."
      }
    },
    "phaseNumber": 9
  },
  {
    "day": 62,
    "phaseName": "Phase 9 — Evals + Product + AI-Native Engineering",
    "focus": "Coding-agent orchestration",
    "skillPillar": "Coding agents",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Planning, subagents, context budgets, parallel work, verification."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Run a bounded multi-agent experiment with isolated worktrees/files."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira: planner -> implementer -> reviewer."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Measure tokens/time/failure rate."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Coding-agent orchestration"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Current coding-agent guidance",
        "detail": "Planning, subagents, context budgets, parallel work, verification."
      },
      "next": {
        "icon": "🎥",
        "label": "project docs",
        "detail": "Planning, subagents, context budgets, parallel work, verification."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Run a bounded multi-agent experiment with isolated worktrees/files."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on coding-agent orchestration without giving me the answer."
      }
    },
    "phaseNumber": 9
  },
  {
    "day": 63,
    "phaseName": "Phase 9 — Evals + Product + AI-Native Engineering",
    "focus": "REGRESSION SPRINT #8",
    "skillPillar": "Evaluation + software engineering",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Full-stack AI engineering regression."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "From blank repo: design + implement a small AI service with eval, test, logging and approval."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira end-to-end milestone."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Create final recovery list."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: REGRESSION SPRINT #8"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Sprint checklist",
        "detail": "Full-stack AI engineering regression."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "From blank repo: design + implement a small AI service with eval, test, logging and approval."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on regression sprint #8 without giving me the answer."
      }
    },
    "phaseNumber": 9
  },
  {
    "day": 64,
    "phaseName": "Phase 10 — Historical Projects + Capstone Build",
    "focus": "Movie Recommender — modern redesign",
    "skillPillar": "Shaping the build",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Use supplied historical material;",
          "compare VAE/recommendation/React with modern embeddings/retrieval/ranking."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build a small modern recommender baseline only if historical details are available."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Historical Project #1 comparison artifact."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Identify genuine continuity vs change."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Movie Recommender — modern redesign"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Reserved project materials",
        "detail": "Use supplied historical material; compare VAE/recommendation/React with modern embeddings/retrieval/ranking."
      },
      "next": {
        "icon": "🎥",
        "label": "ML/AI resources",
        "detail": "Use supplied historical material; compare VAE/recommendation/React with modern embeddings/retrieval/ranking."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build a small modern recommender baseline only if historical details are available."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on movie recommender — modern redesign without giving me the answer."
      }
    },
    "phaseNumber": 10
  },
  {
    "day": 65,
    "phaseName": "Phase 10 — Historical Projects + Capstone Build",
    "focus": "Movie recommender evaluation",
    "skillPillar": "Evaluation",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Offline ranking metrics, retrieval quality, cold-start, user feedback."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Build evaluation notebook and error buckets."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Modern recommender mini-demo."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain metric trade-offs."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Movie recommender evaluation"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "ML evaluation resources",
        "detail": "Offline ranking metrics, retrieval quality, cold-start, user feedback."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Build evaluation notebook and error buckets."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on movie recommender evaluation without giving me the answer."
      }
    },
    "phaseNumber": 10
  },
  {
    "day": 66,
    "phaseName": "Phase 10 — Historical Projects + Capstone Build",
    "focus": "AR/CV then-vs-now placeholder",
    "skillPillar": "Shaping the build",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Reserved: inspect old streaming/AR/gesture stack when supplied."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Do not invent historical details;",
          "create comparison schema."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Historical Project #2 planning."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "List missing evidence/questions."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: AR/CV then-vs-now placeholder"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Reserved project materials",
        "detail": "Reserved: inspect old streaming/AR/gesture stack when supplied."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Do not invent historical details; create comparison schema."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on ar/cv then-vs-now placeholder without giving me the answer."
      }
    },
    "phaseNumber": 10
  },
  {
    "day": 67,
    "phaseName": "Phase 10 — Historical Projects + Capstone Build",
    "focus": "Real-time inference",
    "skillPillar": "ML/DL + production",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Latency budgets, batching, streaming, edge vs server, model optimization."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Prototype a real-time inference service or benchmark."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "AR/CV modern architecture sketch."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Explain latency budget."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Real-time inference"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Designing Machine Learning Systems",
        "detail": "Latency budgets, batching, streaming, edge vs server, model optimization."
      },
      "next": {
        "icon": "🎥",
        "label": "PyTorch",
        "detail": "Latency budgets, batching, streaming, edge vs server, model optimization."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Prototype a real-time inference service or benchmark."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on real-time inference without giving me the answer."
      }
    },
    "phaseNumber": 10
  },
  {
    "day": 68,
    "phaseName": "Phase 10 — Historical Projects + Capstone Build",
    "focus": "Jira AI Engineer final build I",
    "skillPillar": "AI applications",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Requirement -> spec -> retrieval -> plan -> code -> tests."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Implement production-style workflow with approval boundary."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Capstone build."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Run targeted regression set."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Jira AI Engineer final build I"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Project docs",
        "detail": "Requirement -> spec -> retrieval -> plan -> code -> tests."
      },
      "next": {
        "icon": "🎥",
        "label": "official docs",
        "detail": "Requirement -> spec -> retrieval -> plan -> code -> tests."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Implement production-style workflow with approval boundary."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on jira ai engineer final build i without giving me the answer."
      }
    },
    "phaseNumber": 10
  },
  {
    "day": 69,
    "phaseName": "Phase 10 — Historical Projects + Capstone Build",
    "focus": "Jira AI Engineer final build II",
    "skillPillar": "Production + security",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Security, observability, evals, failure recovery, documentation."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Harden system and produce architecture/ADR docs."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Capstone build + portfolio evidence."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Perform incident/failure drill."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Jira AI Engineer final build II"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Project docs",
        "detail": "Security, observability, evals, failure recovery, documentation."
      },
      "next": {
        "icon": "🎥",
        "label": "security/observability docs",
        "detail": "Security, observability, evals, failure recovery, documentation."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Harden system and produce architecture/ADR docs."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on jira ai engineer final build ii without giving me the answer."
      }
    },
    "phaseNumber": 10
  },
  {
    "day": 70,
    "phaseName": "Phase 10 — Historical Projects + Capstone Build",
    "focus": "REGRESSION SPRINT #9",
    "skillPillar": "Evaluation + communication",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Portfolio-level regression."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Rebuild core architecture diagrams and selected components from memory;",
          "run final eval suite."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Jira capstone review."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Finalize weak-area recovery."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: REGRESSION SPRINT #9"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Sprint checklist",
        "detail": "Portfolio-level regression."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Rebuild core architecture diagrams and selected components from memory; run final eval suite."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on regression sprint #9 without giving me the answer."
      }
    },
    "phaseNumber": 10
  },
  {
    "day": 71,
    "phaseName": "Phase 11 — Final Defense + Market Readiness",
    "focus": "AR/CV then-vs-now deep dive",
    "skillPillar": "Shaping the build",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Compare historical stack with modern CV/DL/real-time inference using only supplied project evidence."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Optional modern proof-of-concept component."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Historical Project #2 comparison artifact."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Prepare interview story: then -> now -> why."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: AR/CV then-vs-now deep dive"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Reserved project materials",
        "detail": "Compare historical stack with modern CV/DL/real-time inference using only supplied project evidence."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Optional modern proof-of-concept component."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on ar/cv then-vs-now deep dive without giving me the answer."
      }
    },
    "phaseNumber": 11
  },
  {
    "day": 72,
    "phaseName": "Phase 11 — Final Defense + Market Readiness",
    "focus": "Portfolio packaging",
    "skillPillar": "Communication",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "README, architecture diagrams, demo script, eval results, ADRs, limitations."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Package Jira capstone + selected ML/DL project."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Portfolio polish."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Practice 5-minute project walkthrough."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Portfolio packaging"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "Project docs",
        "detail": "README, architecture diagrams, demo script, eval results, ADRs, limitations."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Package Jira capstone + selected ML/DL project."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on portfolio packaging without giving me the answer."
      }
    },
    "phaseNumber": 11
  },
  {
    "day": 73,
    "phaseName": "Phase 11 — Final Defense + Market Readiness",
    "focus": "System design interview day",
    "skillPillar": "System design",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "AI system design: requirements, architecture, data, model, eval, security, scale, cost."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Whiteboard 2 systems from blank."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Mock interview."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Record gaps and correct them."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: System design interview day"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "DDIA",
        "detail": "AI system design: requirements, architecture, data, model, eval, security, scale, cost."
      },
      "next": {
        "icon": "🎥",
        "label": "Designing ML Systems",
        "detail": "AI system design: requirements, architecture, data, model, eval, security, scale, cost."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Whiteboard 2 systems from blank."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on system design interview day without giving me the answer."
      }
    },
    "phaseNumber": 11
  },
  {
    "day": 74,
    "phaseName": "Phase 11 — Final Defense + Market Readiness",
    "focus": "Final regression + technical defense",
    "skillPillar": "Evaluation + communication",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "Full curriculum retrieval;",
          "explain ML, DL, Transformers, RAG, agents, coding agents and production trade-offs."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Rebuild selected components from blank;",
          "run final regression suite."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Defend Jira architecture and historical-project comparisons."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Create final skill-gap list."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: Final regression + technical defense"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "All prior resources",
        "detail": "Full curriculum retrieval; explain ML, DL, Transformers, RAG, agents, coding agents and production trade-offs."
      },
      "next": null,
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Rebuild selected components from blank; run final regression suite."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on final regression + technical defense without giving me the answer."
      }
    },
    "phaseNumber": 11
  },
  {
    "day": 75,
    "phaseName": "Phase 11 — Final Defense + Market Readiness",
    "focus": "CAPSTONE / MARKET-READY DAY",
    "skillPillar": "All four AI Engineering pillars",
    "notes": "",
    "sections": {
      "learn": {
        "durationMin": 90,
        "items": [
          "No new major topic.",
          "Final demonstration and next-90-day plan."
        ]
      },
      "build": {
        "durationMin": 90,
        "items": [
          "Run capstone demo, tests, evals, failure drill and architecture defense."
        ]
      },
      "project": {
        "durationMin": 60,
        "items": [
          "Final AI Engineering Assistant: Jira + repo tools + RAG + LangGraph + code/tests + reviewer + human approval."
        ]
      },
      "revision": {
        "durationMin": 45,
        "items": [
          "Write next-90-day specialization plan."
        ]
      },
      "check": {
        "durationMin": 30,
        "items": [
          "5 questions / mini exercise on: CAPSTONE / MARKET-READY DAY"
        ]
      }
    },
    "resourceFlow": {
      "startHere": {
        "icon": "📘",
        "label": "All resources",
        "detail": "No new major topic. Final demonstration and next-90-day plan."
      },
      "next": {
        "icon": "🎥",
        "label": "official docs",
        "detail": "No new major topic. Final demonstration and next-90-day plan."
      },
      "practice": {
        "icon": "💻",
        "label": "Practice",
        "detail": "Run capstone demo, tests, evals, failure drill and architecture defense."
      },
      "verify": {
        "icon": "🤖",
        "label": "Ask ChatGPT",
        "detail": "Quiz me on capstone / market-ready day without giving me the answer."
      }
    },
    "phaseNumber": 11
  }
];
