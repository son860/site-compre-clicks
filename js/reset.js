var enviado = "../email-novo.php";
var botao = "submit";

function limpar(){
    
    if(botao == enviado){
         $('.form').each (function(){
              this.reset();
          });
    }