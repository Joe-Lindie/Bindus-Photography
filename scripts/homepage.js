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

changeImg()
