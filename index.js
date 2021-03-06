
// DETECTING BUTTON PRESS

var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrums; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener( "click" , function() {
    
  //  this.style.color="white";
    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
   
  
  });

  // if haandleclick() is used than first only alert will show and straight up method is called
  // $0 = heading1 { h1 }
}
// DETECTING KEYBOARD PRESS
document.addEventListener("keypress" , function(event) {
// this event tapped into that particular event which is triggered by first param
  makeSound(event.key);
});

function makeSound(key)
{
  switch (key)
   {
    case 'w':
    var tom1 = new Audio("tom-1.mp3");
    tom1.play();
    break;
    
    case 'a':
    var tom2 = new Audio("tom-2.mp3");
    tom2.play();
    break;
    
    case 's':
    var tom3 = new Audio("tom-3.mp3");
    tom3.play();
    break;
    
    case 'd':
    var tom4 = new Audio("tom-4.mp3");
    tom4.play();
    break;
    
    case 'j':
    var snare = new Audio("snare.mp3");
    snare.play();
    break;
    
    case 'k':
    var crash = new Audio("crash.mp3");
    crash.play();
    break;
    
    case 'l':
    var kick = new Audio("kick-bass.mp3");
    kick.play();
    break;
  
    default:
      
  }
}

