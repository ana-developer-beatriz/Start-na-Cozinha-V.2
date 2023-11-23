/*const abrir_modal = document.querySelector("#abrir-modal")
const modal = document.querySelector("dialog")
const button_close = document.querySelector("#close")

abrir_modal.onclick = function() {
    modal.showModal()
}

button_close.onclick = function() {
    modal.close()
}
*/
//AUTENTICAÇÃO DE CADASTRO
let nomeCompleto = document.querySelector("#NomeCompleto")
let valiNomeCompleto = false

let FormEmail2 = document.querySelector("#FormEmail2")
let validFormEmail2 = false

let Telefone = document.querySelector("#Telefone")
let validTelefone = false

let FormPassword2 = document.querySelector("#FormPassword2")
let validFormPassword2 = false

let confirmSenha = document.querySelector("#confirmSenha")
let validconfirmSenha = false

let msgError = document.querySelector("#msgError")
let msgSucess = document.querySelector("#msgSucess")

nomeCompleto.addEventListener("keyup" , () => {
    if(nomeCompleto.value.length <= 2 ){
        FormPassword2.setAttribute("style", "border-color: red")
        valiNomeCompleto = false
    }else{
        nomeCompleto.setAttribute("style", "border-color: green")
        valiNomeCompleto = true
    }
})

FormEmail2.addEventListener("keyup" , () => {
    if(FormEmail2.value.length <= 2 ){
        FormEmail2.setAttribute("style", "border-color: red")
        validFormEmail2 = false
    }else{
        FormEmail2.setAttribute("style", "border-color: green")
        validFormEmail2 = true
    }
})

Telefone.addEventListener("keyup" , () => {
    if(Telefone.value.length <= 2 ){
        Telefone.setAttribute("style", "border-color: red")
        validTelefone = false
    }else{
        Telefone.setAttribute("style", "border-color: green")
        validTelefone = true
    }
})

FormPassword2.addEventListener("keyup" , () => {
    if(FormPassword2.value.length <= 5 ){
        FormPassword2.setAttribute("style", "border-color: red")
        validFormPassword2 = false
    }else{
        FormPassword2.setAttribute("style", "border-color: green")
        validFormPassword2 = true
    }
})

confirmSenha.addEventListener("keyup" , () => {
    if(FormPassword2.value != confirmSenha.value){
        confirmSenha.setAttribute("style", "border-color: red")
        alert("As senhas não estão iguais")
        validconfirmSenha = false
    }else{
        confirmSenha.setAttribute("style", "border-color: green")
        validconfirmSenha = true
    }
})

function cadastrar(){
    if (valiNomeCompleto && validFormEmail2 && validTelefone && validFormPassword2 && validconfirmSenha ){

        let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

        listaUser.push(
            {
                nomeCad: nomeCompleto.value,
                emailCad: FormEmail2.value,
                telefoneCad: Telefone.value,
                passwordCad: FormPassword2.value
            }
        )
    
        localStorage.setItem("listaUser", JSON.stringify(listaUser))

        msgSucess.setAttribute("style", "display: block")
        msgSucess.innerHTML = "<strong> Cadastrando Usuário...</strong>"
        msgError.setAttribute("style" , "display:none")
        msgError.innerHTML = ""

        setTimeout(()=>{
            window.location.href = "../loginChef/loginChef.html"
        }, 3000)

    }else{
        msgError.setAttribute("style", "display: block")
        msgError.innerHTML = "<strong> Preencha todos os campos corretamente...</strong>"
        msgSucess.setAttribute("style" , "display:none")
        msgSucess.innerHTML = ""
    }
}