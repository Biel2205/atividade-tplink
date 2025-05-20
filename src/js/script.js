
var botaoEntrar = document.getElementById("button-submit")

function login() {


     var campoUsuário = document.getElementById("usuario").value

    
    var campoSenha = document.getElementById("password").value

    var campoCodigo = document.getElementById("codigo").value


   if (campoUsuário == 'admin' && campoSenha == '1234' && campoCodigo == 'tplink2025') {
    window.location.replace("painel.html")
   } else {
   alert("invalido") 
}
console.log("seu acesso foi permitido")
}
botaoEntrar.addEventListener('click',login)