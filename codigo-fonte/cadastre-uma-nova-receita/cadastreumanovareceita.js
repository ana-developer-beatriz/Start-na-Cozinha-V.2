function submitForm() {
    var titulo = document.getElementById('titulo').value;
    var ingredientes = document.getElementById('ingredientes').value;
    var modoPreparo = document.getElementById('modo-preparo').value; 
    var dificuldade = document.getElementById('dificuldade').value
    var tempoPreparo = document.getElementById('tempo-preparo').value;
    var categoria = document.getElementById('categoria').value;
   ;
    var foto = document.getElementById('inputImagem').value;
    handleFileInput();
    // Verifica se todos os campos estão preenchidos
    if (titulo && ingredientes && modoPreparo && tempoPreparo && dificuldade && categoria) {
        // var recipeData = {
        //     titulo: titulo,
        //     ingredientes: ingredientes,
        //     modoPreparo: modoPreparo,
        //     tempoPreparo: tempoPreparo,
        //     dificuldade: dificuldade,
        //     foto: foto
        // };
        // var  recipeData={
        //     "categorias": [categoria],
        //     nome: titulo,
        //     "modo_de_preparo":modoPreparo,
        //     "ingredientes": [ingredientes],
        //     "Nivel_de_dificuldade": dificuldade,
        //     "tempo_de_preparo": tempoPreparo,
        //     "imagemChef": "",  // Certifique-se de fornecer uma URL válida para a imagem do chef, se necessário
        //     "imagemTimer": "", // Certifique-se de fornecer uma URL válida para a imagem do timer, se necessário
        //     "imagemFry": ""
        // }
        var recipeData= {
            "receitas": [
              {
                "nome": titulo,
                "modo_de_preparo": modoPreparo,
                "ingredientes": [ingredientes],
                "categorias": [categoria],
                "Nome_Chef": "",  // Adicionei para manter a consistência com o seu JSON original
                "imagemChef": "",
                "tempo_de_preparo":tempoPreparo,
                "imagemTimer": "",
                "Nivel_de_dificuldade": dificuldade,
                "imagemFry": ""
              }
            ]
          }

        localStorage.setItem('recipeData', JSON.stringify(recipeData));
        console.log('Data saved to localStorage:', localStorage.getItem('recipeData'));

        // Abre o modal de confirmação
        openModal();
    } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
}
function openConfirmationModal() {
    // Pega os valores do formulário
    var titulo = document.getElementById('titulo').value;
    var ingredientes = document.getElementById('ingredientes').value;
    var modoPreparo = document.getElementById('modo-preparo').value;
    var tempoPreparo = document.getElementById('tempo-preparo').value;
    var dificuldade = document.getElementById('dificuldade').value;
    var foto = document.getElementById('foto').value;

    // Checa se todos os campos estão preenchidos
    if (titulo && ingredientes && modoPreparo && tempoPreparo && dificuldade) {
        //LocalStorage
        var recipeData = {
            titulo: titulo,
            ingredientes: [],
            modoPreparo: modoPreparo,
            tempoPreparo: tempoPreparo,
            dificuldade: dificuldade,
            foto: foto
        };

        localStorage.setItem('recipeData', JSON.stringify(recipeData));

        // Abre o modal de confirmação
        openModal();
    } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
}

function openModal() {
    document.getElementById('confirmationModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}

//Mostrar dados do usuário

let userLogado = JSON.parse(localStorage.getItem("userLogado"))

const abrir_modal = document.querySelector("#showModal")
const modal = document.querySelector("dialog")

let nameuserLogado = document.querySelector("#nameuserLogado")
nameuserLogado.innerHTML = `Olá ${userLogado.nome}`

abrir_modal.onclick = function() {
    modal.showModal()

    let nomeLogado = document.querySelector("#nomelogado")
    let emaillogado = document.querySelector("#emaillogado")
    let senhalogado = document.querySelector("#senhalogado")
    let telefoneLogado = document.querySelector("#telefoneLogado")

    nomeLogado.innerHTML = `Nome de Usuário: ${userLogado.nome}`
    emaillogado.innerHTML = `Email do Usuario: ${userLogado.email}`
    senhalogado.innerHTML = `Senha do Usuario: ${userLogado.senha}`
    telefoneLogado.innerHTML = `Telefone do Usuario: ${userLogado.telefone}`
}
function closeModal2() {

    modal.close()

}

function sair(){
    localStorage.removeItem("userLogado")
    window.location.href = "../loginChef/loginChef.html"
}
document.addEventListener('DOMContentLoaded', function () {
    var inputImagem = document.getElementById('inputImagem');
    inputImagem.addEventListener('change', handleFileInput);
});

function handleFileInput() {
    var input = document.getElementById('inputImagem');
    var file = input.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var imageData = e.target.result;
            // Salva a imagem no localStorage ou faça o que desejar com imageData
            saveImageData(imageData);
        };
        reader.readAsDataURL(file);
    }
}

function saveImageData(imageData) {
    // Salva a imagem como uma string no localStorage
    localStorage.setItem('imagemReceita', imageData);
}