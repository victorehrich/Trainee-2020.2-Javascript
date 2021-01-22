
var requestURL = "https://quiz-trainee.herokuapp.com/questions";
var request = new XMLHttpRequest();
request.open('GET', requestURL);

var formulario;
var aux=0;

request.onreadystatechange = function(){

  if(request.readyState === 4){
    if(request.status === 200){
      formulario = JSON.parse(request.responseText);
    }
  }
};
var radioFalse = 0; //tentar fazer um true false pra libearr o botao

var valor = 0;
request.send(null);
function mostrarQuestao() {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("listaRespostas").style.display = "block";
  document.getElementById("confirmar").innerHTML = "Próxima";
  //console.log(formulario);
  //console.log(aux);

      if(aux<0){
        aux=aux+1;
      }
      else if(aux < formulario.length){
        //console.log(formulario.length);
        //console.log(aux + "deu bom");
        document.getElementById("titulo").innerHTML=formulario[aux].title;
        for(var i = 0; i<formulario[aux].options.length;i++){
          document.getElementsByTagName("span")[i].innerHTML=formulario[aux].options[i].answer
          document.getElementsByTagName("input")[i].value=formulario[aux].options[i].value
          //document.getElementsByTagName("input")[i].checked = false
        }

          for(var i = 0; i<formulario[aux].options.length;i++){
            if(document.getElementsByTagName("input")[i].checked === true){
              valor += parseInt(formulario[aux].options[i].value,10);
              document.getElementsByTagName("input")[i].checked === false;
              //console.log(document.getElementsByTagName("input")[i].value);
              console.log(valor);
            }
          }
      aux=aux+1;
      }
      else{
        finalizarQuiz();
      }
      
}

function finalizarQuiz() {

  var max = 3*formulario[aux-1].options.length;
  document.getElementById("listaRespostas").style.display = "none";
  document.getElementById("confirmar").innerHTML = "Refazer quiz";

  document.getElementById("titulo").innerHTML = "QUIZ DOS VALORES DA GTI";

  document.getElementById("resultado").innerHTML = "Sua pontuação: " + (valor*100/max) + "%";

  aux = 0;
  valor = 0;


  console.log(valor);
}
