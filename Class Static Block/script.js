class Vehicle {
    static defaultColor = 'blue';
  }
  class Car extends Vehicle {
    static colors = [];
    static {
      this.colors.push(super.defaultColor, 'red');
    }
    static {
      this.colors.push('green');
    }
}

  
let getClassPrivateField;

class Person {
  #privateField;
  constructor(value) {
    this.#privateField = value;
  }
  static {
    getClassPrivateField = (obj) => obj.#privateField;
  }
}

document.getElementById("a1").innerHTML += Car.colors;
document.getElementById("a1").innerHTML += `<br>` 
document.getElementById("a1").innerHTML += getClassPrivateField(new Person("C++"));
document.getElementById("a1").innerHTML += `<br>` 
document.getElementById("a1").innerHTML += getClassPrivateField(new Person("Java"));