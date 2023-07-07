const iconmenu = document.querySelector('.menu-icon');
const asidemenu = document.querySelector('.aside-menu');

const cardscontainermesada = document.querySelector('.card-container-mesadas');
const cardscontainersillones = document.querySelector('.card-container-sillones');
const cardscontainermuebles = document.querySelector('.card-container-muebles');

const sectionMuebles = document.querySelector('.main__sector-images-muebles')
const sectionSillones = document.querySelector('.main__sector-images-sillones')
const sectionMesadas = document.querySelector('.main__sector-images-mesadas')

const main = document.querySelector('#main')
const footer = document.querySelector('#footer')

const asideimginfo = document.querySelector('.aside-info')


iconmenu.addEventListener('click',aside_menu);


function aside_menu(){   
    asidemenu.classList.toggle('inactive');          
}

const clickSector1 = document.querySelector('#click-sector1')
const clickSector2 = document.querySelector('#click-sector2')
const clickSector3= document.querySelector('#click-sector3')
const clickSector4 = document.querySelector('#click-sector4')


clickSector1.addEventListener('click', function(){ 
    asidemenu.classList.add('inactive')
    asideimginfo.classList.add('inactive')
    main.classList.remove('inactive')
    footer.classList.remove('inactive')
     })

clickSector2.addEventListener('click', function(){
     asidemenu.classList.add('inactive')
     asideimginfo.classList.add('inactive')
     main.classList.remove('inactive')
     footer.classList.remove('inactive')
    })
clickSector3.addEventListener('click', function(){ 
    asidemenu.classList.add('inactive')
    asideimginfo.classList.add('inactive')
    main.classList.remove('inactive')
    footer.classList.remove('inactive')
})
clickSector4.addEventListener('click', function(){ 
    asidemenu.classList.add('inactive')
    asideimginfo.classList.add('inactive')
    main.classList.remove('inactive')
    footer.classList.remove('inactive')
})

const cruzCerrar = document.querySelector('.close')

cruzCerrar.addEventListener('click', () => {
    asideimginfo.classList.add('inactive')
    main.classList.remove('inactive')
    footer.classList.remove('inactive')
})

const productlist = [];
const productSillones = []
const productMuebles = []

