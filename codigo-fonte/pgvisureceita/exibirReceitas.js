function carregarReceitas(callback) {
    fetch('receitas.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            callback(data.receitas);
        })
        .catch(function (error) {
            console.error('Ocorreu um erro ao carregar o JSON:', error);
        });
}

function exibirIngredientes(receitaIndex) {
    carregarReceitas(function (receitas) {
        var listaIngredientes = document.createElement('ol');

        receitas[receitaIndex].ingredientes.forEach(function (ingrediente) {
            var itemLista = document.createElement('li');
            itemLista.textContent = ingrediente;
            listaIngredientes.appendChild(itemLista);
        });
        /*encontra o primeiro elemento no documento HTML com a classe list_ingr
        e armazena na variável divIngredientes*/
        var divIngredientes = document.querySelector('.list_ingr');
        /*Adiciona a lista de ingredientes criada dinamicamente (<ol>) à <div> com a classe list_ingr. Isso completa a construção da lista de 
        ingredientes e a adiciona ao HTML. */
        divIngredientes.appendChild(listaIngredientes);
    });
}
function exibirModoDePreparo(receitaIndex) {
    carregarReceitas(function (receitas) {
        var modoDePreparo = receitas[receitaIndex].modo_de_preparo;
        
        modoParagrafo = document.createElement('p');
            modoParagrafo.textContent = modoDePreparo;
        var containerReceitas = document.querySelector('.mdpreparo');
        containerReceitas.appendChild(modoParagrafo);
       
    });
}
function exibirTituloDaReceita(receitaIndex) {
    carregarReceitas(function (receitas) {
        var titulo = receitas[receitaIndex].nome;
        
        tituloDaReceitaH1 = document.createElement('h1');
        tituloDaReceitaH1.textContent =  titulo;

        var containerTitulo = document.querySelector('.tituloReceita');
        containerTitulo.appendChild(tituloDaReceitaH1);

       
    });
}
function exibirTituloDaReceita(receitaIndex) {
    carregarReceitas(function (receitas) {
        var titulo = receitas[receitaIndex].nome;
        
        tituloDaReceitaH1 = document.createElement('h1');
        tituloDaReceitaH1.textContent =  titulo;
        console.log(tituloDaReceitaH1);

        var containerTitulo = document.querySelector('.tituloReceita');
        containerTitulo.appendChild(tituloDaReceitaH1);

       
    });
}
function tempoDePreparo(receitaIndex) {
    carregarReceitas(function (receitas) {

        const containerDetalhes = document.querySelector('.inforec');
        // Lista para os detalhes
        const ulDetalhes = document.createElement('ul');

        // Tempo de Preparo
        const liTempoPreparo = document.createElement('li');
        const imgTempoPreparo = document.createElement('img');
        imgTempoPreparo.src = receitas[receitaIndex].imagemTimer;
        const spanTempoPreparo = document.createElement('span');
        spanTempoPreparo.textContent = receitas[receitaIndex].tempo_de_preparo;
        liTempoPreparo.appendChild(imgTempoPreparo);
        liTempoPreparo.appendChild(spanTempoPreparo);
        ulDetalhes.appendChild(liTempoPreparo);

        // Nível de Dificuldade
        const liNivelDificuldade = document.createElement('li');
        const imgElementNivelDificuldade = document.createElement('img');
            imgElementNivelDificuldade.src = receitas[receitaIndex].imagemFry;
        const spanElementNivelDificuldade = document.createElement('span');
            spanElementNivelDificuldade.textContent = receitas[receitaIndex].Nivel_de_dificuldade;
            
            liNivelDificuldade.appendChild(imgElementNivelDificuldade);
            liNivelDificuldade.appendChild(spanElementNivelDificuldade);
            ulDetalhes.appendChild(liNivelDificuldade);

            containerDetalhes.appendChild(ulDetalhes);

        // Chef
        const liChef = document.createElement('li');
        const imgChef = document.createElement('img');
        imgChef.src = receitas[receitaIndex].imagemChef;
        const spanChef = document.createElement('span');
        spanChef.textContent = receitas[receitaIndex].Nome_Chef;
        liChef.appendChild(imgChef);
        liChef.appendChild(spanChef);
        ulDetalhes.appendChild(liChef);
    });
}



window.exibirIngredientes = exibirIngredientes;
window.exibirModoDePreparo = exibirModoDePreparo;
window.exibirTituloDaReceita = exibirTituloDaReceita;
window.tempoDePreparo = tempoDePreparo;
 // Chama a função para exibir os ingredientes da primeira receita (índice 0)


 //Cadastrar um comentário

function enviarComent() {

    let areaComent = document.querySelector("#areaComent")

    let listComent = JSON.parse(localStorage.getItem("listComent") || "[]")

    listComent.push(
        {
            comentario: areaComent.value
        }
    )
    
localStorage.setItem("listComent", JSON.stringify(listComent))

exibirComents();
}

function exibirComents(){
    let areaComent = JSON.parse(localStorage.getItem("listComent"));
    console.log('areaComent', areaComent);

    let allComents = document.querySelector(".allComents");
    console.log(allComents);

    // Limpa o conteúdo 
    allComents.innerHTML = "";

    // Percorre todos os comentários e cria elementos <li> para cada um
    areaComent.forEach((item) => {
        var itemLista = document.createElement('li');
        itemLista.textContent = item.comentario;
        allComents.appendChild(itemLista);
    });

}
exibirComents()

