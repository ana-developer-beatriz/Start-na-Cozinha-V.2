 // Botão login
 function logar() {
    var email = document.getElementById("FormEmail2").value;
    var senha = document.getElementById("FormPassword2").value;
  
    // Verificar se o nome de usuário e a senha estão corretos
    if (email === "admin" && senha === "admin") {
      location.href ="../apr-rep-receitas/apr-rep-receitas.html";
    } else {
      alert("Dados inválidas. Tente novamente.");
    }
  }