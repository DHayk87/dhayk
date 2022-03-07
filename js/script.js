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



// let showMore = document.querySelectorAll(".exp-less")

function show() {
  document.querySelectorAll(".exp-less").classList.toggle('show-me')
}


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
let speed = 10

// let progress = setInterval(() => {
//   progressValue++
//   valueContainer.textContent = `${progressValue}%`
//   progressBar.style.background = `conic-gradient(
//     #fff ${progressValue * 3.6}deg,
//     #E2AE4C ${progressValue * 3.6}deg
//   )`
//   if (progressValue == progressEndValue) {
//     clearInterval(progress)
//   }
// }, speed)
/* ************************************** */

let progressBar2 = document.querySelector(".perc-content2")
let valueContainer2 = document.querySelector(".progress-bar2")

let progressValue2 = 0
let progressEndValue2 = 100
let speed2 = 10

let progress2 = setInterval(() => {
  progressValue2++
  valueContainer2.textContent = `${progressValue2}%`
  progressBar2.style.background = `conic-gradient(
    #fff ${progressValue2 * 3.6}deg,
    #E2AE4C ${progressValue2 * 3.6}deg
  )`
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2)
  }
}, speed2)

/* ******************************************************** */


let progressBar3 = document.querySelector(".perc-content3")
let valueContainer3 = document.querySelector(".progress-bar3")

let progressValue3 = 0
let progressEndValue3 = 95
let speed3 = 10

let progress3 = setInterval(() => {
  progressValue3++
  valueContainer3.textContent = `${progressValue3}%`
  progressBar3.style.background = `conic-gradient(
    #fff ${progressValue3 * 3.6}deg,
    #E2AE4C ${progressValue3 * 3.6}deg
  )`
  if (progressValue3 == progressEndValue3) {
    clearInterval(progress3)
  }
}, speed3)


/* *********************************************************** */

let progressBar4 = document.querySelector(".perc-content4")
let valueContainer4 = document.querySelector(".progress-bar4")

let progressValue4 = 0
let progressEndValue4 = 80
let speed4 = 50

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
  }
}

window.onscroll = () => {
  let scrollTop = window.scrollY
  if (scrollTop >= 2600) {
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
    }, speed4)
  }
}

/* ********************************************* */

//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{  //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}

//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector(".img").src; //getting user clicked image source link and stored in a variable
  let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
  previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
  categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
  previewBox.classList.add("show"); //show the preview image box
  shadow.classList.add("show"); //show the light grey background
  closeIcon.onclick = ()=>{ //if user click on close icon of preview box
    previewBox.classList.remove("show"); //hide the preview box
    shadow.classList.remove("show"); //hide the light grey background
    document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
  }
}