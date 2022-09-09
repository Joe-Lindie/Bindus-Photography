// Buttons
const showAll = document.getElementById("show_all")
const singapore = document.getElementById("singapore")
const scotland = document.getElementById("scotland")
const south_korea = document.getElementById("south_korea")

// Images by class
const allImgs = document.querySelectorAll(".all_imgs")
const singImages = document.querySelectorAll(".sing_images")
const scotImages = document.querySelectorAll(".scot_images")
const korImages = document.querySelectorAll(".kor_images")

// Eventlisteners for all buttons
showAll.addEventListener("click", showAllImages)
singapore.addEventListener("click", ShowSingImages)
scotland.addEventListener("click", ShowScotImages)
south_korea.addEventListener("click", ShowKorImages)

// All albums in separate array
const allImages = Array.from(allImgs)
const singImagesArray = Array.from(singImages)
const scotImagesArray = Array.from(scotImages)
const korImagesArray = Array.from(korImages)

// Functions to add/remove
function showAllImages() {
  for (let i = 0; i < allImgs.length; i++) {
    const list = allImgs[i].classList
    list.remove("myStyle")
  }
}

function blockImages() {
  for (let i = 0; i < allImgs.length; i++) {
    const list = allImgs[i].classList
    list.add("myStyle")
  }
}

function ShowSingImages() {
  blockImages()

  for (let j = 0; j < singImagesArray.length; j++) {
    const list = singImagesArray[j].classList
    list.remove("myStyle")
  }
}

function ShowScotImages() {
  blockImages()

  for (let j = 0; j < scotImagesArray.length; j++) {
    const list = scotImagesArray[j].classList
    list.remove("myStyle")
  }
}

function ShowKorImages() {
  blockImages()

  for (let j = 0; j < korImagesArray.length; j++) {
    const list = korImagesArray[j].classList
    list.remove("myStyle")
  }
}
