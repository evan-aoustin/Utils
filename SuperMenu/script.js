document.querySelectorAll('.toggleMenuBas').forEach(function(button) {
  button.addEventListener('click', function() {
      var menu = document.getElementById('menu');
      if (menu.style.transform === 'translateY(0%)') {
          menu.style.transform = 'translateY(100%)';
      } else {
          menu.style.transform = 'translateY(0%)';
      }
  });
});