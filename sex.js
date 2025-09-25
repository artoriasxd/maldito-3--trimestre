let numeroSecreto;
let contadorDeChances = 1;
const MAX_CHANCES = 10; 

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarPalpite = document.querySelector('#botaoEnviarPalpite');
const botaoReiniciar = document.querySelector('#botaoReiniciar');

const mensagemElement = document.querySelector('#mensagem');
const palpitesAnterioresElement = document.querySelector('#palpites-anteriores');
const dicaElement = document.querySelector('#dica');
const chancesRestantesElement = document.querySelector('#chancesRestantes');

let listaDePalpites = []; 

function iniciarJogo() {numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log("Número Secreto (apenas para teste):", numeroSecreto);
}