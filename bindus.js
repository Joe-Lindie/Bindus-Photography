const hamburger =  document.getElementById('hamburger');
const navItem =  document.getElementById('nav-item');

hamburger.addEventListener('click', () => {
  navItem.classList.toggle('show');
});