/*
 * Quadratic equation solver exercise
 *
 * TODO: implement the functionality for index.html webpage to solve quadratic equations
 * Use-case scenario: when a user enters numbers on three text fields with ids of "a",
 * "b", "c" and clicks "Solve" button, equation solution will be displayed on the <div>
 * with id "result".
 * 
 */
 "use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - write your logic here
   */
  function init() {
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const c = document.getElementById("c"); 
    const resultDiv = document.getElementById("result");
    const solveButton = document.getElementById("Solve-btn");
    solveButton.addEventListener("click", function() {
      let Delta = b.value**2 - 4*a.value*c.value;
      if (Delta > 0) {
        const x1 = (-b.value + Math.sqrt(Delta)) / (2*a.value);
        const x2 = (-b.value - Math.sqrt(Delta)) / (2*a.value);
        resultDiv.textContent = `The solutions are x1 = ${x1} and x2 = ${x2}`;
      } else if (Delta === 0) {
        const x = -b.value / (2*a.value);
        resultDiv.textContent = `The solution is x = ${x}`;
      } else {
        resultDiv.textContent = "No real solutions";
      }
    });

  }

})();