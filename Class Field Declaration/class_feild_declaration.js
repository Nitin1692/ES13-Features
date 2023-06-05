let cont = document.getElementById("a1")
class User {
  name = "Tom";
  #lastName = "Brown";

  getFullName() {
    return `${this.name} ${this.#lastName}`;
  }
}

const user = new User();
console.log(user.name);

cont.innerHTML += user.getFullName();


