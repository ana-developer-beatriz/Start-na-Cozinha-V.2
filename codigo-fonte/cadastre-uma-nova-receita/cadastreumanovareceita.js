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
