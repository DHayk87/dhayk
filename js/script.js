/* On load */

setTimeout(() => {
  const preload = document.querySelector("#page")
  preload.classList.add('loaded_hiding')
}, 500)

/* Auto type text*/

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};



/* About div open close */

let aboutDetals = document.getElementById("about_detals")

function showDetails() {
  aboutDetals.classList.toggle('show-detals')
}


let btn = document.querySelectorAll(".read-more")
let less = document.querySelectorAll(".exp-less")
let expBody = document.querySelectorAll(".exp")

expBody = addEventListener('click', e => {
  const current = e.target;
  const isBtn = current.className.includes('read-more');
  if (!isBtn)
    return;
  const currentText = e.target.parentNode.querySelector('.exp-less');
  currentText.classList.toggle('show-me');
  current.textContent = current.textContent.includes('Read More') ? 'Read Less' : 'Read More';
});




// let showMore = document.getElementsByClassName("exp-less")
// let btn = document.getElementsByClassName("btn")

// function show (){
//   var className = document.getElementsByClassName("exp-less")
//   if( className.indexOf('expanded') == -1 ){
//       className += ' expanded';
//   }
//   else {
//       className = className.replace(' expanded', '');
//   }
//   showMore.className = className;
//   return false;
// };


/* Progress bars */


let progressBar = document.querySelector(".perc-content")
let valueContainer = document.querySelector(".progress-bar1")
let progressValue = 0
let progressEndValue = 90
let speed = 100


let progressBar2 = document.querySelector(".perc-content2")
let valueContainer2 = document.querySelector(".progress-bar2")
let progressValue2 = 0
let progressEndValue2 = 100


let progressBar3 = document.querySelector(".perc-content3")
let valueContainer3 = document.querySelector(".progress-bar3")
let progressValue3 = 0
let progressEndValue3 = 95

let progressBar4 = document.querySelector(".perc-content4")
let valueContainer4 = document.querySelector(".progress-bar4")
let progressValue4 = 0
let progressEndValue4 = 80


window.onscroll = () => {
  let scrollTop = window.scrollY
  if (scrollTop >= 2600) {

    let progress = setInterval(() => {
      if (progressValue <= progressEndValue) {
        valueContainer.textContent = `${progressValue}%`
        progressBar.style.background = `conic-gradient(
        #fff ${progressValue * 3.6}deg,
        #E2AE4C ${progressValue * 3.6}deg
        )`
        progressValue++
      }
      if (progressValue == progressEndValue) {
        clearInterval(progress)
      }
    }, speed)

    let progress2 = setInterval(() => {
      if (progressValue2 <= progressEndValue2) {
        valueContainer2.textContent = `${progressValue2}%`
        progressBar2.style.background = `conic-gradient(
        #fff ${progressValue2 * 3.6}deg,
        #E2AE4C ${progressValue2 * 3.6}deg
        )`
        progressValue2++
      }
      if (progressValue2 == progressEndValue2) {
        clearInterval(progress2)
      }
    }, speed)

    let progress3 = setInterval(() => {
      if (progressValue3 <= progressEndValue3) {
        valueContainer3.textContent = `${progressValue3}%`
        progressBar3.style.background = `conic-gradient(
          #fff ${progressValue3 * 3.6}deg,
          #E2AE4C ${progressValue3 * 3.6}deg
          )`
        progressValue3++
      }
      if (progressValue3 == progressEndValue3) {
        clearInterval(progress3)
      }
    }, speed)

    let progress4 = setInterval(() => {
      if (progressValue4 <= progressEndValue4) {
        valueContainer4.textContent = `${progressValue4}%`
        progressBar4.style.background = `conic-gradient(
          #fff ${progressValue4 * 3.6}deg,
          #E2AE4C ${progressValue4 * 3.6}deg
          )`
        progressValue4++
      }
      if (progressValue4 == progressEndValue4) {
        clearInterval(progress4)
      }
    }, speed)
  }
}

/* Album */

const filterItem = document.querySelector(".items")
const filterImg = document.querySelectorAll(".gallery .image")

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active")
      selectedItem.target.classList.add("active")
      let filterName = selectedItem.target.getAttribute("data-name")
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name")
        if ((filterImges == filterName) || (filterName == "all")) {
          image.classList.remove("hide")
          image.classList.add("show")
        } else {
          image.classList.add("hide")
          image.classList.remove("show")
        }
      })
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)")
  }
}

const previewBox = document.querySelector(".preview-box"),
  categoryName = previewBox.querySelector(".title p"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  shadow = document.querySelector(".shadow");

function preview(element) {
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src
  let selectedImgCategory = element.getAttribute("data-name")
  previewImg.src = selectedPrevImg
  categoryName.textContent = selectedImgCategory
  previewBox.classList.add("show")
  shadow.classList.add("show")
  closeIcon.onclick = () => {
    previewBox.classList.remove("show")
    shadow.classList.remove("show")
  }
}

/* carousel video */

// let slyde = document.querySelector(".first-slyde .second-slyde")

// let slyders =[]

// for( let i = 0; i > slyde.length; i++){
//   slyders[i] = slyde[i].querySelector('img')
//   slyde[i].remove()
// }

// let step = 0

// let offset = 0

// function drow(){
//   let slyde = document.createElement('div')

//   slyde.classList.add(slyde)
// }

/* * Logos carousel* */

let logos = document.querySelectorAll(".logo-single")
let logosSlyder = []

for (let i = 0; i < logos.length; i++) {
  logosSlyder[i] = logos[i].src
  logos[i].remove()
}

let step = 0

let offset = 0

function draw() {
  let img = document.createElement("img")
  img.classList.add("logo-single")
  img.src = logosSlyder[step]
  img.style.left = offset * 120 + "px"
  document.querySelector(".logos-slyder").appendChild(img)
  if (step + 1 == logosSlyder.length) {
    step = 0
  } else {
    step++
  }
  offset = -1
}
draw()
draw()
draw()
draw()
draw()
draw()

function left() {
  let logosVisible = document.querySelectorAll(".logo-single")
  let offset2 = 0
  for (let i = 0; i < logosVisible.length; i++) {
    logosVisible[i].style.left = offset2 * 190 + "px"
    offset2++
  }
  setTimeout(() => {
    logosVisible[0].remove()
    logosVisible[logosVisible.length - 1].remove()
    draw()
    document.querySelector(".logos-slyder").onclick = left
  }, 2000)
}
setInterval(left, 2000)