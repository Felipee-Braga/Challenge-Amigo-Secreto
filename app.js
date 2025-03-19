// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome) {
        amigos.push(nome); // Adiciona o nome ao array
        input.value = ""; // Limpa o campo de entrada
        atualizarListaAmigos(); // Atualiza a lista exibida no HTML
    } else {
        alert("Por favor, insira um nome válido!");
    }
}

// Função para atualizar a lista de amigos exibida no HTML
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista atual

    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item); // Adiciona cada amigo à lista
    });
}

// Função para realizar o sorteio de um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione nomes antes de realizar o sorteio.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong> 🎉</li>`;
}
