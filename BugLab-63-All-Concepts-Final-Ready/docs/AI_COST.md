# AI cost controls
Use a model selected by `OPENAI_MODEL`, cap input length in `sanitize`, prefer RAG snippets over sending a large knowledge base, rate-limit AI routes, and log response token usage when a provider returns usage metadata. A real production implementation should persist these metrics.
