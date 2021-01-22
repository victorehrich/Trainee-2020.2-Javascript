
var requestURL = "https://quiz-trainee.herokuapp.com/questions";
var request = new XMLHttpRequest();
request.open('GET', requestURL);

var formulario;
var aux=-1;

request.onreadystatechange = function(){

  if(request.readyState === 4){
    if(request.status === 200){
      formulario = JSON.parse(request.responseText);
    }
  }
};
var clicker = document.getElementById(("confirmar")); //tentar fazer um true false pra libearr o botao

var valor = 0;
request.send(null);

function mostrarQuestao() {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("listaRespostas").style.display = "block";
  //document.getElementById("confirmar").innerHTML = "Próxima";


      
        if(aux === -1|| document.getElementsByTagName("input")[0].checked != false || document.getElementsByTagName("input")[1].checked != false || document.getElementsByTagName("input")[2].checked != false || document.getElementsByTagName("input")[3].checked != false ){ //Só permite que avance se uma resposta for marcada
          if(aux != -1){
            for(var i=0; i<formulario[aux].options.length; i++){ //contar os pontos
                valor += document.getElementsByTagName("input")[i].checked*formulario[aux]['options'][i]['value']
            }
          }
          document.getElementById("confirmar").innerHTML = "Próxima" //"troca" o botão start pelo "Próxima"
          aux++; //incrementa valor a questão para avançar
        }

        if (aux == -1) {//Remove as perguntas e repostas antes de iniciar o quiz
          document.getElementById("titulo").classList.remove('hide');
          document.getElementById("listaRespostas").remove('hide');
      }
  
  

        console.log(valor);
        if(aux < formulario.length){
        

        document.getElementById("titulo").innerHTML=formulario[aux].title;
        for(var i = 0; i<formulario[aux].options.length;i++){
          if(document.getElementsByTagName("input")[i].checked === true){
            document.getElementsByTagName("input")[i].checked = false
          }
          document.getElementsByTagName("span")[i].innerHTML=formulario[aux].options[i].answer
          document.getElementsByTagName("input")[i].value=formulario[aux].options[i].value
          
        }
      }
      else{
        console.log(formulario[aux-1].options.length)
        finalizarQuiz();
      }
      
}

function finalizarQuiz() {

  var max = 3*(formulario[aux-1].options.length+1);
  document.getElementById("listaRespostas").style.display = "none";
  document.getElementById("confirmar").innerHTML = "Refazer quiz";

  document.getElementById("titulo").innerHTML = "QUIZ DOS VALORES DA GTI";

  document.getElementById("resultado").innerHTML = "Sua pontuação: " + (valor*100/max) + "%";

  aux = -1;
  valor = 0;


  console.log(valor);
}
