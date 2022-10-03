const input = document.querySelector("#input");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  try {
    if (input == "") throw "input is empty";
    if (isNaN(input)) throw "input is not a number";
    if (input < 5 || input > 10) throw "input is not in range";
  } catch (error) {
    alert(input.value + "error");
  }
});
