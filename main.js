// imagenes de pagina principal
const carduno = document.querySelector('.imagen-principal-uno')
const carddos = document.querySelector('.imagen-principal-dos')
const cardtres = document.querySelector('.imagen-principal-tres')
const cardcua = document.querySelector('.imagen-principal-cuatro')
const cardcin = document.querySelector('.imagen-principal-cinco')
const cardseis = document.querySelector('.imagen-principal-seis')
const cardsiet = document.querySelector('.imagen-principal-siete')
const cardocho = document.querySelector('.imagen-principal-ocho')

// titulos de pagina principal
const cardtitle1 = document.querySelector('.title-1')
const cardtitle2 = document.querySelector('.title-2')
const cardtitle3 = document.querySelector('.title-3')
const cardtitle4 = document.querySelector('.title-4')
const cardtitle5 = document.querySelector('.title-5')
const cardtitle6 = document.querySelector('.title-6')
const cardtitle7 = document.querySelector('.title-7')
const cardtitle8 = document.querySelector('.title-8')

// precios de pagina principal
const price1 = document.querySelector('.price-1')
const price2 = document.querySelector('.price-2')
const price3 = document.querySelector('.price-3')
const price4 = document.querySelector('.price-4')
const price5 = document.querySelector('.price-5')
const price6 = document.querySelector('.price-6')
const price7 = document.querySelector('.price-7')
const price8 = document.querySelector('.price-8')

// etuiqueta a de pagina principal
const a1 = document.querySelector('#pedir-1')
const a2 = document.querySelector('#pedir-2')
const a3 = document.querySelector('#pedir-3')
const a4 = document.querySelector('#pedir-4')
const a5 = document.querySelector('#pedir-5')
const a6 = document.querySelector('#pedir-6')
const a7 = document.querySelector('#pedir-7')
const a8 = document.querySelector('#pedir-8')



const asideimginfo = document.querySelector('.aside-info')

const cruzCerrar = document.querySelector('.close')

const buttonVerMasSillas = document.querySelector("#sillas")
buttonVerMasSillas.addEventListener('click', () => {location.hash= 'sillas='} )

const buttonVerMasMuebles = document.querySelector("#muebles")
buttonVerMasMuebles.addEventListener('click', () => {location.hash= 'muebles='} )

const buttonVerMasMesadas = document.querySelector("#mesadas")
buttonVerMasMesadas.addEventListener('click', () => {location.hash= 'mesadas='} )



cruzCerrar.addEventListener('click', () => {
    // asideimginfo.classList.add('inactive')   
    // location.hash='home'  
    history.back();   
})


const productlist = [];
const productSillones = [];
const productMuebles = [];

function agregarProductos(){
    productlist.push({
    name: 'Silla de cuerina sumergible',
    price: 12000,
    image: ["./assets/imagenes/card2.png",
    './assets/imagenes/card5.png',
    "./assets/imagenes/card6.png",
    './assets/imagenes/card7.png'],
    modelo: 'reclinable',
    marca: 'acme',
    color: 'azul',
    material: 'madera',
    colorPatas: 'negras',
    detalle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, suscipit. Amet fugit iusto, nostrum et est, aspernatur eos suscipit ea sint, ipsam fuga dolorem. Error cum eius dolorum? Atque, quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam magnam quod eum vero ducimus, reiciendis, ipsum numquam id quas adipisci rem! Excepturi corrupti neque consequatur vel minima totam itaque expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio soluta excepturi ut sit nobis quidem maiores iusto nostrum blanditiis! Dolore porro explicabo eum facere, neque quaerat eos animi odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae explicabo repellendus aspernatur omnis eveniet quia eos assumenda magnam officia tempore ipsum cumque in, soluta voluptates alias qui obcaecati? Eaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur autem, earum quam voluptates esse accusantium accusamus provident officia possimus itaque rerum totam aspernatur veniam distinctio ullam quaerat molestiae nisi est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti eveniet sapiente animi. Inventore totam, debitis doloremque, aut reiciendis itaque obcaecati cum saepe possimus id explicabo dolorum cumque, nobis voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum nulla sit voluptates! Consequatur pariatur sit et, in consequuntur cupiditate veniam eligendi! Amet, omnis dolores maiores similique totam veritatis dolorem!",

});
productlist.push({
    name: 'Tv',
    price: 22000,
    image: ["./assets/imagenes/card5.png",
    './assets/imagenes/card5.png',
    "./assets/imagenes/card5.png",
    './assets/imagenes/card5.png'],
    modelo: 'reclinable',
    marca: 'acme',
    color: 'azul',
    material: 'madera',
    colorPatas: 'negras',
    detalle: "Sillon termico muy adecuado para living, para poder descansar en ratos libres, cuenta con respaldo y un florero de regalo, lalallalalaal caracteristicas al azar",

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
    image: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});
productSillones.push({
    name: 'Armario',
    price: 32000,
    image: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});
productSillones.push({
    name: 'Tv 40p ',
    price: 32000,
    image: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});
productSillones.push({
    name: 'Teclado ',
    price: 32000,
    image: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});
productSillones.push({
    name: 'Parlantes ',
    price: 32000,
    image: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});
productMuebles.push({
    name: 'Parlantes ',
    price: 32000,
    image: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});
productMuebles.push({
    name: 'Zapatillas',
    price: 32000,
    image: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});
productMuebles.push({
    name: 'Short ',
    price: 32000,
    image: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});
productMuebles.push({
    name: 'Bufandas ',
    price: 32000,
    image: ["https://d3ugyf2ht6aenh.cloudfront.net/stores/001/149/185/products/ef2e33d3-a3d7-46b6-ac5a-86e125cd4e34-ef341d5b17c2ce157216793523377531-640-0.webp",
    'https://images.philips.com/is/image/PhilipsConsumer/50PUG6513_77-IMS-es_AR?$jpglarge$&wid=960',
    "https://infonegocios.info/content/images/2023/02/12/362829/ASUS-intel.jpg",
    'https://crocsarg.vtexassets.com/arquivos/ids/156431/Imagen-1.jpg?v=637702793174970000'],
});

}

