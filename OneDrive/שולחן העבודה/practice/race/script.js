const MEINDIV = document.getElementById("meinDiv")
const TOP = document.getElementById("top");
const INPUT = document.getElementById("input")
const BUTTON = document.getElementById("btn")
const secendDiv = document.getElementById("secend")
const endLine = 1300

BUTTON.addEventListener("click",()=>startRace())

let allCars = [
    {
        imageSrc: "./images/images/car1.png",
        postion : 0
    },
    {
        imageSrc: "./images/images/car2.png",
        postion : 0
    },
    {
        imageSrc: "./images/images/car3.png",
        postion : 0
    },
    {
        imageSrc: "./images/images/car4.png",
        postion : 0
    }
]

function startRace (){
    if (INPUT.value > 4 || INPUT.value < 2){
        alert("אנא הכנס בין 2 ל4 מכוניות ")
        INPUT.value = ""
        return
    }
    secendDiv.innerText =""

    for( let i=0;i < INPUT.value ; i++ ){
     addrew(i)
     startRacing(i)


    }
    
    
}
function addrew(i){
    const row = document.createElement("div")
    let numberCar = i+1
    row.classList.add("rows")
    // row.innerText= "car"+ numberCar
    const img = document.createElement("img")
    img.classList.add("img")
    img.src = allCars[i].imageSrc
    img.id =`car${i}`
    const redline = document.createElement("div")
    redline.classList.add("redline")
    row.appendChild(img)
    row.appendChild(redline)
    secendDiv.appendChild(row)
    MEINDIV.appendChild(secendDiv)
    let carElements = document.querySelectorAll(".img"); 
    


}

function startRacing(i){


    let time = 0;
    let pp = 0;
    let contr = 0
    const car = document.getElementById(`car${i}`)
   const inter =  setInterval(()=>{
        let position  = Math.floor(Math.random()*5)
        pp += position
        car.style.left = pp + "px";
        time += 0.025
        allCars[i] = car 
        
        if (pp >= endLine)
            {
                console.log(`car ${car} has finished! `);
                const score = document.createElement("div");
                score.classList.add(`car${i}`)
                console.log(contr)
                score.innerText = `${car.id} has finished in ${time} sec`;
                secendDiv.appendChild(score);
                contr+=1
                clearInterval(inter);
         }
    },20)
 
}


