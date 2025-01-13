// TODO: Set item in localStorage
localStorage.setItem("age", "32");
// TODO: Get item from localStorage
let value = localStorage.getItem("age");
console.log(value);
// TODO: Remove item from localStorage
localStorage.removeItem("age");
// TODO: Clear all items from localStorage
localStorage.clear();
// TODO: Add an object to localStorage
let user = { name: "Sergio", age: 32 };
localStorage.setitem("user", JSON.stringify(user));
// TODO: Get an object from localStorage
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);
console.log(storedUser.age);
// TODO: Set item in sessionStorage
sessionStorage.setItem("country", "Norway");
// TODO: Get item from sessionStorage
let value2 = sessionStorage.getItem("country");
console.log(value2);
// TODO: Remove item from sessionStorage
sessionStorage.removeItem("country");
// TODO: Clear all items from sessionStorage
sessionStorage.clear();
// TODO: Add an object to sessionStorage
let user2 = { name: "Erlend", country: "Norway" };
sessionStorage.setItem("user", JSON.stringify(user2));
// TODO: Get an object from sessionStorage
let storedUser2 = JSON.parse(sessionStorage.getItem("user"));
console.log(storedUser2.name);
console.log(storedUser2.country);
