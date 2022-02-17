class personne{
    constructor(nom,age,taille){
        this.nom=nom;
        this.age;
        this.isMineur=(this.age<18);
        this.taille=(this.taille=1.68)
    }
    salutation(){
        if (this.isMinneur) {
            alert("Bonjour"+this.nom+"tu as "+this.age+" ans avec une talle de "+this.taille+ " donc tu est mineur.");

            
        }else{
            alert("Bonjour"+this.nom+"tu as "+this.age+" ans avec une talle de "+this.taille+ " donc tu est Majeur.");

        }

    }

}