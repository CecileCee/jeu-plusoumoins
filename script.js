var nbUserEntre = document.getElementById('inputUser');
var btn = document.getElementById('inputButton');

var comparaison = function() {
    var count = 1;
    var nbHasard = Math.floor(Math.random()*(100 - 1 + 1)) + 1;
    var nbUser = parseInt(nbUserEntre.value);
    console.log(nbHasard);
    console.log(nbUser);
    
    
//    while(count < 8) {
        if (nbUser < nbHasard) {
            console.log("Petit");
        } else if (nbUser > nbHasard) {
            console.log("Grand");
        } else {
            console.log("Error");
        }
//    }
};

btn.addEventListener('click', comparaison);