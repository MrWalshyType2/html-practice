(() => {
    // Query Parameters are the URL-based parameters appended to a URL address.

    // Access the value of a query inside the browser with the
    // URLSearchParam API (supported by all modern browsers)
    //  - Only pass the query string (accessible via window.location.search)
    const params = new URLSearchParams(window.location.search);

    // See if a parameter passed
    console.log(params.has('test'));

    // Get a parameters value
    console.log(params.get('test'));

    // Params can be iterated over
    const params2 = new URLSearchParams("?name=Chris&name=Bacon");
    for (const param of params2) {
        console.log(param);
    }

    // Use .getAll() to get back an aray with all values passed of a
    // specified name
    const paramArr = params2.getAll("name");
    console.log(paramArr);

    // Other methods that operate on the return of a URLSearchParams include:
    //  - forEach() iterates over params
    //  - entries() returns an iterator containing all params key/values
    //  - keys() returns an iterator containing all param keys
    //  - values() returns an iterator containing all param values
    //  - append() appends a new param to the object
    //  - delete() deletes an existing param
    //  - set() sets the value of a parameter
    //  - sort() to sort parameters by key/value
    //  - toString() generates a query string from the values
})(window);