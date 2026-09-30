// Project Score JavaScript demonstrations used by the Debug Lab UI/tests.
export function eventLoopDemo(){const events=[];events.push('sync');Promise.resolve().then(()=>events.push('microtask'));setTimeout(()=>events.push('timer'),0);return events;}
export function callbackStyle(value,cb){setTimeout(()=>cb(null,value*2),0)}
export function promiseStyle(value){return Promise.resolve(value*2)}
export async function asyncAwaitStyle(value){return await promiseStyle(value)}
export function makeCounter(){let count=0;return ()=>++count} // closure: returned function keeps access to count
export function hoistingDemo(){return declaredFunction();function declaredFunction(){return 'function declarations are hoisted'}}
