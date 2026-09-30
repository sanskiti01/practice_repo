# Project Assessor — 63 Concept Mapping

| # | Concept | Implementation |
|---|---|---|
|1|React component composition|`client/src/App.jsx`, `components/Layout.jsx`|
|2|useState|`client/src/pages/Bugs.jsx`, `BugDetail.jsx`|
|3|useEffect|`Dashboard.jsx`, `Bugs.jsx`, `BugDetail.jsx`|
|4|Async API fetching|`client/src/services/api.js` + pages|
|5|Loading/error UI|`Dashboard.jsx`, `Bugs.jsx`, `BugDetail.jsx`|
|6|Controlled inputs|`Bugs.jsx`, `BugDetail.jsx`, `Login.jsx`|
|7|Form validation|`BugDetail.jsx`, backend Zod validation|
|8|Client-side routing|`client/src/App.jsx`|
|9|Responsive styling|`client/src/styles/global.css`|
|10|Frontend deployment|`client/package.json`, Vite build|
|11|Problem modeling|`docs/PRD.md` + Bug/BugAttempt models|
|12|System design basics|`docs/HLD.md`|
|13|REST endpoint design|`server/src/routes/*`|
|14|HTTP status codes|controllers use 200/201/400/401/404/409/500|
|15|Request body validation|`middleware/validate.js`|
|16|Server-side error handling|`middleware/errorHandler.js`|
|17|Middleware|`server.js`, auth, validation, rate limit|
|18|File upload|Multer in `middleware/validate.js` and `bugRoutes.js`|
|19|Backend deployment|`Dockerfile`|
|20|Mongo schema|`models/MongoBug.js`|
|21|Mongo CRUD|Mongo model + `/api/advanced/mongo-demo` adapter point|
|22|Embedding vs referencing|`models/MongoBug.js` + LLD data discussion|
|23|Mongo aggregation|`models/MongoBug.js` is ready for aggregation; see `docs/OPTIONAL_MONGO.md`|
|24|Mongo indexing|text + field indexes in `MongoBug.js`|
|25|Postgres PK/FK|`server/prisma/schema.prisma`|
|26|SQL JOINs|Prisma relation query `/api/advanced/sql-join`|
|27|SQL indexes|`@@index` in Prisma schema|
|28|Filtering/ordering/grouping|`services/bugService.js`|
|29|Normalization|separate User/Bug/BugAttempt relations|
|30|ORM usage|Prisma in `db.js` and controllers|
|31|Transactions|`docs/OPTIONAL_SQL.md` shows transaction pattern|
|32|Password hashing|`utils/auth.js` bcrypt|
|33|JWT|`utils/auth.js`|
|34|RBAC|`requireRole` in `utils/auth.js`|
|35|OAuth|`authController.js` Google starter endpoint|
|36|Sanitization/injection awareness|`aiService.js` sanitize + prompt guard|
|37|Rate limiting|`middleware/rateLimit.js`|
|38|LLM API integration|`services/aiService.js` OpenAI-compatible path|
|39|Prompt engineering|controlled tutor prompt in `aiService.js`|
|40|Structured outputs|AI JSON schema + `validateStructured`|
|41|Streaming|`controllers/aiController.js` SSE|
|42|Function/tool use|`toolInspect()` in `aiService.js`|
|43|RAG|`services/ragService.js` deterministic retrieval|
|44|LLM eval sets|`docs/evals.md` + test/eval pattern|
|45|Prompt injection defenses|`guard()` in `aiService.js`|
|46|Token/cost monitoring|`docs/AI_COST.md` + response-length controls|
|47|Multi-step agent|sanitize → guard → RAG → tool → prompt → LLM → validation|
|48|Git workflow|`.gitignore` + `docs/GIT_WORKFLOW.md`|
|49|Environment/secrets|`server/.env.example`|
|50|Unit tests|`server/src/tests/*.test.js`|
|51|Docker|`Dockerfile`, `docker-compose.yml`|
|52|API/integration tests|`docs/API_TESTING.md` + REST endpoints|
|53|Redis caching|`services/integrations.js` + cached-stats endpoint|
|54|WebSocket|`server.js` `/ws`|
|55|Scheduled jobs|`jobs/cron.js`|
|56|SSR|`/api/advanced/ssr`|
|57|Payment gateway|`services/integrations.js` mock payment adapter|
|58|3rd-party API|`thirdPartyLookup()` adapter|
|59|Event loop|`docs/JS_CONCEPTS.md`|
|60|Promises vs callbacks|`docs/JS_CONCEPTS.md`|
|61|async/await|throughout server/client services|
|62|Closures|`docs/JS_CONCEPTS.md` rate limiter examples|
|63|Hoisting|`docs/JS_CONCEPTS.md`|

> Important: some external integrations intentionally use local/mock adapters unless credentials or infrastructure are supplied. During the viva, explain the boundary and trade-off rather than claiming a live provider is connected.

## Direct demo endpoints
- Mongo CRUD: `POST/GET /api/data/mongo/bugs`
- Mongo aggregation: `GET /api/data/mongo/aggregate`
- SQL transaction: `POST /api/data/sql/transaction`
- WebSocket: `ws://localhost:5000/ws`
- SSR: `GET /api/advanced/ssr`
- Cache: `GET /api/advanced/cached-stats`
- Payment adapter: `POST /api/advanced/payment`
- Third-party adapter: `GET /api/advanced/third-party`
- JavaScript demos: `client/src/utils/jsConcepts.js`
