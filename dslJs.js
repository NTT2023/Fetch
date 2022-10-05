var voitures = {//les données possiblement issues d'une BD et sous forme objet littéral
    "Citroën": ["Traction", "Deux chevaux", "DS", "CX BREAK"],
    "Renault": ["FUEGO", "Alpine", "Kadjar"],
    "Fiat": ["Panda", "Punto", "Typo"]
};


//sous forme de tableau associatif
var cars = new Array();
cars["Citroën"] = ["Traction", "Deux chevaux", "DS", "CX BREAK"];
cars["Renault"] = ["FUEGO", "Alpine", "Kadjar"];
cars["Fiat"] = ["Panda", "Punto", "Typo"];

//tableau de tableau multidimensionnel
var carsNorm = [
    ["Citroën", ["Traction", "Deux chevaux", "DS", "CX BREAK"]],
    ["Renault", ["FUEGO", "Alpine", "Kadjar"]],
    ["Fiat", ["Panda", "Punto", "Typo"]]
];


function traiterReponse(objets) {
    Object.values(objets).forEach((value, index) => console.log('Item ' + index + ' : ' + value));
    Object.entries(objets).forEach((entry_1, key) => console.log('key ' + key + ' : ' + entry_1));
}

function traitertab(tab) {
    //tab.forEach((element, index) => {console.log('ItemTab ' + index + ' : ' + element);});
    // foreach ne fonctionne qu'avec des tableaux non associatif
    for (var key in tab) {
        var value = tab[key];
        console.log(key, value);
    }
}
function traitertabAss(carsNorm) {
    carsNorm.forEach((element, index) => { console.log('ItemTab ' + index + ' : ' + element); });
}
function traiterArbre(js) {
    var arbre = '', nbItems, i;

    for (node in js) {
        arbre += node + "<br>";
        nbItems = js[node].length;

        for (i = 0; i < nbItems; i++) {
            arbre += '<li>' + js[node][i] + '</li>';
        }
        document.getElementById('bloc').innerHTML = arbre;
    }
}


//La fonction (callback) présente dans le script chargé

traitertab(cars);
traitertab(voitures);
traitertabAss(carsNorm);
traiterReponse(cars);
traiterReponse(voitures);
//traiterArbre(voitures);
