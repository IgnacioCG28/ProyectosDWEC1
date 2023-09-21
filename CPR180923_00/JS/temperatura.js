
		function convertirTemp() {
			// Obtener el valor del campo de texto
			var temp = document.getElementById("temp").value;

			// Convertir a faren
			var fahre = (temp * 9 / 5) + 32;
          
			// Mostrar el resultado en la página
			document.getElementById("resultado").innerHTML = temp + "C° son " + fahre.toFixed(2) + "°F";
		}