
// let firstValue = parseInt(document.getElementById("firstValue").value);
// let operator = prompt( "Quelle est l'opérateur'?" );
// let secondValue = prompt( "Quelle est la 2eme valeur?" );

// switch (operator) {
//     case "+":
//     console.log(parseInt(firstValue) + parseInt(secondValue));
//     break;     
//     case "-":
//     console.log(parseInt(firstValue) - parseInt(secondValue)); 
//     break;    
//     case "*":
//     console.log(parseInt(firstValue) * parseInt(secondValue)); 
//     break;   
//     case "/":
//     console.log(parseInt(firstValue) / parseInt(secondValue)); 
//     break;
//     default:
//         console.log("invalid operator");
// }

let myButton = document.getElementById("calculate");

/*
* myButton.addEventListener("click", (e) => {jecrisdestrucs})
*
* function something(e) {jecrisdes trucs } puis ca finis en 
* myButton.addEventListener("click", something)
*/

function operation(firstValue, operator, secondValue) {
    let resultat = 0;

    switch (operator) {
        case "+":
            resultat = firstValue + secondValue;
            break;     
        case "-":
            resultat = firstValue - secondValue;
            break;    
        case "*":
            resultat = firstValue * secondValue;
            break;   
        case "/":
            if(secondValue === 0) {
                resultat = NaN;
            } else {
                resultat = firstValue / secondValue;
            } 
            break;
    }
    
    return resultat;
    
};

myButton.addEventListener("click", (e) => {

    let firstValue = parseInt(document.getElementById("firstValue").value);
    let secondValue = parseInt(document.getElementById("secondValue").value);
    let operator = document.getElementById("operator").value;
    let result = document.getElementById("result");

    let resultat = 0;
    
    resultat = operation(firstValue, operator, secondValue);
    
    if(isNaN(resultat)) {
        result.innerHTML = "Opération incorrecte"
    } else {
        result.innerHTML = `Le résultat est : ${resultat}.`;
    }
        
});