 // Botão login
 function logar() {
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

//Outra opção de código para linkar com a página do Caio
// function entrar() {
//   let IdEmail = document.querySelector("#IdEmail")
//   let IdSenha = document.querySelector("#IdSenha")
  
//   let listaUser =[]

//   let userValid = {
//     email: "",
//     senha: "",
//   }

//   listaUser = JSON.parse(localStorage.getItem("NOMEQUEOCAIODERPARALISTACRIADANOLOCALSTORAGE"))

//   LISTACAIO.forEach((item) => {
//     if(IdEmail.value == item.NOMEQUEOCAIODEUPARAOCAMPOEMAIL && IdSenha.value == item.NOMEQUEOCAIODEUPARAOCAMPOSENHA) {
      
//       userValid = {
//         email: item.NOMEQUEOCAIODEUPARAOCAMPOEMAIL
//         senha: item.NOMEQUEOCAIODEUPARAOCAMPOSENHA
//       }
//     }
//   })

//   if(IdEmail.value == userValid.email && IdSenha.value == userValid.senha){
//     location.href = "https://www.globo.com/"
//   } else {
//     alert("Dados inválidas. Tente novamente.");
//   }

// }