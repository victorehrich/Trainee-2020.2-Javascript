
var requestURL = "https://quiz-trainee.herokuapp.com/questions";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
var formulario;
var aux=-1;
var NumeroDePerguntas;

request.onreadystatechange = function(){
  if(request.readyState === 4 ){
    if(request.status === 200){
      var formRadio = document.getElementsByName("resposta");
      formulario = JSON.parse(request.responseText);
      for(var i=0; i<formulario[0];i++){
        document.getElementById("titulo")=formulario.title;
        }
      }
    }
  };


request.send(null);
function mostrarQuestao() {
 aux=aux+1;
  document.getElementById("listaRespostas").style.display = "block";
  document.getElementById("confirmar").innerHTML = "Próxima";
  request.onreadystatechange;
  console.log(formulario);



}

function finalizarQuiz() {
    
}
