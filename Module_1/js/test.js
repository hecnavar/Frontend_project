const questions = [
    {
        question: "¿Cuál es la palabra clave para declarar una variable en JavaScript?",
        options: ["var", "let", "const", "Todas las anteriores"],
        answer: "Todas las anteriores"
    },
    {
        question: "¿Cómo se selecciona un elemento con id 'titulo' en JavaScript?",
        options: ["document.getElementById('titulo')", "document.querySelector('#titulo')", "Ambas son correctas", "Ninguna"],
        answer: "Ambas son correctas"
    },
    {
        question: "¿Qué método se usa para convertir un string en un número?",
        options: ["parseInt()", "parseFloat()", "Number()", "Todas las anteriores"],
        answer: "Todas las anteriores"
    }
];

const quizContainer = document.getElementById("quiz-container");
const submiButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

function loadQuiz() {
    for (let i = 0; i < questions.length; i++) {
        let questionElement = document.createElement("div");
        questionElement.innerHTML = "<h3>" + (i + 1) + ". " + questions[i].question + "</h3>";

        for (let j = 0; j < questions[i].options.length; j++) {
            questionElement.innerHTML +=
                '<label>' +
                '<input type="radio" name="question' + i + '" value="' + questions[i].options[j] + '">' +
                questions[i].options[j] +
                '</label><br>';
        }

        quizContainer.appendChild(questionElement);
    }
}

function checkAnswers() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        let selectedOption = document.querySelector('input[name="question' + i + '"]:checked');
        if (selectedOption && selectedOption.value === questions[i].answer) {
            score++;
        }
    }

    resultContainer.innerHTML = "<h2>Tu puntaje: " + score + " de " + questions.length + "</h2>";
}

loadQuiz();
submiButton.addEventListener("click", checkAnswers);