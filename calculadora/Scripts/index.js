document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const Sdisplay = document.getElementById("second-display");
  const buttons = document.querySelectorAll("button");
  let resul;

  buttons.forEach((element) => {
    element.onclick = () => {
      if (element.id === "equal" && display.value !== "") {
        try {
          Sdisplay.value = display.value + "=";
          display.value = eval(display.value);
        } catch (error) {
          display.value = "ERROR";
          setTimeout(() => (display.value = ""), 2000);
          setTimeout(() => (Sdisplay.value = ""), 2000);
        }
      } else if (element.id === "equal" && display.value == "") {
        display.value = "Empty";
        Sdisplay.value = "¿En serio?";
        setTimeout(() => (display.value = ""), 2000);
        setTimeout(() => (Sdisplay.value = ""), 2000);
      } else if (element.id === "clear") {
        display.value = "";
        Sdisplay.value = "";
      } else if (element.id === "clear-digit") {
        let string = display.value.toString();
        display.value = string.substring(0, string.length - 1);
      } else if (element.id === "clear-entry") {
        if (display.value.trim().length > 0) {
          // Con value
          if (Sdisplay.value.length > 0) {
            // Elimina el "=" antes de copiar el contenido de Sdisplay
            display.value = Sdisplay.value.replace("=", "");
            Sdisplay.value = "";
          } else {
            display.value = Sdisplay.value;
            Sdisplay.value = "";
          }
        } else {
          // Línea importante =>
          display.value = Sdisplay.value;
        }
      } else if (element.id === "percentage") {
        resul = parseFloat(display.value) / 100;
        Sdisplay.value = display.value;
        display.value = resul;
      } else if (element.id === "power") {
        resul = Math.pow(parseFloat(display.value), 2);
        Sdisplay.value = display.value;
        display.value = resul;
      } else if (element.id === "square-root") {
        resul = Math.sqrt(parseFloat(display.value), 2);
        Sdisplay.value = display.value;
        display.value = resul;
      } else if (element.id === "inverse") {
        resul = 1 / parseFloat(display.value);
        Sdisplay.value = display.value;
        display.value = resul;
      } else if (element.id === "positive-negative") {
        if (display.value >= 0) {
          display.value = "-" + display.value;
        } else {
          display.value = display.value.replace("-", "");
        }
      } else {
        display.value += element.id;
      }
    };
  });
});
