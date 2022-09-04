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

////////////////////////

// SLIDESHOW

////////////////////////

let i = 0 // Start Point
const images = [] // Images Array
const time = 2000 // Time Between Switch

// Image List
images[0] = "Images/Homepage/Jeju.JPG"
images[1] = "Images/Homepage/Cherry.jpg"
images[2] = "Images/Homepage/Scotland_1.jpeg"
images[3] = "Images/Homepage/Scotland_2.jpeg"

function changeImg() {
  document.slide.src = images[i]

  if (i < images.length - 1) {
    i++
  } else {
    i = 0
  }

  setTimeout(changeImg, time)
}

changeImg()

////////////////////////

// Next ...

////////////////////////
