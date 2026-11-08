/**
 * @file
 * ajruiz_wp_v2 behaviors.
 */
(function (Drupal) {
  "use strict";

  Drupal.behaviors.ajruizWpV2 = {
    attach: function (context, settings) {
      console.log("It works!");
      // Get all anchor elements on the page
      const links = document.querySelectorAll("a");

      // Loop through each link and check if it has the type="application/pdf" attribute
      links.forEach((link) => {
        const type = link.getAttribute("type");

        if (type === "application/pdf") {
          // Add the target="_blank" attribute to the link
          link.setAttribute("target", "_blank");
        }
      });
    },
  };
})(Drupal);

// var largura = window.innerWidth;
// var altura = window.innerHeight;
// var divTamanho = document.querySelector("#tamanho span");
// divTamanho.innerText = largura + "px X " + altura + "px";
