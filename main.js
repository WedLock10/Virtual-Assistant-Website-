
// testimonials slide
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("testimonial-item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
return;
};
// footer menu button 
function showMenu(){
  var x = document.querySelector(".footer-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

// scroll to top button
let scrollBtn = document.getElementById('myBtn');

// when the user scroll down 20px from the top show the button
window.onscroll = function()
{scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
    scrollBtn.style.display = "block";
  }else{
    scrollBtn.style.display = "none";
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// navbar menu hide & show
function showMenuItems(){
  var x = document.querySelector(".links");
    x.style.display = "block";
}
// hide items
function hideMenuItems(){
  var x = document.querySelector(".links");
    x.style.display = "none";
}
