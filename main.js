const iconmenu = document.querySelector('.menu-icon');
const asidemenu = document.querySelector('.aside-menu');
const carritoicon = document.querySelector('.carrito-icon');
const asidecarrito = document.querySelector('.aside-carrito');
const cardscontainer = document.querySelector('.card-container');
const all = document.querySelector('.all');
const clothes = document.querySelector('.clothes');
const elec = document.querySelector('.elec');
const furni = document.querySelector('.furni');


iconmenu.addEventListener('click',aside_menu);
carritoicon.addEventListener('click',aside_carrito);

function aside_menu(){   
    asidemenu.classList.toggle('inactive');
    asidecarrito.classList.add('inactive');      
}

function aside_carrito(){
    asidecarrito.classList.toggle('inactive');
    asidemenu.classList.add('inactive');
}

/*
    <div class="product-card">
        <img class="product-img" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="imagen de una bicichleta moderna">
            <div class="card-info-container">
                <div>
                    <p class="peso">$ 150,00</p>
                    <p class="nombre">Bike</p>
                </div>
            <figure class="product-logo">
               <img src="./asset/logos/icons/bt_add_to_cart.svg" alt="añadir al carrito de compras">
            </figure>
        </div>
    </div>
*/
const productlist = [];

productlist.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productlist.push({
    name: 'Tv',
    price: 220,
    image: "https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960",
});
productlist.push({
    name: 'Compu',
    price: 320,
    image: "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
});
productlist.push({
    name: 'Mouse',
    price: 320,
    image: "https://s3-sa-east-1.amazonaws.com/saasargentina/oaPmQNJPQeMZynN9AOk5/imagen",
});
productlist.push({
    name: 'jeans',
    price: 320,
    image: "https://herjeans.com.ar/wp-content/uploads/2022/09/HER-JEANS-74-650x975.jpg",
});

productlist.push({
    name: 'crocs',
    price: 320,
    image: "https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000",
});

productlist.push({
    name: 'Armario',
    price: 320,
    image: "https://d2r9epyceweg5n.cloudfront.net/stores/415/369/products/mueble-guardado-2-puertas-corredizas-y-cajon1-7dd92b1977cbb6b35b15771283551651-1024-1024.jpg",
});

productlist.push({
    name: 'Tv 40p ',
    price: 320,
    image: "https://www.lg.com/ar/images/televisores/md06198536/gallery/D-02.jpg",
});
productlist.push({
    name: 'Teclado ',
    price: 320,
    image: "https://www.qloud.ar/SITES/IMG/joy-div-computers-09-2021/236_12-10-2022-06-10-23-draconic-3.jpg",
});
productlist.push({
    name: 'Parlantes ',
    price: 320,
    image: "https://www.sistemasjunin.com.ar/pub/media/catalog/product/cache/c81f65630bc9fbad3c890b9ed42bb807/p/a/parlante_genius_2.jpg",
});
productlist.push({
    name: 'Parlantes ',
    price: 320,
    image: "https://www.cyeonline.com.ar/wp-content/uploads/2022/04/MEG11336_001.jpg",
});

productlist.push({
    name: 'Zapatillas',
    price: 320,
    image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
});
productlist.push({
    name: 'Short ',
    price: 320,
    image: "https://http2.mlstatic.com/D_NQ_NP_993421-MLA53156433282_012023-W.jpg",
});
productlist.push({
    name: 'Bufandas ',
    price: 320,
    image: "https://abrapampa.com.ar/wp-content/uploads/2019/12/Bufanda-marron-1.jpg",
});
productlist.push({
    name: 'Toy ',
    price: 320,
    image: "https://cnnespanol.cnn.com/wp-content/uploads/2021/07/baby-yoda-the-child-mandalorian.png?w=620",
});
productlist.push({
    name: 'Pulsera ',
    price: 320,
    image: "https://http2.mlstatic.com/D_NQ_NP_731979-MLA48925285207_012022-O.webp",
});
productlist.push({
    name: 'Teclado ',
    price: 320,
    image: "https://www.qloud.ar/SITES/IMG/joy-div-computers-09-2021/236_12-10-2022-06-10-23-draconic-3.jpg",
});
productlist.push({
    name: 'Camiseta ',
    price: 320,
    image: "http://cdn.shopify.com/s/files/1/0567/2907/5873/products/estudiantes.png?v=1645481164",
});
productlist.push({
    name: 'Sandalias ',
    price: 320,
    image: "https://d368r8jqz0fwvm.cloudfront.net/41277-product_lg/sandalias-de-mujer-whisper.jpg",
});
productlist.push({
    name: 'Joystick ',
    price: 320,
    image: "https://images.start.com.ar/QAS-00007-3.jpg",
});
productlist.push({
    name: 'Monitor ',
    price: 320,
    image: "https://images.philips.com/is/image/PhilipsConsumer/271E1SCA_55-IMS-es_AR?$jpglarge$&wid=960",
});

for (product of productlist){

const productcard = document.createElement('div');
productcard.classList.add('product-card');


const productimg = document.createElement('img');
productimg.classList.add('product-img');
productimg.setAttribute('src', product.image);

const productinfo = document.createElement('div');
productinfo.classList.add('card-info-container');

const cardinfodiv = document.createElement('div');

const cardinfoprice = document.createElement('p');
cardinfoprice.innerText = '$' + product.price;
cardinfoprice.classList.add('peso');
const cardinfoname = document.createElement('p');
cardinfoname.innerText = product.name;
cardinfoname.classList.add('nombre');

cardinfodiv.appendChild(cardinfoprice);
cardinfodiv.appendChild(cardinfoname);

const productfigure = document.createElement('figure');
const productfigureimg = document.createElement('img');
productfigureimg.setAttribute('src', './asset/logos/icons/bt_add_to_cart.svg' );

productfigure.appendChild(productfigureimg);

productinfo.appendChild(cardinfodiv);
productinfo.appendChild(productfigure);

productcard.appendChild(productimg);
productcard.appendChild(productinfo);

cardscontainer.appendChild(productcard);


}

all.addEventListener('click', activecolorall);
clothes.addEventListener('click', activecolorclo);
elec.addEventListener('click', activecolorelec);
furni.addEventListener('click', activecolorfurni);

function activecolorall(){
    all.classList.add('active-color');
    clothes.classList.remove('active-color');
    elec.classList.remove('active-color');
    furni.classList.remove('active-color');

}

function activecolorclo(){
    all.classList.remove('active-color');
    clothes.classList.add('active-color');
    elec.classList.remove('active-color');
    furni.classList.remove('active-color');
}

function activecolorelec(){
    all.classList.remove('active-color');
    clothes.classList.remove('active-color');
    elec.classList.add('active-color');
    furni.classList.remove('active-color');
}

function activecolorfurni(){
    all.classList.remove('active-color');
    clothes.classList.remove('active-color');
    elec.classList.remove('active-color');
    furni.classList.add('active-color');
}

