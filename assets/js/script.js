// Numbers
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");

// Result
const result = document.querySelector(".result");

// Buttons
const addition = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");

addition.addEventListener("click", function () {
  if (!isNaN(num1.value) && !isNaN(num2.value)) {
    result.textContent = parseInt(num1.value) + parseInt(num2.value);
  } else {
    result.textContent = "Invalid input";
  }
});
subtraction.addEventListener("click", function () {
  if (!isNaN(num1.value) && !isNaN(num2.value)) {
    result.textContent = parseInt(num1.value) - parseInt(num2.value);
  } else {
    result.textContent = "Invalid input";
  }
});
multiplication.addEventListener("click", function () {
  if (!isNaN(num1.value) && !isNaN(num2.value)) {
    result.textContent = parseInt(num1.value) * parseInt(num2.value);
  } else {
    result.textContent = "Invalid input";
  }
});
division.addEventListener("click", function () {
  if (!isNaN(num1.value) && !isNaN(num2.value)) {
    if (parseInt(num2.value != 0)) {
      result.textContent = parseInt(num1.value) / parseInt(num2.value);
    } else {
      result.textContent = "Division by zero error";
    }
  } else {
    result.textContent = "Invalid input";
  }
});
