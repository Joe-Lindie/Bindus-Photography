// BUTTONS
const showAll = document.getElementById("show_all")
const singapore = document.getElementById("singapore")
const scotland = document.getElementById("scotland")
const south_korea = document.getElementById("south_korea")
const japan = document.getElementById("japan")

// IMAGES BY CLASS
const allImgs = document.querySelectorAll(".all_imgs")
const singImages = document.querySelectorAll(".sing_images")
const scotImages = document.querySelectorAll(".scot_images")
const korImages = document.querySelectorAll(".kor_images")
const japImages = document.querySelectorAll(".jap_images")

// EVENTLISTENERS FOR ALL BUTTONS
showAll.addEventListener("click", showAllImages)
singapore.addEventListener("click", ShowSingImages)
scotland.addEventListener("click", ShowScotImages)
south_korea.addEventListener("click", ShowKorImages)
japan.addEventListener("click", ShowJapImages)

// ALL ALBUMS IN SEPARATE ARRAY
const allImages = Array.from(allImgs)
const singImagesArray = Array.from(singImages)
const scotImagesArray = Array.from(scotImages)
const korImagesArray = Array.from(korImages)
const japImagesArray = Array.from(japImages)

// FUNCTIONS TO ADD/REMOVE

function showAllImages() {
  allImgs.forEach((images) => {
    images.classList.remove("myStyle")
  })
}

function removeAllImage() {
  allImgs.forEach((images) => {
    images.classList.add("myStyle")
  })
}

function ShowSingImages() {
  removeAllImage()

  singImagesArray.forEach((images) => {
    images.classList.remove("myStyle")
  })
}

function ShowScotImages() {
  removeAllImage()

  scotImagesArray.forEach((images) => {
    images.classList.remove("myStyle")
  })
}

function ShowKorImages() {
  removeAllImage()

  korImagesArray.forEach((images) => {
    images.classList.remove("myStyle")
  })
}

function ShowJapImages() {
  removeAllImage()

  japImagesArray.forEach((images) => {
    images.classList.remove("myStyle")
  })
}
