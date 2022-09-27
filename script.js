const ham = document.getElementById('ham')
const miniMenu = document.getElementById('mini-option-menu')
const header = document.querySelector('.darken-layer')
const realHeader = document.querySelector('header')
const forceScrollMatch = window.matchMedia('(min-width: 768px)')
const main = document.querySelector('main')
const bookMark = document.getElementById('book-mark-part')
const bookMark_icon = document.querySelector('.book-mark-icon')
const bookMark_word = document.querySelector('.book-mark-word')
const circle = document.querySelector('circle')
const path = document.querySelector('path')
const green_button1 = document.querySelector('#back')
const top_background_image = document.querySelector('#top-background-image');
const backed_project = document.querySelector('#back_this_project')



green_button1.addEventListener('click',function(){
  console.log('clicked')
  header.classList.add('shade2')
  main.style.zIndex='-1'
  realHeader.style.zIndex='-2'
  top_background_image.style.zIndex='-3'
  backed_project.style.display='flex'

})



ham.addEventListener('click',function(){
if(ham.getAttribute('src')==='imgs/icon-hamburger.svg'){
    ham.src='imgs/icon-close-menu.svg'
    miniMenu.style.display='flex'
    header.classList.add('shade')
    main.style.zIndex='-1'
    disableScroll()
} else{
    ham.src='imgs/icon-hamburger.svg'
    miniMenu.style.display='none'
    header.classList.remove('shade')
    main.style.zIndex='1'
    enableScroll()
}
});

forceScrollMatch.addListener(turnItOn)
turnItOn(forceScrollMatch)
function turnItOn(forceScrollMatch){
  if(header.classList.contains('shade2')){
    main.style.zIndex='-1'
    enableScroll()
  } else if(forceScrollMatch.matches||ham.getAttribute('src')==='imgs/icon-hamburger.svg'){
    main.style.zIndex='1'
    enableScroll()
  }
  else{
    main.style.zIndex='-1'
    disableScroll()
    
  }
}



bookMark.addEventListener('click',function(){
  // bookMark.style.backgroundColor='red'
  // bookMark_icon.style.filter = 'invert(53%) sepia(96%) saturate(3217%) hue-rotate(161deg) brightness(94%) contrast(104%'
  if(bookMark_word.style.color==='rgb(20, 122, 115)'){
    bookMark_word.style.color='#7A7A7A'
    circle.style.filter=''
    path.style.fill=''
  
  } else{
    bookMark_word.style.color='rgb(20, 122, 115)'
    circle.style.filter='invert(30%) sepia(40%) saturate(3086%) hue-rotate(152deg) brightness(88%) contrast(84%)';
    path.style.fill='#FFFFFF'
  
  }

})









//Disabling Scroll 

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// Disable Scroll




////Local Storage TEst


clickCounter();

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;
}