const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-btn");

const questions = [
  {
    questao:"Qual é o órgão do governo brasileiro responsável por formular e coordenar políticas para as mulheres?",
    opcoes: ["Secretaria de Segurança Pública","Ministério da Súde","Secretaria de Políticas para as Mulheres",],
    resposta_correta: "Secretaria de Políticas para as Mulheres",
  },
  {
    questao: "A Lei Maria da Penha é uma legislação brasileira que:",
    opcoes: ["Estabelece cotas para mulheres em cargos políticos","Protege mulheres contra a violência doméstica","Garante licença maternidade prolongada",],
    resposta_correta: "Protege mulheres contra a violência doméstica",
  },
  {
    questao: "O que significa o termo "feminicídio"?",
    opcoes: ["Assassinato de mulheres pelo fato de serem mulheres", "Acidente fatal envolvendo mulheres", "Suicídio cometido por mulheres",],
    resposta_correta: "Assassinato de mulheres pelo fato de serem mulheres",
  },
  {
    questao: "Qual é o nome do programa do Governo Federal que oferece atendimento especializado às mulheres em situação de violência?",
    opcoes: ["Casa da Mulher Brasileira", "Minha Casa Minha Vida","Bolsa Família"],
    resposta_correta: "Casa da Mulher Brasileira",
  },
  {
    questao: "Qual das seguintes opções NÃO é um tipo de violência previsto na Lei Maria da Penha?",
    opcoes: ["Violência física", "Violência patrimonial", "Violência racial"],
    resposta_correta: "Violência racial",
  },
  {
    questao: "Qual movimento social luta pela igualdade de direitos entre homens e mulheres?",
    opcoes: ["Movimento LGBT+", "Movimento Negro", "Movimento Feministas"],
    resposta_correta: "Movimento Feministas",
  },
  {
    questao: "Qual é o conceito de gênero mais aceito atualmente?",
    opcoes: ["Gênero é sinônimo de sexo biológico", "Gênero é uma construção social que define papéis e comportamentos esperados para homens e mulheres", "Gênero é uma questão exclusivamente biológica"],
    resposta_correta: "Gênero é uma construção social que define papéis e comportamentos esperados para homens e mulheres",
  },
  {
    questao: "O que é o patriarcado?",
    opcoes: ["Sistema social em que as mulheres detêm o poder político e econômico", "Sistema social em que os homens detêm o poder político, econômico e social", "Sistema social em que não há distinção de gênero"],
   resposta_correta: "Sistema social em que os homens detêm o poder político, econômico e social",
  },
  {
    questao: "Como o feminismo interseccional aborda as questões de raça, classe social e orientação sexual na luta pela igualdade de gênero?,
    opcoes: [" Ignorando as diferentes formas de opressão enfrentadas por diferentes grupos de mulheres.", "Reconhecendo que as experiências das mulheres são moldadas por múltiplas formas de opressão e discriminação.", "Limitando-se à luta pela igualdade entre homens e mulheres sem considerar outras formas de desigualdade."],
    resposta_correta: "Reconhecendo que as experiências das mulheres são moldadas por múltiplas formas de opressão e discriminação.",
  },
  {
    questao: "Qual é a definição de feminismo?",
    opcoes: ["Ideologia que promove a dominação feminina sobre os homens.", "Movimento social e político que busca a igualdade de direitos entre homens e mulheres.", "Filosofia que prega a superioridade das mulheres sobre os homens."],
    resposta_correta: "Movimento social e político que busca a igualdade de direitos entre homens e mulheres.",
  },

];

function buildQuiz() {
}

function mostrarresultado() {

}

function resultadoQuiz() {

}

iniciarQuiz();
