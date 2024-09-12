const main = document.querySelector(".cars-search-container");
const h1 = document.createElement("h1");
h1.innerHTML = "exmp";
main.appendChild(h1);
const carr = document.getElementById("cars")

// const btn = document.createElement("button");
// btn.style.backgroundColor = "green";
// btn.innerHTML = "click";
// btn.setAttribute("class", "btnclass");
// main.appendChild(btn);
// btn.addEventListener("click", clickBtn);

// function clickBtn() {
//   alert("work");
// }
// const mutzrim = [
//   {
//     mame: "milck",
//     price: 100,
//   },
//   {
//     name: "schoger",
//     price: 50,
//   },
// ];

// function divv(list) {
//   list.forEach((y) => {
//     const tem = document.createElement("h3");
//     tem.innerHTML = ` the name is ${y.name}`;
//     main.appendChild(tem);
//     const price = document.createElement("h5")
//     price.innerHTML= `the price is ${y.price}`
//     main.appendChild(price)
//   });
// }
// divv(mutzrim);

// const newdiv = document.createElement("div");
// newdiv.innerText ="MouseOut" ;
// newdiv.style.backgroundColor = "orange"
// main.appendChild(newdiv)
// newdiv.addEventListener("mouseenter",chengeText)
// newdiv.addEventListener("mouseout",chengeText2)

// function chengeText(){
//     newdiv.innerText ="mouse in"

// }
// function chengeText2(){
//     newdiv.innerText = "mouse out"
// }
// newdiv.addEventListener("click",chengeBackRand)
// function chengeBackRand(){
//     newdiv.style.backgroundColor= "red"
// }

// const newDiv = document.createElement("div")
// newDiv.innerText="main"
// const btnn = document.
// newDiv.style.color="red"
// newDiv.style.height= "250px";
// newDiv.style.width= "250px";
// newDiv.style.backgroundColor="black"

// main.appendChild(newDiv)
// main.appendChild(btn)
const cars = [
  {
    model: "Toyota Corolla",
    year: 2022,
    color: "White",
  },
  {
    model: "Honda Civic",
    year: 2021,
    color: "Black",
  },
  {
    model: "Ford Mustang",
    year: 2023,
    color: "Red",
  },
  {
    model: "Chevrolet Camaro",
    year: 2020,
    color: "Blue",
  },
  {
    model: "Tesla Model 3",
    year: 2024,
    color: "Silver",
  },
  {
    model: "BMW 3 Series",
    year: 2022,
    color: "Gray",
  },
  {
    model: "Audi A4",
    year: 2021,
    color: "Black",
  },
  {
    model: "Mercedes-Benz C-Class",
    year: 2023,
    color: "White",
  },
  {
    model: "Mazda 6",
    year: 2020,
    color: "Blue",
  },
  {
    model: "Volkswagen Passat",
    year: 2022,
    color: "Red",
  },
  {
    model: "Subaru Impreza",
    year: 2021,
    color: "Green",
  },
  {
    model: "Hyundai Elantra",
    year: 2020,
    color: "Silver",
  },
  {
    model: "Kia Optima",
    year: 202,
  },
];

const table = document.createElement("div");
table.style.height = "250px";
table.style.width = "250px";
main.appendChild(table);

function serchcars() {
  const input = document.getElementById("input").value;
  console.log(input);
  check(input);
}
function check(inp) {
  const newli = cars.filter((car) => car.model.toLowerCase().includes(inp));
  main.innerHTML =""

  newli.forEach((val,idx) => {
    const div = document.createElement("div");
    div.classList.add("item-container")
    const per = document.createElement("p");
    const btn = document.createElement("button")
    btn.textContent = "info"
    // setButtenEvent(btn,idx)
    per.innerText = `${val.model} ${val.color} ${val.year}`;
    // per.innerText += " " + cars.year + " " +cars.color
    div.appendChild(per);
    div.appendChild(btn)
    main.appendChild(div);

  });
}
