const slider = document.querySelector('#slider')
let slidersection = document.querySelectorAll('.slider--section')
let slidersectionLast = slidersection[slidersection.length -1]

const btnrigth = document.querySelector('#btn-rigth')
const btnleft = document.querySelector('#btn-left')

slider.insertAdjacentElement('afterbegin',slidersectionLast)

function moverDerecha(){
    let slidersectionFirst = document.querySelectorAll('.slider--section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function () {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend',slidersectionFirst);
        slider.style.marginLeft = '-100%';
    },500);
}

function moverIzquierda(){
    let slidersection = document.querySelectorAll('.slider--section')
    let slidersectionLast = slidersection[slidersection.length -1]
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(function () {
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin',slidersectionLast);
        slider.style.marginLeft = '-100%';
    },500);
}


btnleft.addEventListener('click',function(){
    moverIzquierda();
});

btnrigth.addEventListener('click',function(){
    moverDerecha();
});



{/* <span class="close" ><img src="./asset/logos/icons/cerrar-definitivo.png" alt=""></span>

    <div class="slider" id="slider"> <!--slider--> 
        <div class="slider--section">       
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="foto" class="slider--img">
        </div>  
        <div class="slider--section">       
            <img src="https://http2.mlstatic.com/D_NQ_NP_993421-MLA53156433282_012023-W.jpg" alt="foto" class="slider--img">
        </div> 
        <div class="slider--section">       
            <img src="https://www.qloud.ar/SITES/IMG/joy-div-computers-09-2021/236_12-10-2022-06-10-23-draconic-3.jpg" alt="foto" class="slider--img">
        </div> 
        <div class="slider--section">       
            <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp" alt="foto" class="slider--img">
        </div> 
    </div> 


    <div class="slider-btn rigth" id="btn-rigth">&#62;</div>
    <div class="slider-btn left" id="btn-left">&#60;</div>

    <div class="slider-precio-contacto">
        <div class="slider-title">
            <p>Sillon termico negro<span>(12x6)</span> </p>
        </div>
        <div class="slider-contacto">
            <p>Precio:<span> $120.000</span></p>
            <button>Contactar  <i class="fa-brands fa-whatsapp"></i></button>
        </div>
    </div>

    <table>
        
        <tr >
            <th class="si">Modelo</th><td class="no">Reclinable simple</td>
        </tr>       
        
        <tr >
            <th class="no">Marca</th><td>Acme</td>
        </tr>
        <tr>
            <th class="si">Color</th><td class="no">Negro</td>
        </tr>
        <tr>
            <th class="no">Material de las patas</th><td>Plastico</td>
        </tr>
        <tr>
            <th class="si">Color de las patas</th><td class="no">negro</td>
        </tr>          

   </table>

    <div class="aside__info-description">
        <h2>Detalles</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae voluptatum saepe, natus maxime dolorem nisi sapiente iure architecto eum! Nihil sunt assumenda ipsum, placeat nulla ad. Quidem, modi neque!</p>    
                 
    </div> */}
