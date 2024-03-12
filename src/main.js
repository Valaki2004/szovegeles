var mondat = "kacsa és liba és tyúk és kakas"
var result = mondat.indexOf("liba")
var res1 = mondat.lastIndexOf("para")
var res2 = mondat.lastIndexOf("és")
var res3 = mondat.substring(3, 20)

console.log(result)
console.log(res1)
console.log(res2)
console.log(res3)

var szoveg = "banán, banán, alma";
function Cut(str) {
    return str.substring(str.indexOf(', ')+1,
    str.lastIndexOf(", "));
}
console.log(Cut("szoveg"));
