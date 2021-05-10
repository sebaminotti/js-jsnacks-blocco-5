



// /* 
// ESERCIZIO N°1:
// Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
//  */


var zucchine = [
{nome:"zucchino nero di milano",
peso:12,
lunghezza:14},


{nome:"zucchino romanesco",
 peso:20,
  lunghezza:35},

{nome:"zucchino ortolano di faenza",
peso:34,
 lunghezza:100},

{nome:"zucchina lungha fiorentina",
peso:50,
lunghezza:110},

{nome:"zucchino siciliano",
peso:20,
lunghezza:110},

{nome:"zucchina striata di napoli",
peso:30,
lunghezza:40},

{nome:"zucchina bianca triestina",
peso:45,
lunghezza:110},

{nome:"zucchina rigata pugliese",
peso:135,
lunghezza:110},

{nome:"zucchino tondo di piacenza",
peso:21,
lunghezza:12},

{nome:"zucchino tondo di nizza",
peso:12,
lunghezza:10},

];

// var pesoComplessivo = 0

// for(var i = 0 ; i < zucchine.length;i++){
 
//     var prodotto = zucchine[i];

//     pesoComplessivo += prodotto.peso;
    

// }
// console.log(pesoComplessivo+"kg" + " questo è il peso di tutte le zucchine nella cassa ");

//soluzione con il for in
var totalePeso = 0
for(var chiave in zucchine){
var pesoZucchine = (totalePeso+=zucchine[chiave].peso)
}
console.log("Il peso delle zucchine è di : "+ "Kg " + pesoZucchine);



console.log("fine esercizio 1");
// //------------------------------------------------------------------------------------------------

 /*
    ESERCIZIO N°2:
    Crea 10 oggetti che rappresentano una zucchina.
    Dividi in due array separati le zucchine che misurano
    meno o più di 15cm.
    Infine stampa separatamente quanto pesano i due gruppi
    di zucchine 
    */
     var zucchineLunghe = [];
     var zucchineCorte = [];




    var zucchini = [
        {nome:"zucchino nero di milano",
        peso:12,
        lunghezza:14},
        
        
        {nome:"zucchino romanesco",
         peso:20,
          lunghezza:35},
        
        {nome:"zucchino ortolano di faenza",
        peso:34,
         lunghezza:10},
        
        {nome:"zucchina lungha fiorentina",
        peso:50,
        lunghezza:110},
        
        {nome:"zucchino siciliano",
        peso:20,
        lunghezza:13},
        
        {nome:"zucchina striata di napoli",
        peso:30,
        lunghezza:40},
        
        {nome:"zucchina bianca triestina",
        peso:45,
        lunghezza:110},
        
        {nome:"zucchina rigata pugliese",
        peso:135,
        lunghezza:14},
        
        {nome:"zucchino tondo di piacenza",
        peso:21,
        lunghezza:12},
        
        {nome:"zucchino tondo di nizza",
        peso:12,
        lunghezza:10},
        
        ];
        for(var i = 0; i < zucchini.length; i++){
        if(zucchini[i]["lunghezza"] < 15){
            zucchineCorte.push(zucchini[i])
        }  else if (zucchini[i]["lunghezza"] > 15){

            zucchineLunghe.push(zucchini[i])
        }
        }

        console.log(zucchineLunghe,zucchineCorte);

        console.log("--------------------------------------------------------------------------------------------");

    var pesoComplessivoCorti = 0

for(var i = 0 ; i < zucchineCorte.length;i++){
 
    var prodottoCorto = zucchineCorte[i];

    pesoComplessivoCorti += prodottoCorto.peso;
    

}
console.log(pesoComplessivoCorti+"kg" + " questo è il peso di tutte le zucchine corte nella cassa ");




console.log("fine sezione zucchine corte------------------------------------------------------------------------");

var pesoComplessivoLunghi = 0

for(var i = 0 ; i < zucchineLunghe.length;i++){
 
    var prodottoLungo = zucchineLunghe[i];

    pesoComplessivoLunghi += prodottoLungo.peso;
    

}
console.log(pesoComplessivoLunghi+"kg" + " questo è il peso di tutte le zucchine lunghe nella cassa ");

console.log("---------------------------------------------------------------------------------------------------------");
console.log("fine esercizio due");


console.log("---------------------------------------------------------------------------- esercizio 3");
/*ESERCIZIO N° 3:
Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC) 
*/


var parola = prompt("inserisci una parola e io la girerò per te")
console.log(parola + " ecco la tua parola leggibile normalmente");

var parolaGirata = giraParola(parola)

console.log(parolaGirata + " ecco la tua parola girata");

if(parola == parolaGirata){
    alert("è una palindroma")
}  else if (parola != parolaGirata ){
     alert("parola non palindroma")
}

// genero una funzione che inverta e mi restituisca la mia parola
function giraParola(parola) {
    
    return parola.split("").reverse().join("");
}

console.log("fine esercizio 3--------------------------------------------------------------------------------------------");


console.log("esercizio 4-------------------------------------------------------------------------------");


 
     /* 
    ESERCIZIO N° 4:
    Scrivi una funzione che fonda due array (aventi lo stesso
    numero di elementi) prendendo alternativamente gli
    elementi da uno e dall’altro
    es. [a,b,c], [1,2,3] + [a,1,b,2,c,3]. 
    */
     //creo una funzione che fonda i miei arrey
      function arrayUniti(a1,a2,a3) {
          for(var i = 0; i < a1.length;i++){
              a3.push(a1[i]);
              a3.push(a2[i])
          }
      }

    var lettere = [ "a","b","c","d","e","f","g","h","i","l","m","n","o","p","q","r","s","t","u","v","z"]
    console.log(lettere);
    var numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    console.log(numeri);
    var alfabeto = [];
     

    arrayUniti(lettere,numeri,alfabeto)

    console.log(alfabeto);
    
    console.log("----------------fine esercizio 4------------------------------------------------------");


    console.log("esercizio 5 e ultimo ------------------------------------");




       /* 
    ESERCIZIO N° 5:
    Scrivi una funzione che accetti tre argomenti:
    un array e due numeri (“a” più piccolo di “b” e “b” grande al
    massimo quanto il numero di elementi dell’array).
    La funzione ritornerà un nuovo array con i valori che
    hanno la posizione compresa tra “a” e “b”
    */
    
//  il 5 non rieso a faerlo
     
    



    