function carregarDetalhesNaTabela() {
    // dados da primeira receita armazenados no localStorage
    var recipeData = localStorage.getItem('recipeData', recipeData);
    var listaUser = localStorage.getItem('listaUser');
 console.log("recipeData",recipeData)
 console.log("listaUser", listaUser[0].nomeCad);
    if (recipeData) {
        //Transforma em um objeto JavaScript
        recipeData = JSON.parse(recipeData);
      
        listaUser = JSON.parse(listaUser);
        document.querySelector('.thNome-receita').innerText = recipeData.receitas[0].nome;
        
        if (listaUser[0] && listaUser[0].nomeCad) {
            document.querySelector('.tdChefName').innerText = listaUser[0].nomeCad;
        } else {
            console.error('Formato de listaUser inválido.');
        }
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
        document.querySelector('.nome-receita').innerText = recipeData.receitas[0].nome;
        document.querySelector('.thNome-receita').innerText = recipeData.receitas[0].nome;
       
        document.querySelector('.img-area').innerHTML = `<img src="${recipeData.foto}" alt="Imagem da Receita">`;
        document.querySelector('.t-preparo').innerText = `Tempo de preparo: ${recipeData.receitas[0].tempo_de_preparo}`;
        document.querySelector('.dificuldade').innerText = `Dificuldade: ${recipeData.receitas[0].Nivel_de_dificuldade}`;
       // document.querySelector('.chef-name').innerText = `Nome do chef: ${recipeData.nomeChef}`;

        document.querySelector('.lista-ingredientes').innerText = recipeData.receitas[0].ingredientes;
      
        document.querySelector('.text-area').innerText = recipeData.receitas[0].modo_de_preparo;

       console.log("modo de preparo", recipeData.receitas[0].modo_de_preparo)
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

function redirecionarParaArquivo() {
    window.location.href = "../paginaHome/paginaHome.html";
}