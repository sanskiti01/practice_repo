# BugLab — 63 Project Score Concepts

BugLab is a full-stack debugging practice platform prepared as a Project Score demonstration repository.

## Required Project Documents

The following documents are intentionally at the repository root for repository validators:

- `PRD.md` — Product Requirements Document
- `HLD.md` — High-Level Design
- `LLD.md` — Low-Level Design
- `PROJECT_ASSESSOR_MAPPING.md` — mapping of all 63 Project Score concepts to project files/demos

Detailed copies and supporting notes are also available under `docs/`.

## Stack
- React + Vite + React Router
- Express
- PostgreSQL + Prisma
- MongoDB/Mongoose demonstration layer
- JWT + bcrypt + OAuth starter
- AI/LLM-compatible service with deterministic fallback
- RAG, structured outputs, SSE, WebSocket, Redis adapter, cron, Docker, and tests

## Run
1. `cd server && npm install`
2. Copy `.env.example` to `.env` and configure services you want to use.
3. Start the server with the available npm script.
4. `cd client && npm install && npm run dev`

Some external services intentionally use local/mock adapters unless credentials or infrastructure are supplied. See `PROJECT_ASSESSOR_MAPPING.md` for the exact implementation boundaries.
