await setTimeoutAsync(5000)
function setTimeoutAsync(timeout) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeout);
    });
}

await setTimeoutAsync(3000)  //Error should not be thrown according to ES13. If any one can help out what i have done wrong.

