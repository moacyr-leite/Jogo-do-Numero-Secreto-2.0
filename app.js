//Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.
/* Feito */
//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";*/
let listaNumeroSorteado = [];
let limitadorNumerico = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}
function mensagemInicial() {
  exibirTextoNaTela("h1", "Hora do Desafio");
  exibirTextoNaTela("p", `Escolha um número de 1 a ${limitadorNumerico}`);
}

mensagemInicial();
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * limitadorNumerico + 1);
  let quantidadeDeElementos = listaNumeroSorteado.length;

  if (quantidadeDeElementos == limitadorNumerico) {
    listaNumeroSorteado = [];
  }
  if (listaNumeroSorteado.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaNumeroSorteado.push(numeroEscolhido);
    console.log(listaNumeroSorteado);
    return numeroEscolhido;
  }
}
//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Parabens você acertou");
    palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O numero secreto é menor!");
    } else {
      exibirTextoNaTela("p", "O numero secreto é maior!");
    }
    tentativas++;
    limparCampo();
  }
  /*/Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
  alert("Eu amo JS");

  //Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
  let cidade = prompt("Me diga o nome de uma cidade!");
  alert(`Estive em ${cidade} e lembrei de você.`);

  //Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
  let valor1 = prompt("Vamos somar! Me diga o primeiro valor.");
  let valor2 = prompt("Me diga o segundo valor.");
  let resultado = parseInt(valor1) + parseInt(valor2);
  alert(`A soma de ${valor1} com ${valor2} é ${resultado}`);*/
}

function limparCampo() {
  let chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  limparCampo();
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  mensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
