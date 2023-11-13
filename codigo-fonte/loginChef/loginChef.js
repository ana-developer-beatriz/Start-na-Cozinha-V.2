 // Botão login
 /*function logar() {
        var email = document.getElementById("IdEmail").value;
        var senha = document.getElementById("IdSenha").value;
      
        // Verificar se o nome de usuário e a senha estão corretos
        if (email === "email" && senha === "senha") {
          // Salvar os detalhes de login no localStorage
          localStorage.getItem("email", email);
          // Redirecionar para a página de perfil
          location.href = "https://www.globo.com/";
        } else {
          alert("Dados inválidas. Tente novamente.");
        }
      }
*/
//Outra opção de código para linkar com a página do Caio


/*function entrar() {
  let IdEmail = document.querySelector("#IdEmail")
  let IdSenha = document.querySelector("#IdSenha")  let listaUser =[  let userValid = ]
    email: "",
    senha: "",
    listaUser = JSON.parse(localStorage.getItem("NOMEQUEOCAIODERPARALISTACRIADANOLOCALSTORAGE")  LISTACAIO.forEach((item) => {
    if(IdEmail.value == item.NOMEQUEOCAIODEUPARAOCAMPOEMAIL && IdSenha.value == item.NOMEQUEOCAIODEUPARAOCAMPOSENHA) {   
      userValid = {
        email: item.NOMEQUEOCAIODEUPARAOCAMPOEMAIL
        senha: item.NOMEQUEOCAIODEUPARAOCAMPOSENHA
      }
    }
  }  if(IdEmail.value == userValid.email && IdSenha.value == userValid.senha){
    location.href = "https://www.globo.com/"
  } else {
    alert("Dados inválidas. Tente novamente.");
  }
*/

function entrar(){
  let IdEmail = document.querySelector("#IdEmail")
  let IdSenha = document.querySelector("#IdSenha")

  let msgError = document.querySelector("#msgError")

  let listaUser = []

  let userValid = {
    nome: "" ,
    email:"",
    senha:""
  }

  listaUser = JSON.parse(localStorage.getItem("listaUser"))

  listaUser.forEach((item) => {
   if(IdEmail.value == item.emailCad && IdSenha.value == item.passwordCad){

    userValid = {
      nome: item.nomeCad,
      email: item.emailCad,
      senha: item.passwordCad
    }
   }
  }
  )
  if(IdEmail.value == userValid.email && IdSenha.value == userValid.senha){

    window.location.href = "../cadastre-uma-nova-receita/cadastreumanovareceita.html"
  
  }else{

    IdEmail.setAttribute("style" , "border-color: red")
    IdSenha.setAttribute("style" , "border-color: red")
    msgError.setAttribute("style" , "display: block")
    msgError.innerHTML= "Email ou senha incorretos"

  }  
  if(IdEmail.value == "" && IdSenha.value == ""){
    window.location.href = "loginChef.html"
  }
}