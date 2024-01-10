const submitBtn = document.getElementById('submitBtn');
const answerInput = document.getElementById('answerInput');
const question = document.getElementById('question');

const questions = [
    { question: 'how to make gobi?', answer: 'ask chef gopi' },
    { question: 'What is the capital of France?', answer: 'Paris' },
    // Add more questions and answers here
];

let currentQuestion = 0;

submitBtn.addEventListener('click', () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        alert('Correct answer!');
    } else {
        alert('Wrong answer. Try again!');
    }

    // Move to the next question or end the game
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayNextQuestion();
    } else {
        alert('Game Over. You answered all the questions!');
        // You can reset the game here if needed
    }
});

function displayNextQuestion() {
    question.textContent = questions[currentQuestion].question;
    answerInput.value = '';
}
// Display the first question
displayNextQuestion();
