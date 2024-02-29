// 접속 시 기존 목록 불러오기
window.onload = function() {
    loadCrops();
}

const control = document.querySelector('.control');

const click = document.querySelectorAll('.click');

const uiClicked = document.getElementById("ui-clicked");
const diged = document.getElementById("diged");
const watered = document.getElementById("watered");
const firecracker = document.getElementById("firecracker")
const plantcrop = document.getElementById("plantcrop");
const walk = document.getElementById("walk");

const bearlic = document.querySelector('#bearlic');
const sugarcone = document.querySelector('#sugarcone');

let bearlicCroped = 0;
let sugarconeCroped = 0;

const seed = document.querySelector('#seed');
const water = document.querySelector('#water');

let clicked = 0;
let randomPlant = "";

var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);
var dateString = year + '-' + month  + '-' + day;


seed.addEventListener('click', function() {
    console.log("seed clicked!")
    uiClicked.play();
    console.log(clicked);
    if (clicked == 0){
        dropedSeed();
        click[0].className += " none";
        clicked = 0.5;
        setTimeout(function() {
            diged.play();
        }, 100);
        setTimeout(function() {
            click[1].classList.remove("none");
            clicked = 1;
        }, 1000);
    } else {
        return
    }
})

water.addEventListener('click', function(){
    console.log("water clicked!")
    uiClicked.play();
    console.log(clicked);
    if (clicked == 1){
        dropedWater();
        click[1].className += " none";
        clicked = 1.5;
        watered.play();
        setTimeout(function() {
            firecracker.play();
            numCrop();
        }, 3500);
        setTimeout(function() {
            walk.play();
        }, 5500);
        setTimeout(function() {
            plantcrop.play();
        }, 8500);
        setTimeout(function(){
            walk.play();
        }, 10500)
        setTimeout(function() {
            click[0].classList.remove("none");
            clicked = 0;
        }, 13000);
    } else {
        return
    } 
})

function dropedSeed() {
    let img = document.createElement('img');
    let random = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    if (random == 1){
        control.replaceChildren();
        img.src = `./blue_zip/web background/GOM_Seed.png?timestamp=${new Date().getTime()}`;
        img.className = "ground";
        control.appendChild(img);
        randomPlant = "gom";
    } else {
        control.replaceChildren();
        img.src = `./blue_zip/web background/SUG_Seed.png?timestamp=${new Date().getTime()}`;
        img.className = "ground";
        control.appendChild(img);
        randomPlant = "sugarCorn";
    }
}

function dropedWater() {
    let img = document.createElement('img');
    if (randomPlant == "gom"){
        control.replaceChildren();
        img.src = `./blue_zip/web background/GOM_Harvest.png?timestamp=${new Date().getTime()}`;
        img.className = "ground";
        control.appendChild(img);
    } else {
        control.replaceChildren();
        img.src = `./blue_zip/web background/SUG_Harvest.png?timestamp=${new Date().getTime()}`;
        img.className = "ground";
        control.appendChild(img);
    }
}

function numCrop(){
    if (randomPlant == "gom"){
        bearlicCroped += 3;
        localStorage.setItem(dateString + 'bearlic', bearlicCroped);
        bearlic.innerText = String(bearlicCroped).padStart(3, "0");
    } else {
        sugarconeCroped += 3;
        localStorage.setItem(dateString + 'sugarcone', sugarconeCroped);
        sugarcone.innerText = String(sugarconeCroped).padStart(3, "0");
    }
}

function loadCrops(){
    if (localStorage.getItem(dateString + 'bearlic')) {
        bearlicCroped = Number(localStorage.getItem(dateString + 'bearlic'));
        bearlic.innerText = String(bearlicCroped).padStart(3, "0");
    } else {
        bearlicCroped = 0
        bearlic.innerText = String(bearlicCroped).padStart(3, "0");
    }
    if (localStorage.getItem(dateString + 'sugarcone')) {
        sugarconeCroped = Number(localStorage.getItem(dateString + 'sugarcone'));
        sugarcone.innerText = String(sugarconeCroped).padStart(3, "0");
    } else {
        bearlicCroped = 0
        bearlic.innerText = String(bearlicCroped).padStart(3, "0");
    }
}
