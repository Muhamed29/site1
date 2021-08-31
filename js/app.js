
var links = document.querySelectorAll("ul a");
for (const link of links) {
link.addEventListener("click",function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
  
    scroll({
      top: offsetTop,
      behavior: "smooth"
    })
});
}
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTo({
        top:0,
        behavior: "smooth"
      }); // For Safari
    document.documentElement.scrollTo({
        top:0,
        behavior: "smooth"
      }); // For Chrome, Firefox, IE and Opera
  }