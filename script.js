const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Rome", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
   {
        question: "What is the capital of Pakistan?",
        options: ["Peshawar", "Karachi", "Islamabad", "Lahore"],
        correctAnswer: "Islamabad"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra"
    },
       {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Jupiter", "Mars"],
        correctAnswer: "Mercury"
    },
   {
        question: "Who painted the famous artwork The Starry Night?",
        options: ["Claude Monet", "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
        correctAnswer: "Vincent van Gogh"
    },
       {
        question: "Which country is famous for the ancient pyramids?",
        options: ["Greece", "Egypt", "China", "Mexico"],
        correctAnswer: "Egypt"
    },
       {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Heart", "Brain", "Skin"],
        correctAnswer: "Skin"
    },
       {
        question: "Who is the author of the play Romeo and Juliet?",
        options: ["Leo Tolstoy", "Jane Austen", "Charles Dickens", "William Shakespeare"],
        correctAnswer: "William Shakespeare"
    },
       {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
        correctAnswer: "Nitrogen"
    },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitBtn = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionLabel = document.createElement("label");
        optionLabel.innerHTML = `
            <input type="radio" name="option" value="${option}">
            ${option}
        `;
        optionsElement.appendChild(optionLabel);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return;

    const userAnswer = selectedOption.value;
    const currentQuestion = quizData[currentQuestionIndex];
    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    optionsElement.innerHTML = "";
    resultElement.textContent = `You got ${score} out of ${quizData.length} questions correct.`;
    submitBtn.disabled = true;
}

submitBtn.addEventListener("click", checkAnswer);
loadQuestion();
