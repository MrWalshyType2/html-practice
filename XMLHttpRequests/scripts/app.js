(() => {
  // XHRs allow interaction with external APIs.

  ////
  // XHR Object methods
  //  - new XMLHttpRequest()      | Creates a new XHR object
  //  - abort()                   | Cancels the current request
  //  - getAllResponseHeaders()   | Returns header information
  //  - getResponseHeader()       | Returns specific header information
  //  - open(method, url)         | Specifies/Initialises the request
  //  - send()                    | Sends the request to the server (Used for GET)
  //  - send(string)              | Sends the request to the server (Used for POST)
  //  - setRequestHeader()        | Adds a label/value pair to the header to be sent.
  //                                Must be called after open() and before send().
  //  - onreadystatechange()      | Defines a func to be called when the readyState
  //                                property changes.
  //  - onload()                  | Runs when transaction completes successfully.
  ////

  ////
  // Object properties
  //  - readyState                | Holds the status of the XHR.
  //                              | Params: 0 = request not initialised
  //                              |         4 = request finished, response ready
  //  - responseText              | Returns the response of the data as a string.
  //  - responseXML               | Returns the response of the data as XML data.
  //  - status                    | Returns the status-number of a request.
  //  - statusText                | Returns the status-text
  ////

  // Creating a XHR object
  const XHR = new XMLHttpRequest();
  XHR.onload = () => {
    if (XHR.status === 200 && XHR.readyState == 4) {
      if (
        XHR.getResponseHeader("Content-Type") ===
        "application/json;charset=UTF-8"
      ) {
        console.log("JSON Response: " + XHR.responseText);
      } else {
        console.log("Non-JSON Response: " + XHR.responseText);
      }
    } else {
      console.log("Error encountered...");
    }
  };

  XHR.open("GET", "https://reqres.in/api/users?page=2");
  // XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // XHR.setRequestHeader("Access-Control-Allow-Origin", "*"); // Fixes CORS error
  // XHR.onload = () => {
  //     if (XHR.status === 200 && XHR.readyState == 4) {
  //         console.log("Server response: " + XHR.responseText);
  //     } else {
  //         console.log("Response failure...");
  //     }
  // };
  XHR.send();

  setTimeout(() => {
    XHR.open("GET", "https://reqres.in/api/users/2");
    XHR.send();
  }, 3000);

  const newReq = new XMLHttpRequest();
  newReq.open("POST", "https://reqres.in/api/users/");
  newReq.onload = () => {
    if (newReq.status === 201 && newReq.readyState == 4) {
      console.log("Server response: " + newReq.responseText);
    } else {
      console.log("Response failure...");
    }
  };
  newReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  newReq.setRequestHeader("Access-Control-Allow-Origin", "*"); // Fixes CORS error
  let data = { name: "morpheus", job: "leader" };
  newReq.send(JSON.stringify(data));
})(window);
