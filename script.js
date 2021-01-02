// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "70px";
    document.getElementById("header").style.boxShadow = "0px 1px 18px #888888";
  } else {
    document.getElementById("header").style.height = "90px";
  }
} 