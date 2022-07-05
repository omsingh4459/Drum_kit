for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var selected = this.innerHTML;
    whattocommit(selected);
     buttonanimation(selected);
  });
}
document.addEventListener("keypress", function(event){
  whattocommit(event.key);
   buttonanimation(event.key);
})
function whattocommit(key) {

  // this.style.color="white";

  switch (key) {
    case "w":
      var audio = new Audio('tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('kick-bass.mp3');
      audio.play();
      break;
    default:

  }
}
function buttonanimation(currentkey){
  // var activebutton = document.querySelector("."+currentkey);
  document.querySelectorAll("."+currentkey)[0].classList.add("pressed");
  setTimeout(function(){
    document.querySelectorAll("."+currentkey)[0].classList.remove("pressed");
  }, 1000);
}
