# AI Engineering Learning Dashboard

A 75-day AI/ML/LLM learning tracker, replacing the source Excel plan with a daily-actionable dashboard.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind · shadcn/ui · MongoDB Atlas · deployed on Vercel.

## Local setup

1. `npm install`
2. Create a free MongoDB Atlas cluster (M0 tier) at https://www.mongodb.com/cloud/atlas — under Network Access, allow your current IP (or `0.0.0.0/0` for convenience during development).
3. Copy `.env.example` to `.env.local` and set `MONGODB_URI` to your Atlas connection string.
4. `npm run dev` and open http://localhost:3000

## Regenerating curriculum data

The 75 days, phases, projects, study system notes, resources, and regression sprints are generated once from `AI_ML_LLM_75_Day_Master_Plan.xlsx` into `src/data/*.ts`. To regenerate after editing the source spreadsheet:

```bash
node scripts/extract-excel.mjs
node scripts/generate-curriculum.mjs
```

## Tests

```bash
npm test
```

## Deploying to Vercel

1. Push this repo to GitHub (already configured as `origin`: `https://github.com/ByteKilns/ai-learning-tracker.git`).
2. Import the repo in Vercel (free tier).
3. Add `MONGODB_URI` as a Vercel project environment variable (same value as `.env.local`).
4. Deploy.
