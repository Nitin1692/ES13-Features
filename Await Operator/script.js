function setTimeoutAsync(timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
}

document.getElementById("a1").innerHTML += setTimeoutAsync(5000)
document.getElementById("a1").innerHTML += `<br>`
document.getElementById("a1").innerHTML += setTimeoutAsync(8000)

