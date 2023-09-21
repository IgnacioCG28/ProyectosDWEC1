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
