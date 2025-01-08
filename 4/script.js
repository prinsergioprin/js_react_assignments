const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  if (event.target.matches("button")) {
    alert(`${event.target.textContent} clicked`);
  } else {
    alert("Child container clicked!");
  }
});

const button2 = document.getElementById("button2");
button2.onclick = function (event) {
  event.stopPropagation();
  alert("Button 2 clicked");
};

const button3 = document.getElementById("button3");
button3.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Button 3 clicked");
});
