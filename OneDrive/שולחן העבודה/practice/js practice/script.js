function q2 (string){
  let openConter = 0
  let closeConter =0
    const newArry = string.split("")
    newArry.forEach(val=>{
        if (val ==="{"){
            openConter +=1
        }
        if(val ==="}"){
            closeConter += 1
        }
            
    }

)
const ret =  openConter === closeConter;
console.log(ret)
}
q2("gh{jk}l}{{")


