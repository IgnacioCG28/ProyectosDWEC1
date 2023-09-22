// FUnción para generar un color aleatorio en formato hexadecimal
const generateRandomColor = () => {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log("Color hexadecimal generado: " + color);
  return color;
};

// Función para cambiar el color del body
const changeBackgroundColor = () => {
  const newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;
};

// Agrear un evento al botón para cambiar el color al hacer click.
const changeColorBtn = document.getElementById("changeColorBtn");

// Función para realizar operaciones matemáticas
function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  let result;

  switch (operator) {
      case 'add':
          result = num1 + num2;
          break;
      case 'subtract':
          result = num1 - num2;
          break;
      case 'multiply':
          result = num1 * num2;
          break;
      case 'divide':
          if (num2 === 0) {
              result = 'No se puede dividir por cero';
          } else {
              result = num1 / num2;
          }
          break;
      default:
          result = 'Operación no válida';
  }

  document.getElementById('result').textContent = 'Resultado: ' + result;
}

// Función para reiniciar el formulario
function resetForm() {
  document.getElementById('calculator-form').reset();
  document.getElementById('result').textContent = '';
}

// Manejar el envío del formulario
document.getElementById('calculator-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar el envío del formulario
  calculate();
});

// Manejar el botón de reinicio
document.getElementById('reset').addEventListener('click', function () {
  resetForm();
});