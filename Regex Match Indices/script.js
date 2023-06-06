const fruits = "Fruits: apple, banana, orange";
const languages = "Languages: Java, Python, C++";
const regex = /(banana)/dg;
const reg = /(Python)/dg;

const matchObj = regex.exec(fruits);
const matchLang = reg.exec(languages)
document.getElementById("a1").innerHTML += matchObj[0];
document.getElementById("a1").innerHTML += `<br>` 
document.getElementById("a1").innerHTML += matchObj.index;
document.getElementById("a1").innerHTML += `<br>`
document.getElementById("a1").innerHTML += matchObj.indices[1]
document.getElementById("a1").innerHTML += `<br>`
document.getElementById("a1").innerHTML += matchLang[0]
document.getElementById("a1").innerHTML += `<br>` 
document.getElementById("a1").innerHTML += matchLang.index
document.getElementById("a1").innerHTML += `<br>`
document.getElementById("a1").innerHTML += matchLang.indices[1]