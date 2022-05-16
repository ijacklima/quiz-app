const quizData = [
  {
    question: "Qual o significado de Vallar Morghulis?",
    a: "Sangue se paga com sangue",
    b: "Todo homem deve servir",
    c: "Sua luta acabou",
    d: "Todo homem deve morrer",
    correct: "d",
  },
  {
    question: "Quais eram os planos de Sandor Clegane quando estava viajando com Arya?",
    a: "Usá-la como escrava",
    b: "Treiná-la para a tornar um cavaleiro como ele",
    c: "Levá-la para sua tia e ganhar uma recompensa",
    d: "Usá-la como moeda de troca para algum negócio",
    correct: "c",
  },
  {
    question: "Qual foi a punição de Arya Stark por falhar com Jaqen H'ghar?",
    a: "Foi chicoteada",
    b: "Foi expulsa de sua casa",
    c: "Ela ficou cega",
    d: "Foi apedrejada",
    correct: "c",
  },
  {
    question: "Quem se sentou no trono de ferro na última temporada?",
    a: "Tyrion Lannister",
    b: "Deanerys",
    c: "Ele foi destruído, Bran se tornou rei",
    d: "Jon Snow",
    correct: "c",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você respondeu corretamente em ${score}/${quizData.length} questões.</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
