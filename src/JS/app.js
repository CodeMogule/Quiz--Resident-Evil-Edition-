const elements = {
    inputs: document.querySelector('input[type=radio]:checked'),
    btn :document.querySelector('.btn'),
    resultMessage :  document.querySelector('.result-message h4'),
    questionClass : document.querySelector('.questions'),
    choices : document.querySelector(' .choices')
}

let questions = [
    {

    question : 'Who Kidnapped Ashley? (Resident evil 4)',
    choices : [' Krauser','Salazar','Ada','Luis'],
    answer : 0
},

{
    question : 'The first Resident Evil game\'s male and female protagonists were',
    choices : ['Eric Walker and Claire Redfield','Billy Coen and Rebecca Chambers','Chris Redfield and Jill Valentine','Leon Kennedy and Ada Wong'],
    answer : 2
},

{
    question : 'Which Resident Evil game has been ported more times than Skyrim?',
    choices : ['Resident Evil: Code Veronica','Resident Evil 5','Resident Evil 4','Resident Evil 6'],
    answer : 2
},

{
    question : 'In Resident Evil 7, Eveline\'s designated code is ',
    choices : ['E-001','E-010','E-020','E-004'],
    answer : 0
},
{
    question : 'Which Resident Evil game first introduced the ability to move and shoot simultaneously.',
    choices : ['Resident Evil: Outbreak','Resident Evil 6','Resident Evil: Operation Raccoon City',' Resident Evil: Revelations'],
    answer : 3
}

]

let currQue = 0
let curAns = 0
let game = false
window.addEventListener('DOMContentLoaded',function(e){
    
displayQustions()

elements.btn.addEventListener('click',function(){
  
if(!game){
  var inny = document.querySelector('input[type=radio]:checked')
if(inny === null){
   elements.resultMessage.textContent = 'Please Select an answer to proceed'
}
else{
    elements.resultMessage.style.display = 'none'
if(parseInt(inny.value) === questions[currQue].answer){
    curAns++
}

currQue++

if(currQue < questions.length){
    displayQustions()
}
else {
    uiScore();
    let btnPlayAgain = document.querySelector('.btn')
   btnPlayAgain.textContent = 'PLAY AGIAN!'
    game = true
}
}
} else{
    game = false;
    elements.btn.textContent = 'NEXT QUESTION'
    resetQuiz()
    hideScore()
    displayQustions()
}
})
})

function displayQustions(){

    let question = questions[currQue].question
    let choice = questions[currQue].choices.length

    elements.questionClass.textContent = question
    elements.choices.innerHTML = ''

    let choicesPro;
    for(let i = 0 ; i<choice ;i++){
        choicesPro = questions[currQue].choices[i];
        let list = document.createElement("li");
        list.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choicesPro + '</li>'
        elements.choices.appendChild(list)
    }
}

function resetQuiz () {
     currQue = 0
curAns = 0
hideScore()
}

function uiScore(){
    let finalScore = document.querySelector('.result-message')
    finalScore.textContent = 'You scored: ' + curAns + ' out of ' + questions.length;
}

function hideScore(){
    let hideScore = document.querySelector('.result-message')
  hideScore.style.display = 'none'
}

