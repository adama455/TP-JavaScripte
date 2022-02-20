// RECUPERATION DES ELEMENTS DU TABLEAU

var tableauTexte = new Array();
tableauTexte[0]= "Mon Premier";
tableauTexte[1]= "Mon Deuxieme";
tableauTexte[2]= "Mon Troisieme";
tableauTexte[3]= "Mon Quatrieme";

const conteneur=document.getElementById("container-fluid");
const contenu=document.getElementById("container");
const blocG=document.getElementById("divGauche");
const blocD=document.getElementById("divDroite");
const tableau=document.getElementById("texteTitre");
// const ligne=document.getElementById("line");
//CREATION DES PARAGRAPHES
var para1=document.createElement("p");
var para2=document.createElement("p");
var para3=document.createElement("p");
var para4=document.createElement("p");
//CREATION DES CLASSES POUR LES PARAGRAPHE
para1.className="paragraphe";
para2.className="paragraphe";
para3.className="paragraphe";
para4.className="paragraphe";
//INSERTION DES TEXTES
var texte1=document.createTextNode("Mon Premier");
var texte2=document.createTextNode("Mon Deuxieme");
var texte3=document.createTextNode("Mon Troisieme");
var texte4=document.createTextNode("Mon Quatrieme");
para1.appendChild(texte1);
para2.appendChild(texte2);
para3.appendChild(texte3);
para4.appendChild(texte4);

tableau.appendChild(para1);
tableau.appendChild(para2);
tableau.appendChild(para3);
tableau.appendChild(para4);

var tableauTexte = new Array();
tableauTexte[0]= para1;
tableauTexte[1]= para2;
tableauTexte[2]= para3;
tableauTexte[3]= para4;


// RECUPERATION BOUTON DE DIRRECTION
const btnG=document.getElementById("directionGauche");
const btnD=document.getElementById("directionDroite");

for (let i = 0; i < tableauTexte.length; i++) {
        tableauTexte[i].addEventListener('click',function(){
            tableauTexte[i].style.backgroundColor="blue";
            tableauTexte[i].style.color="white";
            tableauTexte[i].style.width="60%";
            tableauTexte[i].style.margin="1.5rem";

            btnD.addEventListener("click",function(){
               blocD.appendChild(tableauTexte[i]);
               tableauTexte[i].style='none';
            },false);
            btnG.addEventListener("click",function(){
                blocG.appendChild(tableauTexte[i]);
                tableauTexte[i].style='none';
             });
        },false);
        
        
    }

// for (let i = 0; i < tableauTexte.length; i++) {
//     if (tableauTexte.length!=0) {
//         btnD.toggleAttribute("active");
//     }else{
//         btnD.toggleAttribute("desabled");
//     }

// }