function review(){
        
    const img1 = document.createElement('img')      
    img1.classList.add('img-cards')
    img1.setAttribute('src',productlist[0].image[0])
    carduno.appendChild(img1)    
    cardtitle1.innerHTML= productlist[0].name
    price1.innerHTML=productlist[0].price
    a1.setAttribute('href','https://api.whatsapp.com/send?phone=541130447800&text=hola, quisiera pedirte el producto' + " " + productlist[0].name)

    const img2 = document.createElement('img')      
    img2.classList.add('img-cards')
    img2.setAttribute('src',productlist[1].image[0])
    carddos.appendChild(img2)    
    cardtitle2.innerHTML= productlist[1].name
    price2.innerHTML=productlist[1].price
    a2.setAttribute('href','https://api.whatsapp.com/send?phone=541130447800&text=hola, quisiera pedirte el producto' + " " + productlist[1].name)

    const img3 = document.createElement('img')      
    img3.classList.add('img-cards')
    img3.setAttribute('src',productlist[2].image[0])
    cardtres.appendChild(img3)    
    cardtitle3.innerHTML= productlist[2].name
    price3.innerHTML=productlist[2].price
    a3.setAttribute('href','https://api.whatsapp.com/send?phone=541130447800&text=hola, quisiera pedirte el producto' + " " + productlist[2].name)

    const img4 = document.createElement('img')      
    img4.classList.add('img-cards')
    img4.setAttribute('src',productlist[3].image[0])
    cardcua.appendChild(img4)    
    cardtitle4.innerHTML= productlist[3].name
    price4.innerHTML=productlist[3].price
    a4.setAttribute('href','https://api.whatsapp.com/send?phone=541130447800&text=hola, quisiera pedirte el producto' + " " + productlist[3].name)

    const img5 = document.createElement('img')      
    img5.classList.add('img-cards')
    img5.setAttribute('src',productlist[1].image[1])
    cardcin.appendChild(img5)    
    cardtitle5.innerHTML= productlist[1].name
    price5.innerHTML=productlist[1].price
    a5.setAttribute('href','https://api.whatsapp.com/send?phone=541130447800&text=hola, quisiera pedirte el producto' + " " + productlist[1].name)

    const img6 = document.createElement('img')      
    img6.classList.add('img-cards')
    img6.setAttribute('src',productlist[2].image[2])
    cardseis.appendChild(img6)    
    cardtitle6.innerHTML= productlist[2].name
    price6.innerHTML=productlist[2].price
    a6.setAttribute('href','https://api.whatsapp.com/send?phone=541130447800&text=hola, quisiera pedirte el producto' + " " + productlist[2].name)

    const img7 = document.createElement('img')      
    img7.classList.add('img-cards')
    img7.setAttribute('src',productlist[0].image[3])
    cardsiet.appendChild(img7)    
    cardtitle7.innerHTML= productlist[0].name
    price7.innerHTML=productlist[0].price
    a7.setAttribute('href','https://api.whatsapp.com/send?phone=541130447800&text=hola, quisiera pedirte el producto' + " " + productlist[3].name)

    const img8 = document.createElement('img')      
    img8.classList.add('img-cards')
    img8.setAttribute('src',productlist[1].image[3])
    cardocho.appendChild(img8)    
    cardtitle8.innerHTML= productlist[1].name
    price8.innerHTML=productlist[1].price
    a8.setAttribute('href','https://api.whatsapp.com/send?phone=541130447800&text=hola, quisiera pedirte el producto' + " " + productlist[1].name)

}

agregarProductos()
review()







