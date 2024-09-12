// import { users } from "./data.js"
const users = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" },
    
]
const submit = document.getElementById("btn")
const email = document.querySelector(".inputEmail")
const password = document.querySelector(".inputPassword")
const form = document.getElementById("form") 
submit.addEventListener("click",()=>{
    checkUser()
})

function  checkUser(){
  let user =users.find((element)=>element.email==email && element.password ==password)
  if(user){
    console.log("find")
  }
  else{
    console.log("not find")
  }
}

