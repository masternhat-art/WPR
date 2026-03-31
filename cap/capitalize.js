/*
 * Capitalizing text of all paragraphs
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - write your logic here
   */
  function init() {
    const textContent = document.querySelectorAll("p");
    textContent.forEach(element => {
      if(element !==""){
        element.textContent = element.textContent.toUpperCase();
      }
	
    })
  }
})();