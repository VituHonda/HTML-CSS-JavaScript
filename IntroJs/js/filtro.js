var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
    
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]; 
            var nomeTd = paciente.querySelector(".info-nome");
            var nome = nomeTd.textContent;
            
            // implementando expressao regular vulgo regex
            var expressao = new RegExp(this.value,"i");
            
            if(!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
            
        }
    } else {
        for(var i = 0; i < pacientes.length; i++){

            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
            
        }
    }


});