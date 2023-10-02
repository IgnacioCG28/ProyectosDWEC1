/** 
 *  Autor: Ignacio Carmona González 2º DAW
 *  GitHub: 
*/

document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const Sdisplay = document.getElementById("second-display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((item) => {
    item.onclick = () => {
      if (item.id == "clear") {
        Sdisplay.value = "";
        display.value = "";
      } else if (item.id == "clear-digit") {
        let string = display.value.toString();
        display.value = string.substring(0, string.length - 1);
      } else if (item.id == "clear-entry") {
        display.value = "";
      } else if (display.value != "" && item.id == "equal") {
        Sdisplay.value = display.value;
        display.value = eval(display.value);
      } else if (display.value == "" && item.id == "equal") {
        display.value = "Null";
        setTimeout(() => (display.value = ""), 2000);
      } else if (item.id == "percentage") {
        Sdisplay.value = display.value;
        const input = display.value;
        const percentageValue = parseFloat(input) / 100;
        display.value = percentageValue;
      } else if (item.id == "power") {
        fdisplay.value = display.value;
        input = display.value;
        const powerValue = parseFloat(input) * input;
        display.value = powerValue;
      } else if (item.id == "square-root") {
        Sdisplay.value = display.value;
        input = display.value;
        const rootResult = Math.sqrt(input, 2);
        display.value = rootResult;
      } else if (item.id == "inverse") {
        Sdisplay.value = display.value;
        input = display.value;
        const inverResult = 1/ (parseFloat(input));
        display.value = deriResult;
      } else if (item.id == "positive-negative") {
        input = display.value;
        if (input >= 0) {
          display.value = "-" + input;
        }
      } else {
        display.value += item.id;
      }
    };
  });
  
});
