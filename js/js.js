

    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
// window.onresize = function() {resize()  }
// function resize()
// {
//   if (window.innerWidth<1200) {
//      document.getElementById("top-nav").classList.add('d-none');
//   }
//   else
//   {
//     document.getElementById("top-nav").classList.remove('d-none');
//   }
//}

function scrollFunction()
{
  if (window.innerWidth>992 ) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100   ) {
      document.getElementById("head").classList.add('d-none');
      
      document.getElementById("logo").classList.remove('d-none');
      document.getElementById("icons").classList.remove('d-none');
      
    } else
    {
      document.getElementById("head").classList.remove('d-none');
      document.getElementById("logo").classList.add('d-none');
      document.getElementById("icons").classList.add('d-none');

    }
  }
  else
  {
    document.getElementById("logo").classList.remove('d-none');
    document.getElementById("head").classList.add('d-none');
    document.getElementById("icons").classList.add('d-none');
  }
}

let items = document.querySelectorAll('.crl .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


// slider
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let index = 0;
window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  
  track.style.transform = "translateX(" + index * -width + "px)";
  if (track.offsetWidth - index * width < index * width) {
    next.classList.add("hide");
  }
});
prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -width + "px)";
});