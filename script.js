const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '20',
        c: '15',
        d: '120',
        correct: 'c',
    },
    {
        question: 'What is the best programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JS',
        correct: 'd',
    },
    {
        question: 'Who is the president of USA?',
        a: 'Clinton',
        b: 'Bush',
        c: 'Biden',
        d: 'Trump',
        correct: 'a',
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'CSS stylinh',
        c: 'Advanced text input',
        d: 'Scipting language',
        correct: 'a',
    },
    {
        question: 'What year was JS launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'd',
    },
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const answerA = document.getElementById('a_text');
const answerB = document.getElementById('b_text');
const answerC = document.getElementById('c_text');
const answerD = document.getElementById('d_text');
const submitBtn = document.getElementById('submitbtn');
const answers = document.querySelectorAll('.answer');

let currentQuestion = 0;
let score = 0;

function initQuestion(currentQuestion){
    const questionObj = quizData[currentQuestion];
    questionEl.innerText = questionObj.question;
    answerA.innerText = questionObj.a;
    answerB.innerText = questionObj.b;
    answerC.innerText = questionObj.c;
    answerD.innerText = questionObj.d;
}

function getSelectedAnswer(){
    let answer = undefined;
    answers.forEach((answer1) => {
        if (answer1.checked){
            answer = answer1.id;
        }
    });
    return answer;
}

function deselectAnswer(){
    answers.forEach((answer1) => {
       answer1.checked = false;
    });
}

initQuestion(currentQuestion);
submitBtn.addEventListener('click', () => {
    if (submitBtn.innerText === 'Reload'){
        location.reload();
    }
    else{
        const selectedAnswer = getSelectedAnswer();
        if (selectedAnswer){
            if (selectedAnswer === quizData[currentQuestion].correct){
                score++;
            }

            if (currentQuestion >= answers.length){
                questionEl.innerText = `You answered correctly at ${score}/${quizData.length} questions.`;
                document.getElementById('choices').innerHTML = '';
                submitBtn.innerText = 'Reload';
            }
            else{
                deselectAnswer();
                currentQuestion++;
                initQuestion(currentQuestion);
            }            
        }
        else{
            alert('Please select answer');
        }
    }
});