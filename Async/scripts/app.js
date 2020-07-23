(() => {
  // A thread is a single process that a program can use to complete a single task.
  // Each task runs sequentially....
  //  Task A --> Task B --> Task C
  //
  // JS is traditionally single-threaded (operating on the main thread).
  //  - Originally overcome with callbacks (callback hell :O)
  //  - Promises escaped callback hell, making function chaining straightforward.
  //  - Async and await statements allow synchronous Promise-based code without
  //    blocking the main thread
  //
  // An async function always returns a promise.
  // The await keyword pauses async function execution until promise completion.
  //
  // Fetch requests provide XMLHttpRequest style functionality (simplified).
  //  - Make by passing a URL to fetch(), then chaining .then() and .catch() methods.
  //  - fetch() promises do not reject on an error code, they instead:
  //      - resolves with property: response.ok == false

  async function asyncFunction1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("aF1");
        resolve("Done aF1");
        // reject("Failed aF1");
      }, 3000);
    });
  }

  async function asyncFunction2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("aF2");
        resolve("Done aF2");
      }, 2000);
    });
  }

  async function asyncFunction3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("aF3");
        resolve("Done aF3");
      }, 1000);
    });
  }

  async function doThings() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
    return "All Done!";
  }

  doThings()
    .then((result) => console.log(result))
    .catch((error) => {
      console.log(error);
    });
})(window);
