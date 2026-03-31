/*
 * Pokeball Exercise
 *
 * Implements the functionality of the Pokeball webpage to show a mystery
 * Pokemon when a button is clicked.
 */
"use strict";
(function() {
  window.addEventListener("load", init);
  /**
   * init - setup the demo button to change the image on click.
   */
  function init() {
    
  const pokeballs = document.querySelectorAll("#pokeball");
  const btn = document.querySelector("#demo-btn");
    btn.addEventListener("click", function(){
      // Implementation for changing the image on click
      pokeballs.forEach(pokeball => {
        pokeball.src="mystery.gif";
      });
  }) 
}

})();