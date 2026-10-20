const BOTONES = document.querySelectorAll(".btn-add");
const FILAS = document.querySelectorAll(".table-taller tbody tr");
const LISTA = document.getElementById("lista-carrito");
const VACIO = document.getElementById("vacio-carrito");
const TOTAL_SPAN = document.getElementById("carrito-total");
const AVISO = document.getElementById("aviso-carrito");
const BTN_VACIAR = document.getElementById("vaciar-carrito");

let cantidades = [];

for (let i = 0; i < FILAS.length; i++) {
	cantidades[i] = 0;
}

for (let i = 0; i < BOTONES.length; i++) {
	BOTONES[i].addEventListener("click", function () {
		cantidades[i] = cantidades[i] + 1;
		mostrarCarrito();
	});
}

BTN_VACIAR.addEventListener("click", function () {
	for (let i = 0; i < cantidades.length; i++) {
		cantidades[i] = 0;
	}
	mostrarCarrito();
});

function mostrarCarrito() {
	LISTA.innerHTML = "";

	let total = 0;
	let hayAlgo = false;
	let hayPieza = false;

	for (let i = 0; i < FILAS.length; i++) {
		if (cantidades[i] > 0) {
			hayAlgo = true;

			let nombre = FILAS[i].querySelector("th").textContent.trim();
			let textoPrecio = FILAS[i].querySelector("td").textContent;

			let precio = parseInt(textoPrecio);
			if (textoPrecio.includes("Gratis")) {
				precio = 0;
			}

			let textoPieza = "";
			if (textoPrecio.includes("pieza")) {
				hayPieza = true;
				textoPieza = " + pieza";
			}

			let subtotal = precio * cantidades[i];
			total = total + subtotal;

			let textoSubtotal = `${subtotal}€`;
			if (subtotal === 0) {
				textoSubtotal = "Gratis";
			}

			LISTA.innerHTML += `<li>${nombre} x${cantidades[i]} - ${textoSubtotal}${textoPieza}</li>`;
		}
	}

	TOTAL_SPAN.textContent = total;

	if (hayAlgo === true) {
		VACIO.hidden = true;
	} else {
		VACIO.hidden = false;
	}

	if (hayPieza === true) {
		AVISO.hidden = false;
	} else {
		AVISO.hidden = true;
	}
}

mostrarCarrito();
