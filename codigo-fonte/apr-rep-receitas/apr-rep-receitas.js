function carregarDetalhesNaTabela() {
    // dados da primeira receita armazenados no localStorage
    var recipeData = localStorage.getItem('recipeData');

    if (recipeData) {
        //Transforma em um objeto JavaScript
        recipeData = JSON.parse(recipeData);

        document.querySelector('.thNome-receita').innerText = recipeData.titulo;
    } else {
        console.error('Nenhum dado de receita encontrado no localStorage.');
    }
}

carregarDetalhesNaTabela();

// Função para exibir os detalhes da receita no modal
function exibirDetalhesReceita() {
    //os dados da receita armazenados no localStorage
    var recipeData = localStorage.getItem('recipeData');
    console.log(recipeData);

    if (recipeData) {
        // Transforma em um objeto JavaScript
        recipeData = JSON.parse(recipeData);
        console.log(recipeData.ingredientes);
        document.querySelector('.nome-receita').innerText = recipeData.titulo;
        document.querySelector('.thNome-receita').innerText = recipeData.titulo;
       
        document.querySelector('.img-area').innerHTML = `<img src="${recipeData.foto}" alt="Imagem da Receita">`;
        document.querySelector('.t-preparo').innerText = `Tempo de preparo: ${recipeData.tempoPreparo}`;
        document.querySelector('.dificuldade').innerText = `Dificuldade: ${recipeData.dificuldade}`;
        document.querySelector('.chef-name').innerText = `Nome do chef: ${recipeData.nomeChef}`;

        document.querySelector('.lista-ingredientes').innerText = recipeData.ingredientes;
      
        document.querySelector('.text-area').innerText = recipeData.modoPreparo;

        // Abre o modal de detalhes da receita
        openModalDetalhes();
    } else {
        console.error('Nenhum dado de receita encontrado no localStorage.');
    }
}

function openModalDetalhes() {
    document.querySelector('dialog').showModal();
}

document.querySelectorAll('#abrir-modal').forEach(function (button) {
    button.addEventListener('click', exibirDetalhesReceita);
});

function fecharModalDetalhes() {
    document.querySelector('dialog').close();
}

document.querySelector('#close').addEventListener('click', fecharModalDetalhes);
//confirmação
function exibirModalConfirmacao() {
    document.getElementById('confirmationModal').style.display = 'block';
    
}

document.querySelector('#td-icons a[href="#"]').addEventListener('click', exibirModalConfirmacao);
function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}

//exibe modal de negacao
function exibirModalDenied() {
    document.getElementById('deniedModal').style.display = 'block';
}
document.querySelector('#td-icons a[href="#denid"]').addEventListener('click', exibirModalDenied);

function closeModalX() {
    document.getElementById('deniedModal').style.display = 'none';
}