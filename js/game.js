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


class Fighter{
    constructor(name,strenght,life){
        this.name = name;
        this.strenght = strenght;
        this.life = life;
    }

    recibirDaño = (dmg) =>{
        this.life -= dmg;
    }
}

const goku = new Fighter("Goku", 25, 100);
const superman = new Fighter("Superman", 50, 125);
const docManhattan = new Fighter("Dr Mantahhan", 99, 200);
const enki = new Fighter("Enki", 10, 50);
const freak = new Fighter("Freak Guy", 200, 300);
const sheep = new Fighter("Sheep", 0, 0);
// const covid = new Fighter("COVID-19", 1000, 1000);


const fighters = [goku,superman,docManhattan,enki,freak,sheep];

console.log(goku.life);

console.log(superman.life);

console.log(docManhattan.life);


const Atacar = () => {
    fighters[0].recibirDaño(fighters[1].strenght);
    console.log(fighters[0].life);
}




