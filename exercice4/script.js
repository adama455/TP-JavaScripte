const quiz=[
    {
       question:"Quel est le meilleur langage de programmation en 2022",
       a:"Java",
       b:"C",
       c:"Python",
       d:"JavaScript",
       correct:"d", 
    },    
];
const quiz=document.getElementById('quiz');
const choiceEl=document.querySelectorAll('.choice');
const questionEl=document.getElementById('question');
const a_texte=document.getElementById('a_texte');
const b_texte=document.getElementById('b_texte');
const c_texte=document.getElementById('c_texte');
const d_texte=document.getElementById('d_texte');
const submitbtn=document.getElementById('suivant');

