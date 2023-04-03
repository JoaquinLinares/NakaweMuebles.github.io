const iconmenu = document.querySelector('.menu-icon');
const asidemenu = document.querySelector('.aside-menu');
const carritoicon = document.querySelector('.carrito-icon');
const asidecarrito = document.querySelector('.aside-carrito');


iconmenu.addEventListener('click',aside_menu);
carritoicon.addEventListener('click',asidecarrito);

function aside_menu(){
    asidemenu.classList.toggle('inactive'); 
      
}
