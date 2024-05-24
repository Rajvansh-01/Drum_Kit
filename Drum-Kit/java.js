// document.querySelector("button").addEventListener("click", handleClick);
//
// function handleClick(){
//   alert("I got clicked!");
// }

// yu can do the above typw also like writing function name without parenthesis!
// or write an anonymous funciton in place like below

// Detecting button press
var NumberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < NumberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("SOUNDS/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("SOUNDS/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("SOUNDS/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("SOUNDS/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("SOUNDS/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("SOUNDS/crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("SOUNDS/kick-bass.mp3");
        kick.play();
        break;
      default:
        alert("Pressed key : "+key+". Please press r8 key buddy!");
    }
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard press
document.addEventListener("keypress", function(event){
  var Key = event.key;
    switch (Key) {
      case "w":
        var tom1 = new Audio("SOUNDS/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("SOUNDS/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("SOUNDS/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("SOUNDS/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var snare = new Audio("SOUNDS/snare.mp3");
        snare.play();
        break;
      case "k":
        var crash = new Audio("SOUNDS/crash.mp3");
        crash.play();
        break;
      case "l":
        var kick = new Audio("SOUNDS/kick-bass.mp3");
        kick.play();
        break;
      default:
        alert("Pressed key : "+Key+". Please press r8 key buddy!");
    }
    buttonAnimation(Key);
});

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 200);
}
