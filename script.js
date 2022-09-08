const ham = document.getElementById('ham')
const miniMenu = document.getElementById('mini-option-menu')
const header = document.querySelector('header')

ham.addEventListener('click',function(){
if(ham.getAttribute('src')==='imgs/icon-hamburger.svg'){
    ham.src='imgs/icon-close-menu.svg'
    miniMenu.style.display='flex'
    header.classList.add('shade')
} else{
    ham.src='imgs/icon-hamburger.svg'
    miniMenu.style.display='none'
    header.classList.remove('shade')
}
});