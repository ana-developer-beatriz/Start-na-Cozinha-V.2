let userLogado = JSON.parse(localStorage.getItem("userLogado"))

const abrir_modal = document.querySelector("#showModal")
const modal = document.querySelector("dialog")

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

function sair(){
    localStorage.removeItem("userLogado")
    window.location.href = "../loginChef/loginChef.html"
}