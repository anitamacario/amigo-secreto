const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor digita algún nombre antes de añadir.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Por favor digita un nombre distinto.");
        return;
    }

    listaAmigos.push(nombre);
    const li = document.createElement("li");
    li.textContent = nombre;
    ulListaAmigos.appendChild(li);

    inputAmigo.value = ""; // Limpiar el campo de entrada
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Por favor digita algún nombre antes de sortear.");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
