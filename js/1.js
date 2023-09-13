



let count = 0;


function show() {



  let slides = document.getElementsByClassName("slide"),
   change = document.getElementsByClassName("add");

  for ( let i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";  
  }

  count++;

  if (count > slides.length) {

    count = 1
}    
//   for (i = 0; i < change.length; i++) {

//     change[i].className = change[i].className.replace(" active", "");
//   }

  slides[count-1].style.display = "block";  

//   change[count-1].className += " active";
  
  setTimeout(show, 2500)}


show();


document.getElementById("blue").style.display = "none" ;
document.getElementById("pink").style.display = "inline" ;


function change() {
   document.getElementById("pink").style.display = "none" ;
   document.getElementById("blue").style.display = "inline" ;

}

function showing() {

  document.getElementById("pink").style.display = "inline" ;
  document.getElementById("blue").style.display = "none" ;
  
}

function changing() {
  document.getElementById("blue").style.display = "none" ;
  document.getElementById("pink").style.display = "inline" ;
  
}

function get(params) {
  document.getElementById("blue").style.display = "none" ;
  document.getElementById("pink").style.display = "inline" ;
  
}

document.getElementById("dark").style.display = "none" ;

function add() {
  document.getElementById("empty").style.display = "none" ;
  document.getElementById("dark").style.display = "inline" ;

  
}

function  hide() {
  document.getElementById("empty").style.display = "inline" ;
  document.getElementById("dark").style.display = "none" ;

  
}


// document.querySelector(".dark").style.display = "none" ;

// function add() {
//   document.querySelector(".rate").style.display = "none" ;
//   document.querySelector(".dark").style.display = "inline" ;

  
// }

// function  hide() {
//   document.querySelector(".rate").style.display = "inline" ;
//   document.querySelector(".dark").style.display = "none" ;

  
// }
