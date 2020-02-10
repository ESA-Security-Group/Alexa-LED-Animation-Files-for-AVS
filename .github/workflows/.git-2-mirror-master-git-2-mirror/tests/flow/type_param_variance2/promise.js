/**
 * Here the definition of Promise<T> is routed to the class Promise
 * in the user-specified library libs/Promise.js
 *
 * In such situations we must desugar async/await primitives
 * to the shadowed library definition.
 *
 * @flow
 */

async function foo(x: boolean): Promise<?{bar: string}> {
  if (x) {
    return {bar: 'baz'};  // OK, because of covariant type param
  } else {
    return null;
  }
}

async function run() {
  console.log(await foo(true));
  console.log(await foo(false));
}

run()
