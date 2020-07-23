(() => {
    // The web storage API allows key/value pairs to be stored in a more intuitive
    // method than cookies.
    //
    // The two mechanism of storage are:
    //  - sessionStorage stores key/value pairs for each given origin available
    //    during the page session.
    //      - Stores data only for a session.
    //      - Data is never transferred to the server
    //      - Storage limit is larger than a cookie (at most 5MB)
    //
    //  - localStorage is like sessionStorage, except the data persists when the
    //    browser closes.
    //      - Stored data has no expiration date (only clearable via JS, or clearing cache)
    //      - Storage limit: 3 local storage documents
    //
    // The two mechanisms are available via 'Window.sessionStorage' and 
    // 'Window.localStorage' properties. Invoking one creates an instance of the
    // 'Storage' object through which data items can be:
    //  - Set
    //  - Retrieved
    //  - Removed
    //
    // localStorage commands
    //  - xxxxxStorage.setItem("key", "value")
    //  - xxxxxStorage.getItem()
    //  - xxxxxStorage.removeItem()
    //  - xxxxxStorage.clear()

    // Exercise
    let btn = document.getElementById("clicker");
    btn.addEventListener("click", () => {
        let count = 0;
        if (localStorage.getItem("count") == null) {
            localStorage.setItem("count", 1);
        } else {
            count = localStorage.getItem("count");
            count++;
            localStorage.setItem("count", count);
        }
        console.log(count);
        document.querySelector("#display").textContent = `You have clicked the button ${count} times`;
    })

})(window);