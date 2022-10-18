const questionArr1 = [
    {'You would be most hurt if someone called you...': 
    ['Weak', 'Unkind', 'Ignorant', 'Boring'] },
{'Which of these most accurately describes your relationship with your closest friends?':
['I love surrounding myself with people – the more friends I have, the better!', 'I have a few very close friends that I would trust with my life.', 'I tend to be wary around new people, so dont make new friends often.', 'I find myself becoming friends with people who can help me to succeed.']},
{'Which of your skills are you most proud of?':
['My ability to absorb new information.', 'My ability to make new friends.', 'My ability to get what I want.', 'My ability to keep secrets.']},
{'What would you see in the Mirror of Erised?':
['Myself, surrounded by riches.', 'Myself, surrounded by my loving family and friends.', 'Myself, knowledgable above all.', 'Myself, experiencing a marvellous adventure.']} ]

let question = document.getElementById('question')
let answer1 = document.getElementById('answer-1');
let answer2 = document.getElementById('answer-2');
let answer3 = document.getElementById('answer-3');
let submitBtn = document.getElementById('submit');
let resultBtn = document.getElementById('result');
let house = document.getElementById('house-img');
let housename = document.getElementById('house-name');
let houseinfo = document.getElementById('house-info');
let beginBtn = document.getElementById('begin');
let answers = document.getElementById('answers');


let retakeBtn = document.getElementById('retake');
retakeBtn.style.display = 'none';
answers.style.display = 'none';

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
resultBtn.addEventListener("click", showResults);
retakeBtn.addEventListener("click", reload);
beginBtn.addEventListener("click", begin);


function reload(){
    location.reload();
}



function begin(){
beginBtn.style.display = "none";
submitBtn.style.display = "block";

answers.style.display = 'flex';
houseinfo.style.display = 'none';
question.style.display = 'block';



}

function showResults(){
    const allAnswers = document.getElementById("answers");
    allAnswers.remove();
    question.style.display = 'none';
    answer1.style.display = 'none';
    answer2.style.display = 'none';
    answer3.style.display = 'none';
    totalScore.style.display = 'none';
    checkbox1.style.display = 'none';
    checkbox2.style.display = 'none';
    checkbox3.style.display = 'none';

    resultBtn.style.display = 'none';
    retakeBtn.style.display = 'block';
    house.style.display = 'flex';
    housename.innerText = 'Gryffindor!';
    housename.style.fontSize = '60px';
    houseinfo.innerText = 'Youre brave, bold and friendly, just like your fellow housemates Harry, Hermione and Ron!';
    houseinfo.style.display = 'block';

}


function submit () {
    let radioButton = document.querySelector('input[name="answer"]:checked').value;

    if (radioButton === (Object.values(questionArr1[counter]))[0][3]) {
        score++;
    } else {
    }

    if (counter === questionArr1.length-2) 
    {
        submitBtn.style.display = 'none';
        resultBtn.style.display = 'block';
    }
    else{
        submitBtn.style.display = 'block';
    }

    counter++;


    question.innerText =(Object.keys(questionArr1[counter]))[0];
    answer1.innerText = (Object.values(questionArr1[counter]))[0][0];
    answer2.innerText = (Object.values(questionArr1[counter]))[0][1];
    answer3.innerText = (Object.values(questionArr1[counter]))[0][2];
    checkbox1.value = (Object.values(questionArr1[counter]))[0][0];
    checkbox2.value = (Object.values(questionArr1[counter]))[0][1];
    checkbox3.value = (Object.values(questionArr1[counter]))[0][2];
  

    questionCount++;
}

// function changeQuestion(){
//     // question.innerText =(Object.keys(questionArr1[counter]))[0];
//     // answer1.innerText = (Object.values(questionArr1[counter]))[0][0];
//     // answer2.innerText = (Object.values(questionArr1[counter]))[0][1];
//     // answer3.innerText = (Object.values(questionArr1[counter]))[0][2];
//     // checkbox1.value = (Object.values(questionArr1[counter]))[0][0];
//     // checkbox2.value = (Object.values(questionArr1[counter]))[0][1];
//     // checkbox3.value = (Object.values(questionArr1[counter]))[0][2];

//     // submitBtn.style.display = 'block';
//     // nextBtn.style.display = 'none';

//     // questionCount++;
// } 