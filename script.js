const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Qual a força da arte que sustenta o peso de ser?", alternativas: [" TO NÃO! ", " GELEIA "]
    },
    
    {
        enunciado: " Sou inteligente e idiota o bastante para duvidar disso?", alternativas: [" ISSO ", " BASTANTE DISSO "]
    },

    {
        enunciado: " Por onde anda o maicom jesscson?", alternativas: [" CRIO ", " GENIA "]
    },

    {
        enunciado: " Taxa de mortalidade da índia?", alternativas: [" PAREDE DA MORTE", " COMIDA DE RUA "]
    },
    
    {
        enunciado: " Qual foi a primeira pergunta?", alternativas: [" PERGUNTA1 ", " CANIVETE "]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();






        








