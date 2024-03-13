//Mantiene los emogis activos cuando haces clic en alguna opcion del menu
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      document.querySelectorAll('.emoji').forEach(emoji => {
        emoji.classList.remove('active-emoji');
      });

      const emojiInsideClickedLink = this.querySelector('.emoji');
      if (emojiInsideClickedLink) {
        emojiInsideClickedLink.classList.add('active-emoji');
      }
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

//Actualiza mi experiencia
window.onload = function() {
  var startYear = 2021; 
  var currentYear = new Date().getFullYear(); 
  var experienceYears = currentYear - startYear; 
  document.getElementById('experienceYears').innerText = experienceYears; 
}

//Actualizar el año automaticamente
document.addEventListener('DOMContentLoaded', function () {
  var year = new Date().getFullYear(); // Obtiene el año actual
  document.getElementById('current-year').textContent = year; // Establece el año actual en el elemento con ID 'current-year'
});


document.getElementById('downloadCvButton').addEventListener('click', function() {
  var emojiContainer = document.getElementById('emojiContainer');
  emojiContainer.style.display = 'inline'; // Muestra el emoji
  setTimeout(function() {
      emojiContainer.style.display = 'none'; // Oculta el emoji después de 5 segundos
  }, 5000); // Ajusta este tiempo según necesites
});
