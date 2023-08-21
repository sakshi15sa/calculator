const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "^") {
      display.innerText += "^"; // Update the display
    } else if (item.id === "=") {
      let inputValue = display.innerText;
      if (inputValue.includes("^")) {
        let [base, exponent] = inputValue.split("^");
        base = parseFloat(base);
        exponent = parseFloat(exponent);
        if (!isNaN(base) && !isNaN(exponent)) {
          display.innerText = Math.pow(base, exponent);
        } else {
          display.innerText = "Error";
          setTimeout(() => (display.innerText = ""), 2000);
        }
      } else {
        try {
          let result = eval(inputValue);
          display.innerText = result;
        } catch (error) {
          display.innerText = "Error";
          setTimeout(() => (display.innerText = ""), 2000);
        }
      }
    } else if (item.id === "clear") {
      display.innerText = "";
    } else {
      display.innerText += item.id;
    }
  };
});

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
