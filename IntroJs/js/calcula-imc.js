var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var peso = pacientes[i].querySelector(".info-peso").textContent;

    var altura = pacientes[i].querySelector(".info-altura").textContent;

    var tdImc = pacientes[i].querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if (pesoValido == false && alturaValido == false) {
        tdImc.textContent = "Altura e peso inválidos";
        pacientes[i].classList.add("paciente-invalido")

    } else if (pesoValido == true && alturaValido == false) {
        tdImc.textContent = "Altura inválido";
        pacientes[i].classList.add("paciente-invalido")

    } else if (pesoValido == false && alturaValido == true) {
        tdImc.textContent = "Peso inválido";
        pacientes[i].classList.add("paciente-invalido")

    } else {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc;
    }

};

function validaPeso(peso) {

    if (peso < 0 || peso >= 1000) {
        return false;
        console.log(foi)
    } else {
        return true;
    }

};

function validaAltura(altura) {
    
    if (altura < 0 || altura >= 3.00) {
        return false;
    } else {
        return true;
    }

};

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);

};