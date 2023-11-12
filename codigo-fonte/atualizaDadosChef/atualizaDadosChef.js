 // Botão Atualizar
 function atualizar() {
    var nome = document.getElementById("FormNome").value;
    var email = document.getElementById("FormEmail").value;
    var tel = document.getElementById("FormTelefone").value;
    var senhaAtual = document.getElementById("FormSenhaAtual").value;
    var novaSenha = document.getElementById("FormNovaSenha").value;
    var novaSenhaConfirm = document.getElementById("FormConfirmacaoSenha").value;
  
    // Verificar se todos os campos estão preenchidos e se a senha atual está correta
    if (nome,email,tel,novaSenha,novaSenhaConfirm != "" && senhaAtual === "####") {
      // Salvar os dados atualizados no localStorage
      localStorage.setItem("email", email);
      // Redirecionar para a página de perfil
      location.href = "https://www.globo.com/";
    } else {
      alert("Dados inválidas. Tente novamente.");
    }
  }