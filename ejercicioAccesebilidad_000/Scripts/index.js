/**
 * Autor: Ignacio Carmona González 
 * Github: https://github.com/IgnacioCG28/accesibilidad2.git
 */
const nombreInput = document.getElementById("nombre");
const contraseña = document.getElementById("password");

document.getElementById("form-registro").addEventListener("submit", function(event) {
  if (nombreInput.value.length === 0) {
    alert("El campo de NOMBRE está vacío. Por favor, ingresa un nombre válido.");
    event.preventDefault(); 
  } if (password.value.length < 8) {
    alert("El campo de CONTRASEÑA es muy corto. Por favor, ingresa una contraseña de 8 o más.");
    event.preventDefault(); 
  }
});

