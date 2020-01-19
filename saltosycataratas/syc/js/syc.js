/*Slider*/
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      duration: 400,
      //indicators: true,
      fullWidth: true,
      onCycleTo:setTimeout(autoplay,4000)
    });
});

/* Autoplay */
var stop=false;
var slide = document.querySelector('.carousel');
function autoplay() {
    if (stop==false){
        slide.M_Carousel.next();
    }
    setTimeout(autoplay,10000);
}
function stopAutorun(){
    stop=true;
    console.log(stop);
    
}
function startAutorun(){
    stop=false;
    console.log(stop); 
}

/*buttons*/
function prevSlide() {
    // var slide = document.querySelector('.carousel');
    slide.M_Carousel.prev();
}
function nextSlide() {
    // var slide = document.querySelector('.carousel');
    slide.M_Carousel.next();
}

// Used to toggle the menu on small screens when clicking on the menu button
// function myFunction() {
//     var x = document.getElementById("navMobile");
//     if (x.className.indexOf("w3-show") == -1) {
//       x.className += " w3-show";
//     } else { 
//       x.className = x.className.replace(" w3-show", "");
//     }
//   }

function myFunction() {
    document.getElementById('navMobile').style.display='block';
  }