function toggleMenu() {
  var overlay = document.getElementById('overlay');
  overlay.classList.toggle('show');

  var hamburgerBtn = document.querySelector('.hamburger-btn');
  hamburgerBtn.classList.toggle('open');
}

// Get the current page's filename (e.g., "about.html")
var currentPage = window.location.pathname.split('/').pop();

// Highlight the current page link
var currentLink = document.querySelector('.overlay a[href="' + currentPage + '"]');
if (currentLink) {
  currentLink.classList.add('current');
}