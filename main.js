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

//changeImg()
//onload="changeImg()" currently attached to body tag

////////////////////////

// DISPLAY IMAGES IN RANDOM ORDER

////////////////////////

const allGalleryImages = document.querySelectorAll(".gallery_img")

let galleryImgs = [
  "Images/Highlights/BangogjiKorea.jpg",
  "Images/Highlights/BarcelonaSpain.jpg",
  "Images/Highlights/Bluelake.jpg",
  "Images/Highlights/BusanKorea.jpg",
  "Images/Highlights/Busansunset.jpg",
  "Images/Highlights/GyeongjuKorea.jpg",
  "Images/Highlights/HakoneJapan.jpg",
  "Images/Highlights/Seoul.jpg",
  "Images/Highlights/Singapore.jpg",
  "Images/Highlights/Scotland_1.JPG",
  "Images/Highlights/Scotland_2.JPG",
  "Images/Highlights/Scotland_3.JPG",
  "Images/Highlights/Scotland_4.JPG",
  "Images/Highlights/TokyoJapan.jpeg",
  "Images/Highlights/CherryBlossoms.JPG",
  "Images/Highlights/Busan_houseKorea 2.JPG",
  "Images/Highlights/Deagu.jpg",
  "Images/Highlights/Japan1.jpg",
  "Images/Highlights/JejuKorea2.JPG",
  "Images/Highlights/Gyeongju1.jpg",
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
