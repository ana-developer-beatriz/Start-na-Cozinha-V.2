function submitForm() {
    var titulo = document.getElementById('titulo').value;
    var ingredientes = document.getElementById('ingredientes').value;
    var modoPreparo = document.getElementById('modo-preparo').value;
    var tempoPreparo = document.getElementById('tempo-preparo').value;
    var dificuldade = document.getElementById('dificuldade').value;
    var foto = document.getElementById('foto').value;

    // Verifica se todos os campos estão preenchidos
    if (titulo && ingredientes && modoPreparo && tempoPreparo && dificuldade) {
        var recipeData = {
            titulo: titulo,
            ingredientes: ingredientes,
            modoPreparo: modoPreparo,
            tempoPreparo: tempoPreparo,
            dificuldade: dificuldade,
            foto: foto
        };

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