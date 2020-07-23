(() => {
  ////
  // A JS HTTP request is a server side object representing a request to the server,
  // request methods are:
  //  - GET      | Retrieves data
  //  - HEAD     | Retrieves data without the response body
  //  - POST     | Submits an entity to a specified resource.
  //  - PUT      | Replaces all current representations of the target resource with the
  //               requested payload.
  //  - DELETE   | Deletes the specified resource.
  //  - CONNECT  | Establishes a tunnel to the server identified by the target resource.
  //  - OPTIONS  | Describes the communication options for the target resource.
  //  - TRACE    | Performs a message loop-back test along path to the target resource.
  //  - PATCH    | Applies a partial modification to a resource.
  ////

  ////
  // HTTP Status codes indicate the status of a HTTP Request, grouped into 5 classes:
  //  - Information responses (100 - 199)
  //  - Successful responses  (200 - 299)
  //  - Redirects             (300 - 399)
  //  - Client Errors         (400 - 499)
  //  - Server errors         (500 - 599)
  //
  //  - 100 (Continue)
  //    - Response indicates the request is OK so far. Client either continues the
  //      the request or ignores the response if the request is finished.
  //
  //  - 200 (OK)
  //    - Shows that the request was successful. Users usually do not see this.
  //
  //  - 301 (Moved Permanently)
  //    - Data requested cannot be found due to the given address having been moved
  //      permanently. Current location is delivered in the status report so the
  //      browser requests the new address straight away and forwards the user.
  //
  //  - 302 (Moved Temporarily)
  //    - Requested data has temporarily moved. Auto-redirection occurs.
  //
  //  - 403 (Forbidden)
  //    - Tells the client the requested data is access-protected and the request
  //      cannot be performed due to the client not having the authority.
  //
  //  - 404 (Not Found)
  //    - Request web info was not found on the server.
  //
  //  - 500 (Internal Server Error)
  //    - Collection status code for unexpected server errors.
  ////
})(window);
