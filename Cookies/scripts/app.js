(() => {
  // Cookies are data, stored locally in small text files.
  //  - Stored in name-value pairs
  //  - Delete themselves when the browser is closed by default

  // Create a cookie
  let name = prompt("What is your name?");
  document.cookie = `username=${name}`;

  // Cookie with expiry date in UTC
  let age = prompt("What is your age?");
  let date = new Date();
  date.setTime(date.getTime() + 3 * 24 * 60 * 1000);
  document.cookie = `age=${age}; expires=${date.toUTCString()}`;

  // A path can be added to indicate which file the cookie belongs to
  document.cookie = `age=${age}; expires=${date.toUTCString()}; path=/`;

  // Delete a cookie by removing the value and setting the expiry date
  // to a past date.
  document.cookie = "age=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

  function makeCookie(name, username, email, exDays) {
    let date = new Date();
    date.setTime(date.getTime() + exDays * 24 * 60 * 60 * 1000);
    let expiryUtc = date.toUTCString;
    document.cookie = `${name}=Username:${username} & Email:${email}; expires=${expiryUtc}; path=/`;
  }

  function myCookies() {
    document.write(document.cookie);
  }

  makeCookie("Login", "Fred", "Fred@mail.com", 5);
  myCookies();
})(window);
