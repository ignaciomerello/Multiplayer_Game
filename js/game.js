const CambiaPantalla = (valor) => {
    
    //Ahora se a que pantalla quiero dirigirme al concatenar fase + valor que viene
    //por parámetro.
    let faseDestino = "fase" + valor;
    
    //A continuación creo un array con todas fases.
    let arrayFases = ["fase1","fase2","fase3","fase4","fase5"];
    
    //El siguiente paso es incluir en arrayfases, todas las fases MENOS la de destino, para ello usamos
    //filter.
    arrayFases = arrayFases.filter(val => !faseDestino.includes(val));
    
    //Primero habilitamos la fase a la que queremos ir
    
    document.getElementById(faseDestino).style.display = "flex";
    
    //Finalmente deshabilitamos el resto
    
    for(let pantalla of arrayFases){
        document.getElementById(pantalla).style.display = "none";
    }
}


const rosterGoodFighters = document.getElementById("goodRoster");
const rosterEvilFighters = document.getElementById("evilRoster");
const player1Selected = document.getElementById("goodGuys");
const player2Selected = document.getElementById("badGuys");


class Fighter{
    constructor(name,strenght,resistencia,life,image){
        this.name = name;
        this.strenght = strenght;
        this.resistencia = resistencia;
        this.life = life;
        this.image = image;
    }
    
    recibirDaño = (damage) =>{
        this.life -= damage;
    }
}


const superman = new Fighter("Superman", 50, 125, 100, "./images/superman.png");
const docManhattan = new Fighter("Dr Mantahhan", 99, 200, 100, "./images/drManhattan.png");
const batman = new Fighter("Batman", 10, 50, 100, "./images/batman.png");
const theFlash = new Fighter("The Flash", 25, 50, 100, "./images/theFlash.png");
const coolGirl = new Fighter("Hipster Girl", 30, 30, 100, "./images/hipsterGirl.png");
const freak = new Fighter("Freak Guy", 20, 20, 100, "./images/hipsterBoy.png");
const sheep = new Fighter("Sheep", 0, 0, 100, "./images/sheep.png");
const covid = new Fighter("COVID-19", 1000, 1000, 100, "./images/covid19.png");
const blackAdam = new Fighter("Black Adam", 50, 125, 100, "./images/blackAdam.png");
const shazham = new Fighter("Shazam", 50, 125, 100, "./images/shazam.png");


const goodFighters = [superman,coolGirl,batman,theFlash,shazham];
const evilFighters = [covid,docManhattan,sheep,freak,blackAdam];

let selectedFighters = [];
const maxFighters = 1;

let fighter1;
let fighter2;
let goodPlayers = "";
let evilPlayers = "";

//GOOD PLAYERS VIEW 2 - CHOOSING A PLAYER

const displayGoodPlayers = () =>{
    for (let fighter in goodFighters) {
        goodPlayers += `<div class="card" onclick="selectGoodPlayer(${fighter})
        "id="fighter${fighter}" style="background-image: url('${goodFighters[fighter].image}');">
        <div class="text">Name: ${
            goodFighters[fighter].name
        } </div> <div class="text">Resistency: ${
            goodFighters[fighter].resistencia
        }</div> <div class="text">Strenght: ${
            goodFighters[fighter].strenght
        }</div> <div class="text">Life: ${goodFighters[fighter].life}</div> </div>`;
      }
      rosterGoodFighters.innerHTML = goodPlayers;
    };

displayGoodPlayers();  

let goodGuys = document.getElementById("goodGuys");

// const selectGoodPlayer = () => {
//     let displayGoodPlayer = "";
//     for (let character of selectedFighters) {
//         displayGoodPlayer += `<div class="card" onclick="selectGoodPlayer(${fighter})"id="fighter${fighter}" style="background-image: url('${goodFighters[fighter].image}');">  <div class="text">Name: ${
//             goodFighters[fighter].name
//         } </div> <div class="text">Resistency: ${
//             goodFighters[fighter].resistencia
//         }</div> <div class="text">Strenght: ${
//             goodFighters[fighter].strenght
//         }</div> <div class="text">Life: ${goodFighters[fighter].life}</div> </div>`
    
//     }
//     player1Selected.innerHTML = displayGoodPlayer;
//   };


// Esta debería recorrer el array de seleccionados y pintar el seleccionado en el HTML, pero no funciona...




const selectGoodPlayer = () => {
    let selectedPlayer = "";
    for (let player of goodFighters) {
        selectedPlayer += `<div class="card" style="background-image: url('${player.image}');"> <div class="text">Name: ${player.name} </div>`;
    }

    player1Selected.innerHTML = selectedPlayer;
  };
  

/*
ONCLICK FUNCTION IN ORDER TO SELECT THE PLAYER 1 -> NOT WORKING
*/





//   const selectGoodPlayer = (pos) => {
//     // Solo seleccionamos mientras no superemos el limite
//     if (selectedFighters.length < maxFighters) {
//         selectedFighters.push(goodFighters[parseInt(pos)]);
  
//       //Como ya lo tenemos seleccionado, no queremos que se vuelva a seleccionar
//       document.getElementById("card" + pos).style.pointerEvents = "none";
//       document.getElementById("card" + pos).style.backgroundColor = "grey";
  
//       displayGoodPlayers();
  
//     }
//   };
  
//   const asignToFight = () => {
//     if (selectedFighters[0]) {
//         fighter1 = selectedFighters[0];
//     }
  
//     if (selectedFighters[1]) {
//         fighter2 = selectedFighters[1];
//     }
//   };

  /*
  ESTILO PARA APLICARLE AL BOX DEL PLAYER SELECCIONADO


    background-image: url(/images/blackAdam.png);
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  
  
  */

//EVIL PLAYERS VIEW 3 - CHOOSING AN OPPONENT PLAYER
let badGuys = document.getElementById("badGuys");

    const displayEvilPlayers = () =>{
        for (let fighter in evilFighters) {
            evilPlayers += `<div class="card" id="fighter${fighter}" style="background-image: url('${evilFighters[fighter].image}');">  <div class="text">Name: ${
                evilFighters[fighter].name
            } </div> <div class="text">Resistency: ${
                evilFighters[fighter].resistencia
            }</div> <div class="text">Strenght: ${
                evilFighters[fighter].strenght
            }</div> <div class="text">Life: ${evilFighters[fighter].life}</div> </div>`;
          }
          rosterEvilFighters.innerHTML = evilPlayers;
        };





    const displayEvilPlayer = () => {
        let selectedPlayer = "";
        for (let player of evilFighters) {
            selectedPlayer += `<div class="card" style="background-image: url('${player.image}');"> <div class="text">Name: ${player.name} </div>`;
        }
    
        player2Selected.innerHTML = selectedPlayer;
      };

    displayEvilPlayers();

//SPLICE PARA SACAR EL FIGHTER DEL ARRAY

const Atacar = () => {
    goodFighters[0].recibirDaño(evilFighters[3].strenght);
    console.log(goodFighters[0].life);
}


// console.log(superman.life);

// console.log(docManhattan.life);






