var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {

                adicionarPaciente(paciente);

            });
        } else {
            var erro = document.querySelector("#erro-ajax");
            erro.classList.remove("invisivel");
            erro.classList.add("mensagem-erro");
        }

    });

    xhr.send();

});