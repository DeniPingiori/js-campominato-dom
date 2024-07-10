//funzione che genera i num (le bombe) casuali
function generateRandomNumbers(max){
    return Math.floor(Math.random() * max + 1);
}

//funzione che mi genera array bombe, creiamo e restituiamo un array
function generateBombsList(nums, NUM_OF_BOMBS) {
    //devo restituire un array
    let bombList = [];

   
    //for(let i=0; i<NUM_OF_BOMBS; i++) {
         //variabile di controllo per terminare ciclo while interno
        let check_num = false;

        //verifico se il num generato randomicamente è presente in lista
        //se è presente non faccio nulla
        //altrimenti lo inserisco nell'array
        //quando l'array raggiunge i 16 elementi mi fermo
        while(bombList.length < NUM_OF_BOMBS){
            //genero num random
            let num = generateRandomNumbers(nums);

            //controllo se il num è presente nell'array delle bombe
            if(bombList.includes(num) === false) {
                //se non è presente lo pusho all'interno 
                bombList.push(num);
                check_num = true;
            }
        }
        return bombList;
    }
//}

//funzione crea casella della griglia
function createSingleSquare(num){
    //creo quadrato come div
    const square = document.createElement('div');

    //aggiungo classe square al div
    square.classList.add('square');

    //determino la width e la height del quadrato 
    let sideLenght = `calc(100% ${sideNumber})`;
    square.style.width = sideLenght;
    square.style.height = sideLenght;

    //aggiungo numero all'interno del div
    square.innerText = num + 1;

    //aggiungo l'evento click al quadrato
    square.addEventListener('click', function(){

        //mostro in console il num della casella cliccata
        this.classList.add('clicked');

        //mostro in console il num della casella cliccata
        console.log(this.innerText); //parola chiave this per chiamare il pulsante
    });

    //restituisco il quadrato
    return square;
}

//richiamo il pulsante dal DOM
const button = document.getElementById('play');

//evento click
button.addEventListener('click', function(){
    //console.log('cominciamo la partita');

    //recupero elem che dovrà contenere la griglia dal dom
    const grid = document.getElementById('grid');

    //ciclo x creare le 100 caselle
    for(let i = 0; i<100; i++ ) {
        //chiamo la funzione x creare le caselle passandole come indice attuale x scriverci dentro
        let item = createSingleSquare(i)

        //appendo la griglia
        grid.append(item);
    }
});

//funzione che genera nuova partita 
function createNewGame(){

    
    //variabile punteggio partita
    let points = 0;
    //variabile che stabilisce che la partita è finita
    let gameOver = false;
    //definizione cost che mi indica il num di bombe dell'array
    const NUM_OF_BOMBS = 16; 

     //svuoto la griglia da tutti i suoi elementi interni
      grid.innerHTML = ' ';

    //genero le bombe e le inserisco nell'array preposto al contenimento delle bombe
    const bombs = generateBombsList(100, NUM_OF_BOMBS);

    //FUNZIONE CHE GENERA CASELLE
    generateGrid(100,10);

}