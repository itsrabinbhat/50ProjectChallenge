// Script Goes Here...
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const container = document.getElementById('container')
const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const a_text =document.getElementById('a_text')
const b_text =document.getElementById('b_text')
const c_text =document.getElementById('c_text')
const d_text =document.getElementById('d_text')
const btn = document.getElementById('btn')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question

    clearSelection()

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function clearSelection(){
    answerEls.forEach(ansEl => ansEl.checked=false)
}

function getSelectedAns(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

btn.addEventListener('click', ()=>{

    const selectedAns = getSelectedAns()

    if(selectedAns){
        const correctAns = quizData[currentQuiz].correct
        if(selectedAns === correctAns){
            score++
        }
    }

    currentQuiz++
    if(currentQuiz < quizData.length){
        loadQuiz()
    }
    else{

        container.innerHTML = `
            <div class="congrats_text">
                <h3>You answered ${score} question correctly out of ${quizData.length} question.</h3>
                <strong> Your Score is ${score * 25}.</strong>
            </div>

            <button class="btn" onclick = "location.reload()">Reload</button>
        `
    }
})