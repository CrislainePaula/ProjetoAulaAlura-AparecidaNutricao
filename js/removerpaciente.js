var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOud");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    event.target.parentNode.remove();
});

//pacientes.forEach(function(paciente){
   // paciente.addEventListener("dblclick", function(){
     //   this.remove();
    //})
//});