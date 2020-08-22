//JavaScript Animation Sroll
// Animate Above
var animateAbove = document.querySelectorAll('.animateAbove');
function showScrollAbove() {
  var scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animateAbove.length; i++) {
    var animation = animateAbove[i].offsetTop;
    if (animation -400 < scrollTop) {
      animateAbove[i].style.opacity = 1;
      animateAbove[i].classList.add('showAbove')
    }
  }
}
window.addEventListener('scroll', showScrollAbove);

// Animate Below
var animateBelow = document.querySelectorAll('.animateBelow');
function showScrollBelow() {
  var scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animateBelow.length; i++) {
    var animation = animateBelow[i].offsetTop;
    if (animation -400 < scrollTop) {
      animateBelow[i].style.opacity = 1;
      animateBelow[i].classList.add('showBelow')
    }
  }
}
window.addEventListener('scroll', showScrollBelow);

// Animate Rigth
var animateRight = document.querySelectorAll('.animateRight');
function showScrollRigth() {
  var scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animateRight.length; i++) {
    var animation = animateRight[i].offsetTop;
    if (animation -400 < scrollTop) {
      animateRight[i].style.opacity = 1;
      animateRight[i].classList.add('showRight')
    }
  }
}
window.addEventListener('scroll', showScrollRigth);

// Animate Left
var animateLeft = document.querySelectorAll('.animateLeft');
function showScrollLeft() {
  var scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animateLeft.length; i++) {
    var animation = animateLeft[i].offsetTop;
    if (animation -400 < scrollTop) {
      animateLeft[i].style.opacity = 1;
      animateLeft[i].classList.add('showLeft')
    }
  }
}
window.addEventListener('scroll', showScrollLeft);
