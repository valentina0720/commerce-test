const enter = document.getElementById("enter");

const email = document.getElementById("email");

const password = document.getElementById("password");

const eAlert = document.getElementById("emailAlert");

const pAlert = document.getElementById("passwordAlert");

function validar() {
    if (email.value.length == 0) {
        eAlert.innerHTML = "Ingresa tu email";
    }
    if (password.value.length < 6) {
        pAlert.innerHTML = ("Ingresa tu contraseña");
    }
    else {document.formulario.submit();
        window.location.replace("principal.html" )}
}

enter.addEventListener("click", validar);
