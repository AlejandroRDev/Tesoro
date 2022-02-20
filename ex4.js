// primer paso pillo los elementos del html necesarios en javascript.

const table$$ = document.querySelector('[data-function="board"]');
const attempts$$ = document.querySelector('[data-function="attempts"]');

//selecciono las imagenes de la carpeta public 
//que voy a necesitar en mi proyecto

const xImg = "./public/exercise-4/x.png";
const skullImg = "./public/exercise-4/skull.png";
const chestImg = "./public/exercise-4/chest.png";

// hacemos una variable donde ponemos el tesoro, que va a ser un objeto con dos valores.

let chestCoord = { x: 0, y: 0};

//vamos a crear el mapa del
const createMap = () => {
    const rows = prompt('Introduce el numero de filas');
    const cols = prompt('Introduce el numero de columnas');
    randomChestCoord(rows, cols);
//hacemos un bucle para crear filas de la tabla. que me cree tantas rows como rows aya
    for (let i = 0; i < rows; i++) {
        const tr$$ = document.createElement('tr');
        //las columnas !!! que me cree tantas cols cuantas veces aya.
        for (let j = 0; j < cols; j++) {
          const td$$ = document.createElement('td');
          
          const img$$ = document.createElement('img');
          //seteo el atributo de la imagen src.
          img$$.setAttribute('src', xImg);

          //aqui iria la funcionalidad de si has clickado ene l elemento correcto.
          td$$.addEventListener('click',function () {
              checkClick(img$$, i, j);
          })
            //a las cols le inyecto las XIMG
          td$$.appendChild(img$$);
          //a las filas le inyecto las columnas.
          tr$$.appendChild(td$$);
        
        }
        //inyecto todas las filas a la tabla
        table$$.appendChild(tr$$);
    }
};

const checkClick = (img$$, i, j) => {
    attempts$$.textContent = Number(attempts$$.textContent) + 1;
    //aora le decimos bajo que condicion.
    if(chestCoord.x === i && chestCoord.y === j){
        //le cambias el atributo para cambiar la imagen por el cofre en cuanto aciertas.
        attempts$$.textContent = "Has ganado el juego";
        img$$.setAttribute('src',chestImg);
        
   //y si no aciertas:
    } else {
        img$$.setAttribute('src',skullImg);
    }
}
//creamos la funcion del chest y la introducimos en la del mapa mediante callback
const randomChestCoord = (maxRows, maxCols) => {
    chestCoord.x = Math.floor(Math.random()* maxRows)
    chestCoord.y = Math.floor(Math.random()* maxCols)
}
//ejecuto el mapa
createMap();