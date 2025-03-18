//Criar um codigo que sortei nomes,

        // Declara um array vazio para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    // Obtém o elemento do input onde o usuário digita o nome
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras antes e depois do nome

    // Verifica se o campo está vazio após remover espaços
    if (!nome) {
        alert("Por favor, insira um nome."); // Exibe um alerta se o campo estiver vazio
        return; // Sai da função sem adicionar o nome
    }

    // Adiciona o nome ao array 'amigos'
    amigos.push(nome);

    // Atualiza a lista exibida na página
    atualizarLista();

    // Limpa o campo de entrada para que o usuário possa inserir outro nome
    input.value = "";
}

function atualizarLista() {
    // Obtém o elemento da lista onde os nomes serão exibidos
    let lista = document.getElementById("lista");

    // Limpa a lista antes de adicionar os novos itens para evitar duplicatas
    lista.innerHTML = "";

    // Percorre o array 'amigos' e adiciona cada nome como um item <li>
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`; // Adiciona cada nome como um item da lista
    }
}

function sortearAmigo() {
    // Verifica se há amigos na lista antes de sortear
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return; // Sai da função caso não haja nomes na lista
    }

    // Gera um número aleatório dentro do intervalo do array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado com base no índice gerado
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome sorteado na tela dentro do elemento com id 'resultado'
    document.getElementById("resultado").innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>!`;
}
