//Mantiene los emogis activos cuando haces clic en alguna opcion del menu
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      document.querySelectorAll('.emoji').forEach(function(emoji) {
        emoji.style.transform = 'scale(0)';
        emoji.style.opacity = '0';
      });

      this.querySelector('.emoji').style.transform = 'scale(1)';
      this.querySelector('.emoji').style.opacity = '1';
    });
  });
});

//funcion para la animacion del texto escrito a mano
document.addEventListener('DOMContentLoaded', function () {
  var textElement = document.getElementById('web-developer-text');
  var text = "Web developer.";
  var i = 0;
  var typingSpeed = 300; 
  var cursorHtml = '<span class="cursor">|</span>'; 

  function typeWriter() {
      if (i < text.length) {
          textElement.innerHTML = textElement.innerHTML.replace(cursorHtml, "") + text.charAt(i) + cursorHtml;
          i++;
          setTimeout(typeWriter, typingSpeed);
      } else {
          textElement.innerHTML = textElement.innerHTML.replace(cursorHtml, "") + cursorHtml;
          blinkCursor();
      }
  }

  // Función para hacer que el cursor parpadee.
  function blinkCursor() {
      var cursor = document.querySelector('.cursor');
      setInterval(function () {
          cursor.style.opacity = (cursor.style.opacity == 0 ? 1 : 0);
      }, 500);
  }

  typeWriter();
});

//gestion de animaciones gif
document.addEventListener("DOMContentLoaded", function() {
  const skillImages = document.querySelectorAll('#professional-skills .border-img img');

  skillImages.forEach(img => {
      const originalSrc = img.src;
      const gifSrc = img.getAttribute('data-gif');

      img.addEventListener('mouseover', function() {
          img.src = gifSrc;
      });

      img.addEventListener('mouseout', function() {
          img.src = originalSrc;
      });
  });
});

