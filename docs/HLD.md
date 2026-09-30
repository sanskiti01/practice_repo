# HLD — BugLab
```text
React/Vite client
      | HTTP / SSE / WebSocket
      v
Express API
 |-- Auth/JWT/RBAC
 |-- Bug REST service
 |-- Validation + rate limiting + errors
 |-- AI orchestration
 |     |-- prompt guard
 |     |-- RAG retrieval
 |     |-- tool inspection
 |     |-- LLM/mock
 |     `-- structured validation
 |-- Uploads
 `-- Integrations
      |-- PostgreSQL/Prisma
      |-- Mongo/Mongoose
      |-- Redis
      |-- third-party API
      `-- payment mock
```
PostgreSQL is the relational source for users, bugs and attempts. Mongo demonstrates document modeling and search-oriented data. Redis is an optional cache. SSE streams AI responses and WebSocket broadcasts realtime events. Docker Compose provides local infrastructure.
