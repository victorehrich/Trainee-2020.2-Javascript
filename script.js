
var requestURL = "https://quiz-trainee.herokuapp.com/questions";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
var forme = request.response;
var x=0;

function mostrarQuestao() {
  document.getElementById("listaRespostas").style.display = "block";
  document.getElementById("confirmar").innerHTML = "Próxima";
  x=x+1;

  var resp = jsonObj['options'];

  if(x==1){
    document.getElementsByName("titulo")[0].textContent = 
    document.getElementsByName("resposta")[0].span.textContent = resp[0]
  }
  


}

function finalizarQuiz() {
    
}
