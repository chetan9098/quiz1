const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

const questions = [
    {
        question: 'Which of the following does not belong to solar system?',
        choices: ['Planets', 'Nebulae', 'Comets', 'Asteroids'],
        correctAnswer: 'Nebulae'
    },
    {
        question: 'Our solar system is located in which Galaxy?',
        choices: ['Milky way', 'Andromeda', 'whale', 'Cigar galaxy'],
        correctAnswer: 'Milky way'
    },
    {
        question: 'On which planet would one witness sunrise in the west?',
        choices: ['Saturn', 'Mercury', 'Venus', 'Jupiter'],
        correctAnswer: 'Venus'
    },
    {
       question: 'Which of the following is not Galaxy?',
       choices: ['Milky way', 'Cigar', 'Pinwheel', 'Casini'],
       correctAnswer: 'Casini'
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach((choice) => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => checkAnswer(choice, currentQuestion.correctAnswer));
        choicesElement.appendChild(li);
    });
}

function checkAnswer(selectedChoice, correctAnswer) {
    if (selectedChoice === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = 'Quiz Completed!';
    choicesElement.innerHTML = '';
    submitButton.disabled = true;
    scoreElement.textContent = `Final Score: ${score}`;
}

submitButton.addEventListener('click', () => displayQuestion());

// Start the quiz when the page loads
displayQuestion();
