//RECUPERATION DES ELEMENTS
// const affichePwdEtCp=document.getElementById("passEtCopie");

const longPwd=document.getElementById("saisieCritre1");
const saisie2=document.getElementById("saisieCritre2");
const saisie3=document.getElementById("saisieCritre3");
const saisie4=document.getElementById("saisieCritre4");
const saisie5=document.getElementById("saisieCritre5");

const affichePwd=document.getElementById("affichePassword");
const copi=document.getElementById("copie");
const btnGenerer= document.getElementById("btnGeneration");

var lettre = "abcdefghijklmnopqrstuvwxyz";
var nombre="0123456789";
var caracteres="!:;,%*$£)=+}]ùµ^\`|-([{'#/~&";

var tabMiniscul= lettre.split('');
var tabMajuscul= lettre.toUpperCase().split('');
var tabNombre= nombre.split('');
var tabCaracteres=caracteres.split('');


function estCocher(idInput){
    idInput = document.getElementById(idInput);
    return idInput.checked;
}

function taDeRetour(idInput,tabChar){
    tabData=[];
    if (estCocher(idInput)) {

        tabData=tabChar;
    }
    return tabData;
}

function generateurMdp (){
    var trousseau=[];

    const Tab1=taDeRetour("saisieCritre2",tabMajuscul);
    const Tab2=taDeRetour("saisieCritre3",tabMiniscul);
    const Tab3=taDeRetour("saisieCritre4",tabNombre);
    const Tab4=taDeRetour("saisieCritre5",tabCaracteres);
    trousseau=trousseau.concat(Tab1,Tab2,Tab3,Tab4);

    if (trousseau.length===0) {
        affichePwd.innerText="veilles coher un critere svp!!";
        affichePwd.setAttribute("class","affichePassword couleurErreur");
        setTimeout(()=>{
            affichePwd.setAttribute("class","affichePassword");
        },2000);
        return;
    }
    if (!longPwd.value) {
        alert("veiller definir la taille!!");
        
    }else{
        let mdpGenerer='';
        for (let i = 0; i < longPwd.value; i++) {
            let pos = Math.floor(Math.random()*trousseau.length);
            mdpGenerer+=trousseau[pos];            
        }
        //AFFICHAGE DU Mdp GENERER AU NIVEAU DU INPUT
        affichePwd.value=mdpGenerer;
        //COPY DU MOT DE PASSE GENERER
        copi.setAttribute('class','copie');
        copi.addEventListener('click',()=>{
            affichePwd.select();
            document.execCommand('copy');
        });

    }
    
}

btnGenerer.addEventListener('click',generateurMdp);


    

