const arr = ["java", "python", "c++", "javascript"];
document.getElementById("a1").innerHTML += arr.at(0);
document.getElementById("a1").innerHTML += `<br>` 
document.getElementById("a1").innerHTML += arr.at(-2);
document.getElementById("a1").innerHTML += `<br>`
document.getElementById("a1").innerHTML += arr.at(-3) 
document.getElementById("a1").innerHTML += `<br>`

const str = "ABCD";
document.getElementById("a1").innerHTML += str.at(-1) 
document.getElementById("a1").innerHTML += `<br>`
document.getElementById("a1").innerHTML += str.at(0);