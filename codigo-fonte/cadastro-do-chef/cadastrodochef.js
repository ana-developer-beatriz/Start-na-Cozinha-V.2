function logar() {
    var Nome completo = document.getElementById("IdNomeCompleto").value;
    var email = document.getElementById("IdFormEmail2").value;
    var Telefone = document.getElementById("IdTelefone").value;
    var Crie sua conta = document.getElementById("IdFormPassword2").value;
    var Confirme sua conta = document.getElementById("IdFormPassword2").value;

    
    // Verificar se o nome de usuário e a senha estão corretos
    if (email === "email" && senha === "senha") {
      // Salvar os detalhes de login no localStorage
      localStorage.setItem("email", email);
      // Redirecionar para a página de perfil
      location.href = "https://www.globo.com/";
    } else {
      alert("Dados inválidas. Tente novamente.");
    }
  }