(() => {
    let body = document.querySelector(".container");
    body.setAttribute("contenteditable", "true");
    // alert(body.getAttribute("contenteditable"));
    alert(body.getAttribute("contenteditable"));

    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    h2.innerText = "Bob doo daa";
    h1.innerText = "Hello there";
    body.appendChild(h1);
    
    setTimeout(() => { body.replaceChild(h2, h1); }, 3000);

    body.removeAttribute("contenteditable");
})(window);