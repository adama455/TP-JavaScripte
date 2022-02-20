// function addNew() {
//     elem=document.createElement("div");
//     elem.className="autreGroupe";
//     act=document.createElement("div");
//     act.className="actionIcons";
//     elem.appendChild(act);
//     note=document.createElement("textarea");
//     note.className="noteSaisie";
//     elem.appendChild(note);
//     document.getElementById("container").appendChild(elem);
    
// }

const add=document.getElementById("addNote");
const cont=document.getElementById("contenu");

add.addEventListener("click",function () {

        var elem=document.createElement("div");
        elem.className="Groupe";
        
        var act=document.createElement("div");
        act.className="actionIcons";
        
        //  creation Icone Edite
        var iconEdit=document.createElement("i");
        iconEdit.className="fa-solid fa-pen-to-square";
        iconEdit.style.fontSize='25px';
        iconEdit.style.color='white';
        
        //creation Icone Corbeille 
        var iconCorblle=document.createElement("i");
        iconCorblle.className="far fa-trash-alt";
        iconCorblle.style.color='white';
        iconCorblle.style.fontSize='25px';

        
        
        // creation textarea
        var note=document.createElement("textarea");
        note.cols = 50;
		note.rows = 25;
        note.className="noteSaisie";
        
        
        cont.appendChild(elem);
        elem.appendChild(act);
        elem.appendChild(note);
        act.appendChild(iconEdit);
        act.appendChild(iconCorblle);
        
        iconCorblle.addEventListener("click",function (){
            iconCorblle.parentNode.parentNode.remove(elem);
            
        });
        
        iconEdit.addEventListener("click",function () {
            note.toggleAttribute("disabled");
        });
    });
    

//     // Delete
//     i.fa-trash-alt.addEventListener("click",
//         function(){
//             contenu.Groupe.remove();
//         },false );


// // Edite
// i.fa-solid.addEventListener("click",
//     function(){
//         Groupe.note.toggleAttribute="disabled";   
//     },false);


