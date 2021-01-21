
var requestURL = "https://quiz-trainee.herokuapp.com/questions";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
var formulario;
var aux=-0;
var NumeroDePerguntas;

request.onreadystatechange = function(){

  if(request.readyState === 4 ){
    if(request.status === 200){
      formulario = JSON.parse(request.responseText);
    }
  }
};


      


request.send(null);
function mostrarQuestao() {
  
  document.getElementById("listaRespostas").style.display = "block";
  document.getElementById("confirmar").innerHTML = "Próxima";
  request.onreadystatechange;
  console.log(formulario);
  console.log(aux);



  var formRadio = document.getElementsByName("resposta");
      
      console.log(aux);
      if(aux<0){
        aux=aux+1;
      }
      else{
        switch(aux){
          case 0:
            //console.log(aux + "deu bom")
            document.getElementById("titulo").innerHTML=formulario[0].title;
            for(var i = 0; i<4;i++){
              document.getElementsByTagName("span")[i].innerHTML=formulario[0].options[i].answer
              document.getElementsByTagName("input")[i].value=formulario[0].options[i].value
            }
            break;
          case 1:
            //console.log(aux + "deu bom")
            document.getElementById("titulo").innerHTML=formulario[1].title;
            for(var i = 0; i<4;i++){
              document.getElementsByTagName("span")[i].innerHTML=formulario[1].options[i].answer
              document.getElementsByTagName("input")[i].value=formulario[1].options[i].value
              }
            break;
          case 2:
            //console.log(aux + "deu bom")
            document.getElementById("titulo").innerHTML=formulario[2].title;
            for(var i = 0; i<4;i++){
              document.getElementsByTagName("span")[i].innerHTML=formulario[2].options[i].answer
              document.getElementsByTagName("input")[i].value=formulario[2].options[i].value
              }
            break;
          case 3:
            //console.log(aux + "deu bom")
            document.getElementById("titulo").innerHTML=formulario[3].title;
            for(var i = 0; i<4;i++){
              document.getElementsByTagName("span")[i].innerHTML=formulario[3].options[i].answer
              document.getElementsByTagName("input")[i].value=formulario[3].options[i].value
              }
            break;
          case 4:
            //console.log(aux + "deu bom")
            document.getElementById("titulo").innerHTML=formulario[4].title;
            for(var i = 0; i<4;i++){
              document.getElementsByTagName("span")[i].innerHTML=formulario[4].options[i].answer
              document.getElementsByTagName("input")[i].value=formulario[4].options[i].value
              }
            break;
          default:
              finalizarQuiz();
              break;
          }
          aux=aux+1;
        }


}

function finalizarQuiz() {
    
}
