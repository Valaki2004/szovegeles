var szam = document.querySelector("#num")
var matek = document.querySelector("#num")

document.getElementById("button").addEventListener("click", () => {
    var szam = Number(document.getElementById("num").value)
    var matek = document.getElementById("num").value
    console.log(typeof szam)
    console.log(typeof matek)
})
if(szam <= 1){
    console.log("Jó")
}
else{
    console.log("Nem jó")
}









