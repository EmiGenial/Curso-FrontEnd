var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";
  // setTimeout(function(){document.getElementById("text").className="slideText";},2500);
  setTimeout(carousel, 10000); // Change image every 4 seconds
}

// Used to toggle the menu on small screens when clicking on the menu button
// function myFunction() {
//   var x = document.getElementById("navMobile");
//   if (x.className.indexOf("w3-show") == -1) {
//     x.className += " w3-show";
//   } else { 
//     x.className = x.className.replace(" w3-show", "");
//   }
// }

function myFunction() {
  // document.getElementById('navMobile').style.display='block';
}