const ham = document.getElementById('ham')
const miniMenu = document.getElementById('mini-option-menu')

ham.addEventListener('click',function(){
if(ham.getAttribute('src')==='imgs/icon-hamburger.svg'){
    ham.src='imgs/icon-close-menu.svg'
    miniMenu.style.display='flex'
} else{
    ham.src='imgs/icon-hamburger.svg'
    miniMenu.style.display='none'
}
});