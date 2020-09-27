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


const goku = new Fighter("superman", 25, 50, 100, "../images/superman.png");
const superman = new Fighter("Hipster Girl", 50, 125, 100, "../images/hipsterGirl.png");
const docManhattan = new Fighter("Dr Mantahhan", 99, 200, 100, "../images/drManhattan.png");
const enki = new Fighter("Enki", 10, 50, 100, "../images/superman.png");
const freak = new Fighter("Freak Guy", 200, 300, 100, "../images/superman.png");
const sheep = new Fighter("Sheep", 0, 0, 100, "../images/superman.png");
const covid = new Fighter("COVID-19", 1000, 1000, 100, "../images/superman.png");


const goodFighters = [goku,superman,docManhattan,enki,freak,sheep];
const evilFighters = [goku,superman,docManhattan,enki,freak,sheep];

let selectedFighters = [];
const maxFighters = 2;

let fighter1;
let fighter2;
let players = "";

//GOOD PLAYERS VIEW 2 - CHOOSING A PLAYER

const displayGoodPlayers = () =>{
    for (let fighter in goodFighters) {
        players += `<div class="card" onclick="selectGoodPlayer(${fighter})"id="fighter${fighter}" style="background-image: url('${goodFighters[fighter].image}');">  <div class="text">Name: ${
            goodFighters[fighter].name
        } </div> <div class="text">Resistency: ${
            goodFighters[fighter].resistencia
        }</div> <div class="text">Strenght: ${
            goodFighters[fighter].strenght
        }</div> <div class="text">Life: ${goodFighters[fighter].life}</div> </div>`;
      }
      rosterGoodFighters.innerHTML = players;
    };
let goodGuys = document.getElementById("goodGuys");

const selectGoodPlayer = () => {
    let displayGoodPlayer = "";
    for (let character of selectedFighters) {
        displayGoodPlayer += `<div class="card" onclick="selectGoodPlayer(${fighter})"id="fighter${fighter}" style="background-image: url('${goodFighters[fighter].image}');">  <div class="text">Name: ${
            goodFighters[fighter].name
        } </div> <div class="text">Resistency: ${
            goodFighters[fighter].resistencia
        }</div> <div class="text">Strenght: ${
            goodFighters[fighter].strenght
        }</div> <div class="text">Life: ${goodFighters[fighter].life}</div> </div>`
    
    }
    player1Selected.innerHTML = displayGoodPlayer;
  };

//EVIL PLAYERS VIEW 3 - CHOOSING AN OPPONENT PLAYER

    const displayEvilPlayers = () =>{
        for (let fighter in evilFighters) {
            players += `<div class="card" id="fighter${fighter}" style="background-image: url('${evilFighters[fighter].image}');">  <div class="text">Name: ${
                evilFighters[fighter].name
            } </div> <div class="text">Resistency: ${
                evilFighters[fighter].resistencia
            }</div> <div class="text">Strenght: ${
                evilFighters[fighter].strenght
            }</div> <div class="text">Life: ${evilFighters[fighter].life}</div> </div>`;
          }
          rosterEvilFighters.innerHTML = players;
        };


    // fighters.forEach(fighter => {
    //     players += `<div class="card" id="fighter${fighter}" style="background-image=url("${fighters.fighter.img}")">
    //     <div> Name: ${fighters.fighter.name}</di>
    //     </div>` 
    // });
    // rosterFighters.innerHTML = players;

    displayGoodPlayers();
    displayEvilPlayers();

//SPLICE PARA SACAR EL FIGHTER DEL ARRAY


console.log(goku);

console.log(superman.life);

console.log(docManhattan.life);


const Atacar = () => {
    fighters[0].recibirDaño(fighters[1].strenght);
    console.log(fighters[0].life);
}




