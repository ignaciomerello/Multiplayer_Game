# Multiplayer Game

## In this repository you will find a Battle Game.


<dl>
  <dt>The languages used to develop de code has been:</dt>
  <dd>* HTML</dd>
  <dd>* CSS</dd>
  <dd>* JavaScript</dd>
</dl>


The game allows you to choose diferent players in order to fight until the life of one

of them resolves into "0".


### Here you can see the code used to display the Objects from an "Array" declared from the "Class" Fighters:

```javascript
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
    
    displayEvilPlayers();

```

### Here you can see some captures from the game:

#### Main View
![alt text](../Multiplayer_Game/images/Main_View.png "Main View")

#### Choosing Player 1 View
![alt text](../Multiplayer_Game/images/Choosing_Player_1_View.png "Main View")

#### Choosing Player 2 View
![alt text](../Multiplayer_Game/images/Choosing_Player_2_View.png "Main View")
