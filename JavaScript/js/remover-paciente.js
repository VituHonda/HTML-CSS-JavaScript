// eventos vao subindo e sendo escutados pelas tags pais

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {

    event.target.parentNode.classList.add("efeito-remover");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);

});
