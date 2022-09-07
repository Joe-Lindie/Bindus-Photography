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
const time = 2000 // Time Between Switch

// Image List src's
const images = [
  "Images/Homepage/Jeju.JPG",
  "Images/Homepage/Cherry.jpg",
  "Images/Homepage/Scotland_1.jpeg",
  "Images/Homepage/Scotland_2.jpeg",
]

function changeImg() {
  document.slide.src = images[i]

  if (i < images.length - 1) {
    i++
  } else {
    i = 0
  }

  setTimeout(changeImg, time)
}

//changeImg()
//onload="changeImg()" currently attached to body tag

////////////////////////

// DISPLAY IMAGES IN RANDOM ORDER

////////////////////////

const allGalleryImages = document.querySelectorAll(".gallery_img")

let galleryImgs = [
  "Images/Highlights/highlights_500px_1.webp",
  "Images/Highlights/highlights_500px_2.webp",
  "Images/Highlights/highlights_500px_3.webp",
  "Images/Highlights/highlights_500px_4.webp",
  "Images/Highlights/highlights_500px_5.webp",
  "Images/Highlights/highlights_500px_6.webp",
  "Images/Highlights/highlights_500px_7.webp",
  "Images/Highlights/highlights_500px_8.webp",
  "Images/Highlights/highlights_500px_9.webp",
  "Images/Highlights/highlights_500px_10.webp",
  "Images/Highlights/highlights_500px_11.webp",
  "Images/Highlights/highlights_500px_12.webp",
  "Images/Highlights/highlights_500px_13.webp",
  "Images/Highlights/highlights_500px_14.webp",
  "Images/Highlights/highlights_500px_15.webp",
  "Images/Highlights/highlights_500px_16.webp",
  "Images/Highlights/highlights_500px_17.webp",
  "Images/Highlights/highlights_500px_18.webp",
  "Images/Highlights/highlights_500px_19.webp",
  "Images/Highlights/highlights_500px_20.webp",
]

function displayInRandomOrder() {
  //Randomize/Shuffle Array
  galleryImgs.sort((a, b) => 0.5 - Math.random())

  for (let i = 0; i < allGalleryImages.length; i++) {
    allGalleryImages[i].src = galleryImgs[i]
  }
}

displayInRandomOrder()

////////////////////////

// Next

////////////////////////
