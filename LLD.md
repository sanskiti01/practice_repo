# LLD — BugLab
## Frontend
`App.jsx` owns route composition. `Layout.jsx` owns shared navigation. `Bugs.jsx` uses controlled filter inputs, useState, useEffect and async API calls. `BugDetail.jsx` demonstrates controlled form state, validation, loading and error states.
## Backend
`server.js` composes middleware and routes. `validate.js` contains Zod request validation and Multer upload validation. `errorHandler.js` sanitizes client responses and hides internal details. `bugService.js` implements filtering, ordering and query construction. `aiService.js` implements sanitization, prompt guard, RAG, tool inspection, LLM/mock fallback and structured validation.
## Data
Prisma schema uses User, Bug and BugAttempt with PK/FK relationships and indexes. `MongoBug` demonstrates a document model and indexes.
## Security
Passwords use bcrypt. JWT carries identity and role. Role middleware is available for admin routes. Rate limiting protects API and AI endpoints. Secrets come from environment variables. Uploads are size/type restricted.
## Integration
Redis cache, WebSocket, cron, SSE, SSR HTML, payment mock and third-party API adapter are isolated behind explicit endpoints.
