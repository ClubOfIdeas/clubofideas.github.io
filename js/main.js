window.onscroll = function() {myFunction()};
var header = document.getElementsByTagName('header')[0];
var sticky = 1;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("coverScroll");
  } else {
    header.classList.remove("coverScroll");
  }
}
var menu = document.getElementById('branches');
var nav = document.getElementsByTagName('nav')[0];
menu.addEventListener("click", function(){
  if (nav.style.display == 'block') {
    $("nav").fadeOut("fast");
  } else {
    $("nav").fadeIn("fast");
  }
});
