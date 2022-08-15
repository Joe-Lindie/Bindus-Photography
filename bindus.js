// const hamburger =  document.getElementById('hamburger');
// const navItem =  document.getElementById('nav-item');

// hamburger.addEventListener('click', () => {
//   navItem.classList.toggle('show');
// });

const openNavBar = document.getElementById("myNav")
const closeNavBar = document.getElementById("myNav")
const hamburger = document.getElementById("openBtn")

closeNavBar.addEventListener("click", function closeNav() {
  closeNavBar.style.width = "0%"
})

openBtn.addEventListener("click", function openNav() {
  openNavBar.style.width = "100%"
})
