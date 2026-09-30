# JavaScript concepts for viva
## Event loop
Promise callbacks are queued as microtasks and timers as tasks; synchronous code runs first.
## Promises vs callbacks
Promises compose asynchronous operations and make error propagation with `.catch()` or `async/await` clearer than deeply nested callbacks.
## async/await
The client and server use `async/await` around fetch and database calls; rejected promises are handled with try/catch or route-level error handling.
## Closures
Factory functions such as `requireRole(role)` return middleware that closes over the selected role.
## Hoisting
Function declarations are hoisted; `let` and `const` are not safely usable before initialization. Keep declarations before use for readability.
