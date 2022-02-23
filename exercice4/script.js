const quizData=[
    {
       question:"Quel est le meilleur langage de programmation en 2022",
       a:"Java",
       b:"C",
       c:"Python",
       d:"JavaScript",
       correct:"d", 
    },    
    {
        question:"Quel est ton animal preferer",
        a:"Chat",
        b:"Chien",
        c:"Cheval",
        d:"Ane",
        correct:"b ", 
    },    
    {
        question:"Quel est ton animal preferer",
        a:"Chat",
        b:"Chien",
        c:"Cheval",
        d:"Ane",
        correct:"a", 
    },   
    {
        question:"Quel est ton joueur préferé",
        a:"Salla",
        b:"Sadio",
        c:"Messi",
        d:"Ronaldo",
        correct:"b", 
    }  
];
const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_texte=document.getElementById('a_texte')
const b_texte=document.getElementById('b_texte')
const c_texte=document.getElementById('c_texte')
const d_texte=document.getElementById('d_texte')
const submitBtn=document.getElementById('suivant')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText=currentQuizData.question
    a_texte.innerText=currentQuizData.a
    b_texte.innerText=currentQuizData.b
    c_texte.innerText=currentQuizData.c
    d_texte.innerText=currentQuizData.d
}
function deselectAnswers(){
   answerEls.forEach(answerEl=>answerEl.checked=false)
     
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked)  {
            answer = answerEl.id
        }
    });
    return answer
};

submitBtn.addEventListener('click', () => {
    const answer =  getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++ 

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else {
            quiz.innerHTML=`<h1>Vous avez Repondu ${score}/${quizData.length} questions.</h1>
            <button class="suivant" onclick="location.reload()">Rejouer</button>`
        }

    }
})

