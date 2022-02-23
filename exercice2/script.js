// #########################################
// RECUPERATION DES ELEMENTS DU TABLEAU

//1 => Recuperation ddes deux div
const divG = document.getElementById('divGauche');
const divD = document.getElementById('divDroite');
// ***********************************************
//  ***********************************************
//2 => Recuperation ddes deux div
const btnD = document.getElementById('directionDroite');
const btnG = document.getElementById('directionGauche');

// #########################################
//GENERATION DES PARAGRAPHES
//1=> Definition du tableau qui va contenir les paragraphes p .
const tab = ['Mon Premier', 'Mon Deuxieme', 'Mon Troisieme', 'Mon Quatrieme'];
//2=> generation des paragraphes
for (let i = 0; i < tab.length; i++) {
    const para = document.createElement('p');
    para.innerHTML=tab[i];
    para.id='paragraphe';
    divG.appendChild(para); 

    //##############   FONCTION  "####################"

    
    //Selection des paragraphes avec backgraound 

    para.addEventListener('mousemove',function(){
        para.className='survol';
    })

    // Action du bouton droite
    btnD.addEventListener("click", function(){
        if (para.className==='survol') {
            para.parentNode.removeChild(para);
            divD.appendChild(para);
            para.className='';
        }
        test(divD,btnG);
        test(divG,btnD);
    });

   // Action du bouton gauche

    btnG.addEventListener("click",function () {
        if (para.className==='survol') {
            para.parentNode.removeChild(para);
            divG.appendChild(para);
            para.className='';
        }
        test(divG,btnD);
        test(divD,btnG);

    })

}

function test(div, btn){
    if(div.childNodes.length === 0){
        btn.disabled = true;
        // btn.style.backgroundColor='grey';
        // btn.style.color='white';
    }else {
        btn.disabled = false;
        // btn.style.backgroundColor='blue';
    }
}
test(divG,btnD);
test(divD,btnG);

// ############################FIN########################

