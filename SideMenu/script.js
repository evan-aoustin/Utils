document.querySelectorAll('.menuButton').forEach(function(button) {
  button.addEventListener('click', function() {
      document.querySelector('.sideMenu').style.transform = 'translateX(0%)'; /* Déplace le menu pour qu'il soit visible */
      document.querySelector('.closeButton').style.display = 'block';
      var overlay = document.querySelector('.overlay');
      overlay.style.display = 'block';
      setTimeout(() => { overlay.style.background = 'rgba(0, 0, 0, 0.5)'; }, 10);
  });
});

document.querySelectorAll('.closeButton').forEach(function(button) {
  button.addEventListener('click', function() {
      document.querySelector('.sideMenu').style.transform = 'translateX(-100%)'; /* Cache le menu */
      this.style.display = 'none';
      var overlay = document.querySelector('.overlay');
      overlay.style.background = 'rgba(0, 0, 0, 0)';
      setTimeout(() => { overlay.style.display = 'none'; }, 500);
  });
});

document.querySelector('.overlay').addEventListener('click', function() {
  document.querySelector('.sideMenu').style.transform = 'translateX(-100%)';
  document.querySelector('.closeButton').style.display = 'none';
  this.style.background = 'rgba(0, 0, 0, 0)';
  setTimeout(() => { this.style.display = 'none'; }, 500);
});

function closeMenu() {
    document.querySelector('.closeButton').click(); // Simule un clic sur le bouton close
}
