const burger = document.querySelector(".burger");
const nav = document.querySelector(".mobile-nav");
const navLink = document.querySelectorAll(".mobile-nav li");
const mobile = document.querySelectorAll(".m-link");
// fuction to toggle nav
let state = 0;
const openDrop=()=> {
  nav.style.display = "flex";
}
const closeDrop=()=>{
nav.style.display = "none";
state = 0;
}

function toggleNav(n){
  state += n;
   if(state==1){
     openDrop();
   }
   else{
     closeDrop();
   }

    // to animate nav
navLink.forEach((link,index) => {
  if(link.style.animation){ // without the if statement the list fade in will only implent on refresh of the page
      link.style.animation = "";
  }
  else{
    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
  }
});
// to animate the burger icon
    burger.classList.toggle("toggle");
}
// to close mobile nav bar on click
const closeDropdownMenuSelectingItem = (() => mobile.forEach((item) => item.addEventListener("click", ()=>{
closeDrop();
toggleNav();
})))()



//for scrolling back to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
  if(window.pageYOffset > 100){
    toTop.classList.add("activeT");
  }else{
    toTop.classList.remove("activeT");
  }
})


// for the typing effect
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};