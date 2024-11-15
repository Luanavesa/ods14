function exibirDados() {
    // Pegando os valores dos inputs
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var opcao = document.getElementById("opcao").value;
    var mensagem = document.getElementById("mensagem").value;

    // Pegando os valores dos checkboxes
    var preferencias = [];
    var checkboxes = document.querySelectorAll('input[name="preferencia"]:checked');
    checkboxes.forEach(function(checkbox) {
        preferencias.push(checkbox.value);
    });

    // Verificando se todos os campos foram preenchidos
    if (nome && email && telefone && mensagem) {
        var resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = "<h3>Dados Confirmados:</h3>" +
                                  "<p><strong>Nome:</strong> " + nome + "</p>" +
                                  "<p><strong>E-mail:</strong> " + email + "</p>" +
                                  "<p><strong>Telefone:</strong> " + telefone + "</p>" +
                                  "<p><strong>Opção escolhida:</strong> " + opcao + "</p>" +
                                  "<p><strong>Mensagem:</strong> " + mensagem + "</p>" +
                                  "<p><strong>Preferências:</strong> " + (preferencias.length ? preferencias.join(", ") : "Nenhuma") + "</p>";
    } else {
        // Se algum campo estiver vazio, avisar o usuário
        alert("Por favor, preencha todos os campos obrigatórios!");
    }
}