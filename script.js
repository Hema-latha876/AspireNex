const questions = [
    {
        question: "What is never asks a question but gets answered all the time?",
        options: ["Cell phone", "Mother", "clock", "Teacher"],
        answer: "Cell phone"
    },
    {
        question: "What two keys can't open any door?",
        options: ["foreignkey and doorkey", "lockkeys and bikekeys", "monkey and donkey", "None"],
        answer: "monkey and donkey"
    },
    {
        question: "What is always coming but never Arrives?",
        options: ["Today", "Tomorrow", "yesterday", "Daybefore Yesterday"],
        answer: "Tomorrow"
    },
    {
        question: "How many seconds are there in a year?",
        options: ["11", "12", "10", "24"],
        answer: "12"
    },
    {
        question: "What goes up but never ever comes down?",
        options: ["your character", "your Age", "Your birthday", "Your weight"],
        answer: "your Age"
    },
    {
        question: "What will you actually find at the end of every rainbow?",
        options: ["V", "W", "D", "R"],
        answer: "W"
    }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
    const quizContainer = document.querySelector(".quiz-container");
    const questionElement = document.getElementById('question');
    const optionsElements = document.querySelectorAll('.option');
    const nextButton = document.getElementById('next-btn');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');
    const restartButton = document.getElementById('restart-btn');

    startButton.addEventListener("click", () => {
        startScreen.style.display = "none";
        quizContainer.style.display = "block";
        startQuiz();
    });

    nextButton.addEventListener('click', nextQuestion);
    restartButton.addEventListener('click', restartQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        showQuestion();
    }

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElements.forEach((button, index) => {
            button.textContent = currentQuestion.options[index];
            button.style.backgroundColor = '';
            button.disabled = false;
            button.onclick = selectOption;
        });
        nextButton.style.display = 'none';
    }

    function selectOption(event) {
        const selectedOption = event.target;
        const correct = selectedOption.textContent === questions[currentQuestionIndex].answer;
        if (correct) {
            score++;
            selectedOption.style.backgroundColor = '#4caf50';
        } else {
            selectedOption.style.backgroundColor = '#f44336';
        }
        optionsElements.forEach(button => button.disabled = true);
        nextButton.style.display = 'block';
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        quizContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        scoreElement.textContent = `${score} / ${questions.length}`;
    }

    function restartQuiz() {
        startScreen.style.display = "block";
        quizContainer.style.display = "none";
        resultContainer.style.display = "none";
    }
});




