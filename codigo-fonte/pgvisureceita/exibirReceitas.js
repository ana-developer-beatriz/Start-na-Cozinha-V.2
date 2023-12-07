
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

        var divIngredientes = document.querySelector('.list_ingr');
        divIngredientes.appendChild(listaIngredientes);
    });
}

function exibirModoDePreparo(receitaIndex) {
    carregarReceitas(function (receitas) {
        var modoDePreparo = receitas[receitaIndex].modo_de_preparo;
        
        var modoParagrafo = document.createElement('p');
        modoParagrafo.textContent = modoDePreparo;

        var containerReceitas = document.querySelector('.mdpreparo');
        containerReceitas.appendChild(modoParagrafo);
    });
}

function exibirTituloDaReceita(receitaIndex) {
    carregarReceitas(function (receitas) {
        var titulo = receitas[receitaIndex].nome;
        
        var tituloDaReceitaH1 = document.createElement('h1');
        tituloDaReceitaH1.textContent = titulo;

        var containerTitulo = document.querySelector('.tituloReceita');
        containerTitulo.appendChild(tituloDaReceitaH1);

    

        var containerTitulo = document.querySelector('.tituloReceita');
        containerTitulo.appendChild(tituloDaReceitaH1);
    });
}
function exibirImgDaReceita(receitaIndex) {
    carregarReceitas(function (receitas) {
        var imgSrc = receitas[receitaIndex].imagemRecipe;
        console.log(receitas);
         
         var imgElement = document.createElement('img');
         imgElement.src = imgSrc;
         imgElement.alt = "Imagem de Preparo"; // Substitua pelo texto alternativo apropriado

       console.log(imgElement)
    

        var containerTitulo = document.querySelector('.ftrec');
      
        containerTitulo.appendChild(imgElement);
    });
}

function tempoDePreparo(receitaIndex) {
    carregarReceitas(function (receitas) {
        const containerDetalhes = document.querySelector('.inforec');
        const ulDetalhes = document.createElement('ul');

        const liTempoPreparo = document.createElement('li');
        const imgTempoPreparo = document.createElement('img');
        imgTempoPreparo.src = receitas[receitaIndex].imagemTimer;
        const spanTempoPreparo = document.createElement('span');
        spanTempoPreparo.textContent = receitas[receitaIndex].tempo_de_preparo;
        liTempoPreparo.appendChild(imgTempoPreparo);
        liTempoPreparo.appendChild(spanTempoPreparo);
        ulDetalhes.appendChild(liTempoPreparo);

        const liNivelDificuldade = document.createElement('li');
        const imgElementNivelDificuldade = document.createElement('img');
        imgElementNivelDificuldade.src = receitas[receitaIndex].imagemFry;
        const spanElementNivelDificuldade = document.createElement('span');
        spanElementNivelDificuldade.textContent = receitas[receitaIndex].Nivel_de_dificuldade;
        liNivelDificuldade.appendChild(imgElementNivelDificuldade);
        liNivelDificuldade.appendChild(spanElementNivelDificuldade);
        ulDetalhes.appendChild(liNivelDificuldade);

        const liChef = document.createElement('li');
        const imgChef = document.createElement('img');
        imgChef.src = receitas[receitaIndex].imagemChef;
        const spanChef = document.createElement('span');
        spanChef.textContent = receitas[receitaIndex].Nome_Chef;
        liChef.appendChild(imgChef);
        liChef.appendChild(spanChef);
        ulDetalhes.appendChild(liChef);

        containerDetalhes.appendChild(ulDetalhes);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const receitaIndex = urlParams.get('index');

    if (receitaIndex !== null) {
        carregarReceitas(function (receitas) {
            exibirImgDaReceita(receitaIndex);
            exibirTituloDaReceita(receitaIndex);
            exibirIngredientes(receitaIndex);
            exibirModoDePreparo(receitaIndex);
            tempoDePreparo(receitaIndex);
        });
    } else {
        console.error('Índice da receita não encontrado na URL.');
    }
});

function enviarComent() {
    let areaComent = document.querySelector("#areaComent")
    let listComent = JSON.parse(localStorage.getItem("listComent") || "[]")

    listComent.push({
        comentario: areaComent.value
    })

    localStorage.setItem("listComent", JSON.stringify(listComent))
    exibirComents();
}

function exibirComents() {
    let areaComent = JSON.parse(localStorage.getItem("listComent"));
    console.log('areaComent', areaComent);

    let allComents = document.querySelector(".allComents");
    console.log(allComents);

    allComents.innerHTML = "";

    areaComent.forEach((item) => {
        var itemLista = document.createElement('li');
        itemLista.textContent = item.comentario;
        allComents.appendChild(itemLista);
    });
}

exibirComents();
