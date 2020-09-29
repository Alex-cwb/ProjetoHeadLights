function validaSenha(senha, confirma_senha) {
    var pass = document.getElementById(senha).value;
    var confirm_pass = document.getElementById(confirma_senha).value;

    if (pass != "" && confirm_pass != "" && pass == confirm_pass) {
        document.getElementById("alert_senha").style.display = "none";
        habilitaBotao(false);
    } else {
        document.getElementById("alert_senha").style.display = "block";
        habilitaBotao(true);
    }
}

function habilitaBotao(habilitar) {
    document.getElementById("botao_salvar").disabled = habilitar;
}

function validaCampo() {

    console.clear();

    var campos = document.querySelectorAll("#Personal_Register [name]");

    campos.forEach(function() {

    });
}