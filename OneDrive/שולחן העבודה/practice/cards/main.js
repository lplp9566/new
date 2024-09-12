// import { users } from "./data.js"
 const users = [
    { email: "1@1", password: "1" },
    { email: "user2@example.com", password: "password2" },
    
]
const submit = document.getElementById("btn")
const email = document.querySelector(".inputEmail")
const password = document.querySelector(".inputPassword")
const from = document.getElementById("from")
const body = document.getElementById("body")
const section = document.getElementById("cords")

// const mainContainer = querySelector(".main-container")
from.addEventListener("submit",(event)=>{
  event.preventDefault() 
    checkUser()
})


function  checkUser(event){
  let user =users.find((element)=>element.email===email.value && element.password === password.value)
  if(user){
    console.log("find")
    from.style.display ="none"
    section.style.display ="flex"

  }
  else{
    console.log("not find")
  }
}
