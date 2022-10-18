const questionArr1 = [
    {'What is the capital city of England?': ['London', 'Manchester', 'Glasgow', 'London'] },
{'Lisbon is the capital city of which country?':['Spain', 'France', 'Portugal', 'Portugal']},
{'Paris is the capital city of which country?':['Spain', 'France', 'Portugal', 'France']},
{'Geneva is the capital city of which country?':['Spain', 'Switzerland', 'Portugal', 'Switzerland']} ]

let question = document.getElementById('question')
let answer1 = document.getElementById('answer-1');
let answer2 = document.getElementById('answer-2');
let answer3 = document.getElementById('answer-3');
let wrongorright = document.getElementById('wrongorright');
let submitBtn = document.getElementById('submit');
let resultBtn = document.getElementById('result');


let retakeBtn = document.getElementById('retake');
retakeBtn.style.display = 'none';

let nextBtn = document.getElementById('next');
let totalScore = document.getElementById('score');


const checkbox1 = document.getElementById('answer-1-checkbox');
const checkbox2 = document.getElementById('answer-2-checkbox');
const checkbox3 = document.getElementById('answer-3-checkbox');

question.innerText =(Object.keys(questionArr1[0]))[0];
answer1.innerText = (Object.values(questionArr1[0]))[0][0];
answer2.innerText = (Object.values(questionArr1[0]))[0][1];
answer3.innerText = (Object.values(questionArr1[0]))[0][2];

let counter = 0
let score = 0
let questionCount = 0

submitBtn.addEventListener("click", submit);
next.addEventListener("click", changeQuestion);
resultBtn.addEventListener("click", showResults);
retakeBtn.addEventListener("click", reload);

function reload(){
    location.reload();
}

function showResults(){
    const allAnswers = document.getElementById("answers");
    allAnswers.remove();
    question.innerText = `You're score is ${score}/${questionArr1.length}!!!`;
    answer1.style.display = 'none';
    answer2.style.display = 'none';
    answer3.style.display = 'none';
    wrongorright.style.display = 'none';
    totalScore.style.display = 'none';
    checkbox1.style.display = 'none';
    checkbox2.style.display = 'none';
    checkbox3.style.display = 'none';

    resultBtn.style.display = 'none';
    retakeBtn.style.display = 'block';
}


function submit () {
    let radioButton = document.querySelector('input[name="answer"]:checked').value;

    if (radioButton === (Object.values(questionArr1[counter]))[0][3]) {
        wrongorright.innerText = 'Your answer is correct!'
        wrongorright.style.display='block';
        score++;
    } else {
        wrongorright.innerText = 'Your answer was incorrect!'
        wrongorright.style.display='block';
    }

    totalScore.innerHTML = `Score: ${score}`
    if (counter === questionArr1.length-1) 
    {
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        resultBtn.style.display = 'block';
    }
    else{
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    }

    counter++;
}

function changeQuestion(){
    wrongorright.style.display='none';

    question.innerText =(Object.keys(questionArr1[counter]))[0];
    answer1.innerText = (Object.values(questionArr1[counter]))[0][0];
    answer2.innerText = (Object.values(questionArr1[counter]))[0][1];
    answer3.innerText = (Object.values(questionArr1[counter]))[0][2];
    checkbox1.value = (Object.values(questionArr1[counter]))[0][0];
    checkbox2.value = (Object.values(questionArr1[counter]))[0][1];
    checkbox3.value = (Object.values(questionArr1[counter]))[0][2];

    submitBtn.style.display = 'block';
    nextBtn.style.display = 'none';

    questionCount++;
} 