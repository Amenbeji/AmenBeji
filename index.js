var savea=document.getElementById("savea")
var counta = document.getElementById("counta")
var h1=document.getElementById("h1")
var count = 0



function button() {
    count++
   setTimeout(function(){
    h1.style.backgroundColor = "white";
   },100)

   h1.style.backgroundColor = "green"; 
    counta.textContent = count
  
}

function save(){
   count=0
   h1.style.backgroundColor = "white"
   counta.textContent=count 
    savea.style.backgroundColor = "red"
    savea.textContent = "the passenger has departured"

}
function profit(){
    var result = count * 10 + "$"
    savea.textContent = result
    savea.style.backgroundColor = "black"
}