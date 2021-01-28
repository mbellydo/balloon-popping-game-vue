let explotado = 0
let globos = document.querySelectorAll('div.balloon')
let totalGlobos = globos.length

let contar = document.querySelector('h1');
contar.insertAdjacentHTML('afterend', '<h2 id="contador"></h2>');

globos.forEach((globo) => {
    globo.addEventListener('mouseover', explotarGlobo)
})

function explotarGlobo(event){
    event.target.style.cursor = 'pointer';
    event.target.style.backgroundColor = "#ededed";
    event.target.textContent = "POP!";
    explotado++;
    
    event.target.removeEventListener("mouseover", explotarGlobo);
    revisarJuego();

    document.querySelector('#contador').innerHTML = "Globos explotados: " + explotado;
}

function revisarJuego(){
    if(explotado != totalGlobos){
        console.log("Globos explotados: ", explotado)
        return
    }

    let galeria = document.querySelector('#balloon-gallery');
    let mensaje = document.querySelector('#yay-no-balloons');
    
    galeria.style.display = 'none';
    mensaje.style.display = 'block';
    mensaje.insertAdjacentHTML('afterend', '<input type="reset" id="restart">');
    
    document.querySelector("#restart").addEventListener("click", resetGame);
}

function resetGame() {
    document.querySelector('#balloon-gallery').style.display = 'block';
    document.querySelector('#yay-no-balloons').style.display = 'none';
    document.querySelector('#restart').style.display = 'none';

    let globo = document.querySelectorAll(".balloon");
    
    //explotado = 0;

    globos.forEach((globo) => {
        hincharGlobo(globo);
    })
}

globos.forEach((globo) => {
    globo.addEventListener('dblclick', inflar)
})

function hincharGlobo(globo) { 
    globo.innerHTML='';
    globo.style.backgroundColor = "";
    globo.addEventListener('mouseover', explotarGlobo);
    explotado--;
    document.querySelector('#contador').innerHTML = "Globos explotados: " + explotado; 
}

function inflar(e) {
    hincharGlobo(e.target);
}