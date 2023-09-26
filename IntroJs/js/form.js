var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = informacoesForm(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {

        exibeErros(erros)

        return;
    }

    adicionarPaciente(paciente);

    var erro = document.querySelector("#mensagem-erro");

    erro.textContent = "";

    form.reset();

});

function adicionarPaciente(paciente) {
    var pacienteTr = criaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

//criando objeto JS
function informacoesForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;

};

function criaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    // var nomeTd = criaTd(paciente.nome, "info-nome");
    // var pesoTd = criaTd(paciente.peso, "info-peso");
    // var alturaTd = criaTd(paciente.altura, "info-altura");
    // var gorduraTd = criaTd(paciente.gordura, "info-gordura");
    // var imcTd = criaTd(paciente.imc, "info-imc");

    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

    return pacienteTr;
};

function criaTd(dado, classe) {

    var pacienteTd = document.createElement("td");
    pacienteTd.textContent = dado;
    pacienteTd.classList.add(classe);

    return pacienteTd;
};

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) erros.push("O nome não pode estar em branco");
    if (paciente.peso.length == 0) erros.push("O peso não pode estar em branco");
    if (!validaPeso(paciente.peso)) erros.push("Peso inválido");
    if (paciente.altura.length == 0) erros.push("A altura não pode estar em branco");
    if (!validaAltura(paciente.altura)) erros.push("Altura inválida");
    if (paciente.gordura.length == 0) erros.push("A gordura não pode estar em branco");

    return erros;

};

function exibeErros(erros) {

    var erroUl = document.querySelector("#mensagem-erro");

    erroUl.innerHTML = "";

    erros.forEach(function (erro) {

        var erroLi = document.createElement("li");
        erroLi.textContent = erro;
        erroUl.appendChild(erroLi);

    });

};