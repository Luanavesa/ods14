
function processForm() {
    // Obtém os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    // Processa os dados
    const message = `Olá, ${name}!<br>Seu e-mail é ${email} e você tem ${age} anos.`;

    // Exibe o resultado
    document.getElementById('resultText').innerHTML = message;
    document.getElementById('resultContainer').style.display = 'block';
}