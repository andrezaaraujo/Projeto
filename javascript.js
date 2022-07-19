let count = 1;

setInterval(function(){
  document.getElementById("img")
 count++
if (count >3){
   count = 1;
}

},3000)
console.log("funcionando")

 let test = document.getElementById("teste");

 test.addEventListener("mouseover", function (event) {
  
  event.target.style.color = "black";
 }, false);

 test.addEventListener("mouseout", function (event) {
  
  event.target.style.color = "green";
 }, false);

function alerta(){
alert("Nenhum cadastro realizado!")
}