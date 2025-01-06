const form = document.querySelector("form");
form.style.fontFamily = "Helvetica, sans-serif";
form.style.maxWidth = "500px";
form.style.margin = "0 auto";
form.style.padding = "20px";
form.style.backgroundColor = "#ffce1b";
form.style.borderRadius = "8px";
form.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";

const inputs = document.querySelectorAll("input, textarea, select");
inputs.forEach((input) => {
  input.style.width = "60%";
  input.style.padding = "8px";
  input.style.marginBottom = "10px";
  input.style.borderRadius = "4px";
  input.style.border = "1px solid #fff";
  input.addEventListener("focus", () => {
    input.style.outline = "2px solid #800020";
  });
  input.addEventListener("blur", () => {
    input.style.outline = "none";
  });
});

const labels = document.querySelectorAll("label");
labels.forEach((label) => {
  label.style.display = "block";
  label.style.marginBottom = "5px";
  label.style.fontWeight = "bold";
});

const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radio) => {
  radio.style.marginRight = "5px";
  radio.style.width = "10%";
  radio.style.accentColor = "#800020";
  const label = document.querySelector(`label[for="${radio.id}"]`);
  label.style.display = "inline-block";
  label.style.marginRight = "15px";
});

const submitButton = document.querySelector('input[type="submit"]');
submitButton.style.backgroundColor = "#800020";
submitButton.style.color = "white";
submitButton.style.padding = "10px 20px";
submitButton.style.marginTop = "20px";
submitButton.style.border = "none";
submitButton.style.borderRadius = "8px";
submitButton.style.fontWeight = "600";
submitButton.style.fontSize = "1rem";
submitButton.style.cursor = "pointer";
