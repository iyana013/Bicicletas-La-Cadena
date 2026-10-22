// Aviso de cookies de ejemplo: sale 3 segundos después de entrar, cada vez.

function mostrarAvisoCookies() {
	let fondo = document.createElement("div");
	fondo.className = "cookies-fondo";
	fondo.innerHTML = `
		<div class="cookies-caja" role="dialog" aria-modal="true" aria-labelledby="cookies-titulo">
			<h2 id="cookies-titulo">Usamos cookies</h2>
			<p>Esta web utiliza cookies para mejorar tu experiencia. <br>¿Las aceptas?</p>
			<div class="cookies-botones">
				<button type="button" class="cookies-btn cookies-aceptar">Aceptar</button>
				<button type="button" class="cookies-btn cookies-rechazar">Rechazar</button>
			</div>
		</div>`;

	document.body.appendChild(fondo);
	document.body.style.overflow = "hidden";

	fondo
		.querySelector(".cookies-aceptar")
		.addEventListener("click", function () {
			cerrarAviso(fondo);
		});

	fondo
		.querySelector(".cookies-rechazar")
		.addEventListener("click", function () {
			cerrarAviso(fondo);
		});
}

function cerrarAviso(fondo) {
	fondo.remove();
	document.body.style.overflow = "";
}

setTimeout(mostrarAvisoCookies, 2000);
