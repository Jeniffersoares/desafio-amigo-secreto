//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomesNaTela = [];

function adicionarAmigo() {
    let nomeAmigo = document.querySelector("input").value.trim();

    if (nomeAmigo === '') {
        alert('Insira um nome.');
    } else if (nomesNaTela.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
    } else { 
        nomesNaTela.push(nomeAmigo);
        listarNomes();
        limparCampo();
    }
}

function listarNomes() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    nomesNaTela.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomesNaTela.length === 0) {
        alert('Nenhum nome adicionado.');
        return;
    }

    let numeroSorteio = Math.floor(Math.random() * nomesNaTela.length);
    let amigoSorteado = nomesNaTela[numeroSorteio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`;

    document.getElementById('listaAmigos').innerHTML = "";
    nomesNaTela = [];
}

function limparCampo() {
    document.querySelector("input").value = '';
}
