//variaveis
var formulario;
var aux=-1;
var valor = 0;

//URL da api com o  formato JSON
var requestURL = "https://quiz-trainee.herokuapp.com/questions";

//criacao do objeto XMLHttpRequest para nao precisar-mos atualizar a pagina quando quisermos recuperar dados entre o cliente e o servidor
var request = new XMLHttpRequest();

//Inicio do bloco//

//Request para o servidor - open abrindo o request, send enviando
request.open('GET', requestURL);

//Funcao que eh chamada sempre que o readyState eh alterado
//readyState - retorna o cabecalho da requisicao. cada valor indica um estado. 4 = operacao concluida.
//status - eh o status de resposta da requisicao. 200 = solicitacao bem sucedida.
//JSON.parse - funcao onde o conteudo do nosso JSON sera convertido em um objeto JavaScript.
request.onreadystatechange = function(){

  if(request.readyState === 4){
    if(request.status === 200){
      formulario = JSON.parse(request.responseText);
    }
  }
};

request.send(null);
//Final do Bloco


function mostrarQuestao() {
  //fara com que a div resultado fique vazia
  document.getElementById("resultado").innerHTML = "";
  //mostrara o form tipo radio, deixando ele visivel
  document.getElementById("listaRespostas").style.display = "block";


  //Funcao que ira checar se o radio foi marcado, ou se o auxiliar eh -1, para liberar o botao, e servira para somar os pontos da questao marcada.
  //tambem controla qual questao é para ser mostrada, por meio do valor da variavel auxiliar
  if(aux === -1|| document.getElementsByTagName("input")[0].checked != false || document.getElementsByTagName("input")[1].checked != false || document.getElementsByTagName("input")[2].checked != false || document.getElementsByTagName("input")[3].checked != false ){ //Só permite que avance se uma resposta for marcada
    if(aux != -1){
      //contar os pontos
      for(var i=0; i<formulario[aux].options.length; i++){ 
          valor += document.getElementsByTagName("input")[i].checked*formulario[aux]['options'][i]['value']
      }
    }
    //Substitui o nome do botao por pelo "Proxima"
    document.getElementById("confirmar").innerHTML = "Próxima" 
    //incrementa valor a questão para avançar
    aux++; 
  }
  //Remove as perguntas e repostas antes de iniciar o quiz
  if (aux == -1) {
    document.getElementById("titulo").classList.remove('hide');
    document.getElementById("listaRespostas").remove('hide');
  }

    //funcao que ria substituir o titulo, o texto da pergunta, e, o valor pelos respectivos da api, comparando com a posicao da mesma.
    //tambem é incarregada de trocar os checks marcados nas questoes anteriores por false, para que na hora
    //que a proxima questao aparecer, eles ja aparecam desmarcados
    //formulario.length = quantidade de questoes
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
    //quando o auxiliar for maior que a quantidade de questoes, ele entrara na funcao finalizarQuiz, que calculara a porcentagem de acertos
    //das questoes, com base na propriedade value de cada radio marcado
    finalizarQuiz();
  }
  
}

function finalizarQuiz() {

  //max é a variavel que calculara o valor maximo que a pessoa pode ter nos radios
  //3 é a pontuaçao maxima de cada questao, formulario[aux-1].options.length+1 é a quantidade de questoes 
  //aux-1, pois o auxiliar nesse ponto é 1 unidade maior que a quantidade de questoes
  //+1 pois o contador começa do zero
  var max = 3*(formulario[aux-1].options.length+1);

  //faz com que o fomulario deixe de ser mostrado na tela, modifica o titulo, o nome do botao, e faz a pontuacao aparecer na tela
  document.getElementById("listaRespostas").style.display = "none";
  document.getElementById("confirmar").innerHTML = "Refazer quiz";

  document.getElementById("titulo").innerHTML = "QUIZ DOS VALORES DA GTI";

  document.getElementById("resultado").innerHTML = "Sua pontuação: " + (valor*100/max) + "%";

  //caso o botao seja clicado dnv, os valores do auxiliar, e do contador do valor ja estarao de volta no estado inicial, para que as questoes
  //sejam mostradas de novo.
  aux = -1;
  valor = 0;


}
