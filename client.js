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
    sendData();
}

function numCrop(){
    if (randomPlant == "gom"){
        bearlicCroped += 3;
        bearlic.innerText = String(bearlicCroped).padStart(3, "0");
    } else {
        sugarconeCroped += 3;
        sugarcone.innerText = String(sugarconeCroped).padStart(3, "0")
    }
}

function sendData() {
    fetch('/dataConnect', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ randomPlant: randomPlant })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}


/* mysql 실행문

-- Active: 1709045267400@@127.0.0.1@3306@harvested_crop
CREATE TABLE daily_harvested(  
    date DATE NOT NULL PRIMARY KEY DEFAULT (CURRENT_DATE),
    bearlic int DEFAULT 0,
    sugarcone int DEFAULT 0
);

INSERT INTO daily_harvested (date, bearlic) 
VALUES (CURDATE(), 3) 
ON DUPLICATE KEY UPDATE bearlic=bearlic+3;

INSERT INTO daily_harvested (date, sugarcone) 
VALUES (CURDATE(), 3) 
ON DUPLICATE KEY UPDATE sugarcone=sugarcone+3;

*/
