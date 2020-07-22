(() => {
  // A promise is a placeholder for some data that will become available...
  // A promise is in one of three states:
  //    Pending - Unfulfilled or not yet rejected
  //    Fulfilled/Success - The action succeeded
  //    Reject/Failed - The action failed
  // Two other methods can be used with promises:
  //    .then() - what should happen if successful
  //    .catch() - what should happen if failed/rejected
    let newPromise = new Promise((resolve, reject) => {
        let a = 1 + 0;
        if (a == 2) {
            resolve("Success");
        } else {
            reject("Failed");
        }
    });

    newPromise.then((message) => {
        console.log(`This is in the then block, status: ${message}`);
    }).catch((message) => {
        console.log(`This is in the catch block, status: ${message}`);
    }).then(() => {
        console.log("This block runs no matter what.");
    });

    let passingPromise = new Promise((resolve, reject) => {
        let a = 1 + 1;
        a == 2 ? resolve("Success") : reject("Failed");
    });

    passingPromise.then((message) => {
        console.log(`This is in the then block, status: ${message}`);
    }).catch((message) => {
        console.log(`This is in the catch block, status: ${message}`);
    }).then(() => {
        console.log("This block runs no matter what.");
    });


    // A callback function is a function passed into another function as
    // an argument, which is invoked inside the outer function.
    function greeting(name) {
        alert(`Hello ${name}`);
    }

    function processUserInput(callback) {
        let name = prompt("Please enter your name: ");
        callback(name);
    }

    processUserInput(greeting);

})(window);
