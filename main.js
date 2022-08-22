////////////////////////

// Navigation Bar

////////////////////////
const openMenu = document.getElementById("open_menu")
const closeMenu = document.getElementById("close_menu")
const navItems = document.getElementById("nav_items")

openMenu.addEventListener("click", function openNav() {
  navItems.style.width = "100%"
})

closeMenu.addEventListener("click", function closeNav() {
  navItems.style.width = "0%"
})
