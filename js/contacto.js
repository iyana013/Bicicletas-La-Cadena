let nombre = document.getElementById("nombre");
let errorNombre = document.getElementById("errorNombre");
let telefono = document.getElementById("telefono");
let errorTelefono = document.getElementById("errorTelefono");
let email = document.getElementById("email");
let errorEmail = document.getElementById("errorEmail");
let consulta = document.getElementById("consulta");
let errorConsulta = document.getElementById("errorConsulta");
let btnEnviar = document.querySelector(".btn-enviar");
let formulario = document.querySelector("form");

let esValido = false;

function mensajeError() {

    esValido = false;

    errorNombre.textContent = ``;
    errorTelefono.textContent = ``;
    errorEmail.textContent = ``;
    errorConsulta.textContent = ``;
    errorEmail.style.color = "rgb(170, 23, 23)"
    errorNombre.style.color = "rgb(170, 23, 23)"
    errorTelefono.style.color = "rgb(170, 23, 23)"
    errorConsulta.style.color = "rgb(170, 23, 23)"

    if (nombre.value === "" && email.value === "" && telefono.value === "" && consulta.value === "") {
        errorNombre.textContent = `Escribe tu nombre.`;
        errorNombre.style.display = "block";
        errorEmail.textContent = `Escribe un correo válido.`;
        errorTelefono.style.display = "block";
        errorTelefono.textContent = `Escribe un teléfono válido.`;
        errorEmail.style.display = "block";
        errorConsulta.textContent = `Escribe tu consulta.`;
        errorConsulta.style.display = "block";
    } else if (nombre.value !== "" && email.value !== "" && telefono.value !== "" && consulta.value !== "") {
        let emailOk = validarEmail(email.value);
        let telefonoOk = validarTelefono(telefono.value);
        esValido = emailOk && telefonoOk;
    }
    else {
        if (nombre.value === "") {
            errorNombre.textContent = `Escribe tu nombre.`;
        }

        if (email.value === "") {
            errorEmail.textContent = `Escribe un correo válido.`;
        } else {
            validarEmail(email.value);
        }

        if (telefono.value === "") {
            errorTelefono.textContent = `Escribe un teléfono válido.`
        } else {
            validarTelefono(telefono.value)
        }

        if (consulta.value === "") {
            errorConsulta.textContent = `Escribe tu consulta.`;
        }
    }

    return esValido;
};

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!regex.test(email)) {
        errorEmail.textContent = "Escribe un correo válido";
    };
    return regex.test(email);
};

function validarTelefono(telefono) {
    const regex = /^[0-9]{9}$/;

    if (!regex.test(telefono)) {
        errorTelefono.textContent = "Escribe un teléfono válido";
    }
    return regex.test(telefono);
};

btnEnviar.addEventListener("click", function (e) {

    e.preventDefault();

    if (mensajeError()) {
        formulario.submit();
    }
});