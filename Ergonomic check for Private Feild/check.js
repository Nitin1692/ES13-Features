class User {
    #name;
    constructor(name) {
      this.#name = name;
    }
    static check(obj) {
      return #name in obj;
    }
  }
  
  class Person {
    #name;
    constructor(name) {
      this.#name = name;
    }
    static check(obj) {
      return #name in obj;
    }
  }
  /*
  class Test {
    nam;
    constructor(name) {
      this.nam = name
    }
    static check(obj) {
      return nam in obj;
    }
  } It will not work because the variable is not a private variable */

  
document.getElementById("a1").innerHTML +=  User.check(new User()),
document.getElementById("a1").innerHTML += `<br>`   
document.getElementById("a1").innerHTML += User.check(new Person()),
document.getElementById("a1").innerHTML += `<br>`    
document.getElementById("a1").innerHTML +=  Person.check(new Person()), 
document.getElementById("a1").innerHTML += `<br>` 
document.getElementById("a1").innerHTML +=  Person.check(new User())