productlist.push({
    name: 'Bike',
    price: 12000,
    image: ["https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});
productlist.push({
    name: 'Tv',
    price: 22000,
    image: ["https://www.qloud.ar/SITES/IMG/joy-div-computers-09-2021/236_12-10-2022-06-10-23-draconic-3.jpg",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});
productlist.push({
    name: 'Compu',
    price: 32000,
    image: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});
productlist.push({
    name: 'Compu',
    price: 32000,
    image: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});


productSillones.push({
    name: 'crocs',
    price: 32000,
    image: "https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000",
});

productSillones.push({
    name: 'Armario',
    price: 32000,
    image: "https://d2r9epyceweg5n.cloudfront.net/stores/415/369/products/mueble-guardado-2-puertas-corredizas-y-cajon1-7dd92b1977cbb6b35b15771283551651-1024-1024.jpg",
});

productSillones.push({
    name: 'Tv 40p ',
    price: 32000,
    image: "https://www.lg.com/ar/images/televisores/md06198536/gallery/D-02.jpg",
});
productSillones.push({
    name: 'Teclado ',
    price: 32000,
    image: "https://www.qloud.ar/SITES/IMG/joy-div-computers-09-2021/236_12-10-2022-06-10-23-draconic-3.jpg",
});
productSillones.push({
    name: 'Parlantes ',
    price: 32000,
    image: "https://www.sistemasjunin.com.ar/pub/media/catalog/product/cache/c81f65630bc9fbad3c890b9ed42bb807/p/a/parlante_genius_2.jpg",
});
productMuebles.push({
    name: 'Parlantes ',
    price: 32000,
    image: "https://www.cyeonline.com.ar/wp-content/uploads/2022/04/MEG11336_001.jpg",
});

productMuebles.push({
    name: 'Zapatillas',
    price: 32000,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
});
productMuebles.push({
    name: 'Short ',
    price: 32000,
    image: "https://http2.mlstatic.com/D_NQ_NP_993421-MLA53156433282_012023-W.jpg",
});
productMuebles.push({
    name: 'Bufandas ',
    price: 32000,
    image: "https://abrapampa.com.ar/wp-content/uploads/2019/12/Bufanda-marron-1.jpg",
});


function productList(){
    for (product of productlist){

        const productcard = document.createElement('div');
        productcard.classList.add('product-card');
        
        
        const productimg = document.createElement('img');
        productimg.classList.add('product-img');
        productimg.setAttribute('src', product.image[0]);

        // *************************************************************************************
        const Guardado = {nombre: product.name,
                         precio: product.price,
                         imagen: product.image,}

        productimg.addEventListener('click',() => {
        asideimginfo.classList.remove('inactive')
        main.classList.add('inactive')
        footer.classList.add('inactive')


        // ImgDetails(Guardado)
        
    })

        // ********************************************************************************
        const productinfo = document.createElement('div');
        productinfo.classList.add('card-info-container');
        
        const cardinfodiv = document.createElement('div');        
       
        const cardinfoname = document.createElement('p');
        cardinfoname.innerText = product.name;
        cardinfoname.classList.add('nombre');        
        
        cardinfodiv.appendChild(cardinfoname);        

        productinfo.appendChild(cardinfodiv);        
        
        productcard.appendChild(productimg);
        productcard.appendChild(productinfo);
        
        cardscontainermesada.appendChild(productcard);
        
        sectionMesadas.appendChild(cardscontainermesada);
        }
}

function ProductSillones(){
    for (product of productSillones){

        const productcard = document.createElement('div');
        productcard.classList.add('product-card');
        
        
        const productimg = document.createElement('img');
        productimg.classList.add('product-img');
        productimg.setAttribute('src', product.image);

         // *************************************************************************************
         const Guardado = {nombre: product.name,
            precio: product.price,
            imagen: product.image,}

            productimg.addEventListener('click',() => {
            asideimginfo.classList.remove('inactive')
            main.classList.add('inactive')
            footer.classList.add('inactive')


            // ImgDetails(Guardado)

            })

// ********************************************************************************
        
        const productinfo = document.createElement('div');
        productinfo.classList.add('card-info-container');
        
        const cardinfodiv = document.createElement('div');
        
       
        const cardinfoname = document.createElement('p');
        cardinfoname.innerText = product.name;
        cardinfoname.classList.add('nombre');
        
        
        cardinfodiv.appendChild(cardinfoname);    
        
        productinfo.appendChild(cardinfodiv);      
        
        productcard.appendChild(productimg);
        productcard.appendChild(productinfo);
        
        cardscontainersillones.appendChild(productcard);
        
        sectionSillones.appendChild(cardscontainersillones);
    }
    
}
 
function ProductMuebles(){
    for (product of productMuebles){

        const productcard = document.createElement('div');
        productcard.classList.add('product-card');
        
        
        const productimg = document.createElement('img');
        productimg.classList.add('product-img');
        productimg.setAttribute('src', product.image);

         // *************************************************************************************
            const Guardado = {nombre: product.name,
            precio: product.price,
            imagen: product.image,}

            productimg.addEventListener('click',() => {
            asideimginfo.classList.remove('inactive')
            main.classList.add('inactive')
            footer.classList.add('inactive')


            // ImgDetails(Guardado)

            })

// ********************************************************************************
        
        const productinfo = document.createElement('div');
        productinfo.classList.add('card-info-container');
        
        const cardinfodiv = document.createElement('div');        
       
        const cardinfoname = document.createElement('p');
        cardinfoname.innerText = product.name;
        cardinfoname.classList.add('nombre');        
       
        cardinfodiv.appendChild(cardinfoname);        
        
        productinfo.appendChild(cardinfodiv);        
        
        productcard.appendChild(productimg);
        productcard.appendChild(productinfo);
        
        cardscontainermuebles.appendChild(productcard);
        
        sectionMuebles.appendChild(cardscontainermuebles);
    }
}


// function ImgDetails(objeto){       
       
//         // Etiqueta SPAN
//        const span = document.createElement('span')
//        span.classList.add('close')
//        const spanText = document.createElement('img')
//        spanText.setAttribute('src','./asset/logos/icons/cerrar-definitivo.png')    
//        span.appendChild(spanText);
   
//        // etiqueta div slider
//        const DivContainer = document.createElement('div')
//        DivContainer.classList.add('slider')
//        DivContainer.setAttribute('id','slider')
//        // etiqueta slider-section
   
//        const sliderSection1 = document.createElement('div')
//        sliderSection1.classList.add('slider--section')
   
//        const IMG1 = document.createElement('img')
//        IMG1.setAttribute('src',objeto.imagen[0]);
//        IMG1.classList.add('slider--img')
//        sliderSection1.appendChild(IMG1)  
//        console.log(objeto.imagen[0]);     
   
   
//        const sliderSection2 = document.createElement('div')
//        sliderSection2.classList.add('slider--section')
   
//        const IMG2 = document.createElement('img')
//        IMG2.setAttribute('src',objeto.imagen[1]);
//        IMG2.classList.add('slider--img')
//        sliderSection2.appendChild(IMG2)
   
//        const sliderSection3 = document.createElement('div')
//        sliderSection3.classList.add('slider--section')
   
//        const IMG3 = document.createElement('img')
//        IMG3.setAttribute('src',objeto.imagen[2]);
//        IMG3.classList.add('slider--img')
//        sliderSection3.appendChild(IMG3)
   
//        const sliderSection4 = document.createElement('div')
//        sliderSection4.classList.add('slider--section')
   
//        const IMG4 = document.createElement('img')
//        IMG4.setAttribute('src',objeto.imagen[3]);
//        IMG4.classList.add('slider--img')
//        sliderSection4.appendChild(IMG4)
           
//        DivContainer.appendChild(sliderSection1)
//        DivContainer.appendChild(sliderSection2)
//        DivContainer.appendChild(sliderSection3)
//        DivContainer.appendChild(sliderSection4)
   
//        // slider botones
//        const divRigth = document.createElement('div')
//        divRigth.classList.add('slider-btn')
//        divRigth.classList.add('rigth')
//        divRigth.setAttribute('id', 'btn-rigth')
//        divRigth.innerHTML = '&#62;'
   
//        const divleft = document.createElement('div')
//        divleft.classList.add('slider-btn')
//        divleft.classList.add('left')
//        divleft.setAttribute('id', 'btn-left')
//        divleft.innerHTML = '&#60;'
   
//        // slider precio-contacto
//        const divPrecioContacto = document.createElement('div')
//        divPrecioContacto.classList.add('slider-precio-contacto')
   
//        const divTitle = document.createElement('div')
//        divTitle.classList.add('slider-title')
   
//        const divTitleText = document.createElement('p')
//        divTitleText.innerHTML = objeto.nombre
//        divTitle.appendChild(divTitleText)
   
//        const divPrice = document.createElement('div')
//        divPrice.classList.add('slider-contacto')
   
//        const Precio = document.createElement('p')
//        Precio.innerHTML = 'Precio:' + objeto.precio
//        const btn = document.createElement('button')
//        const IconWP = document.createElement('i')
//        IconWP.classList.add('fa-brands')
//        IconWP.classList.add('fa-whatsapp')
//        btn.innerHTML = 'Contactar ' + IconWP
   
//        divPrice.appendChild(Precio)
//        divPrice.appendChild(btn)
//        divPrecioContacto.appendChild(divTitle)
//        divPrecioContacto.appendChild(divPrice)
   
//        // seccion tablas
   
//        // seccion descripcion
//        const divDescription = document.createElement('div')
//        divDescription.classList.add('aside__info-description')
//        const h2 = document.createElement('h2')
//        h2.innerHTML= 'Detalles'
//        const Pdetalles = document.createElement('p')
//        Pdetalles.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quae voluptatum saepe, natus maxime dolorem nisi sapiente iure architecto eum! Nihil sunt assumenda ipsum, placeat nulla ad. Quidem, modi neque!'
   
//        divDescription.appendChild(h2)
//        divDescription.appendChild(Pdetalles)
   
//        asideimginfo.appendChild(span)
//        asideimginfo.appendChild(DivContainer)
//        asideimginfo.appendChild(divRigth)
//        asideimginfo.appendChild(divleft)
//        asideimginfo.appendChild(divPrecioContacto)
//        asideimginfo.appendChild(divDescription)   
       
               
// }  

// function Pepito(imagen){
//     console.log(imagen.nombre)
// }

productList()
ProductSillones()
ProductMuebles()

