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

function showDetails(){
  aboutDetals.classList.toggle('show-detals')
}


/* Progress bars */ 


let progressBar = document.querySelector(".perc-content")
let valueContainer = document.querySelector(".progress-bar1")

let progressValue = 0
let progressEndValue = 90
let speed = 10

let progress = setInterval(() => {
  progressValue++
  valueContainer.textContent = `${progressValue}%`
  progressBar.style.background = `conic-gradient(
    #fff ${progressValue * 3.6}deg,
    #E2AE4C ${progressValue * 3.6}deg
  )`
  if(progressValue == progressEndValue){
    clearInterval(progress)
  }
},speed)
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
  if(progressValue2 == progressEndValue2){
    clearInterval(progress2)
  }
},speed2)

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
  if(progressValue3 == progressEndValue3){
    clearInterval(progress3)
  }
},speed3)


/* *********************************************************** */

let progressBar4 = document.querySelector(".perc-content4")
let valueContainer4 = document.querySelector(".progress-bar4")

let progressValue4 = 0
let progressEndValue4 = 80
let speed4 = 10

let progress4 = setInterval(() => {
  progressValue4++
  valueContainer4.textContent = `${progressValue4}%`
  progressBar4.style.background = `conic-gradient(
    #fff ${progressValue4 * 3.6}deg,
    #E2AE4C ${progressValue4 * 3.6}deg
  )`
  if(progressValue4 == progressEndValue4){
    clearInterval(progress4)
  }
},speed4)