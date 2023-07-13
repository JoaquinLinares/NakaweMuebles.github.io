const carduno = document.querySelector('.imagen-principal-uno')
const carddos = document.querySelector('.imagen-principal-dos')

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
    name: 'bike',
    price: 12000,
    image: ["./assets/imagenes/card2.png",
    './assets/imagenes/card5.png',
    "./assets/imagenes/card6.png",
    './assets/imagenes/card7.png'],
});
productlist.push({
    name: 'Tv',
    price: 22000,
    image: ["./assets/imagenes/card5.png",
    './assets/imagenes/card5.png',
    "./assets/imagenes/card5.png",
    './assets/imagenes/card5.png'],
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
    const img2 = document.createElement('img')      
    img2.classList.add('img-cards')
    img2.setAttribute('src',productlist[1].image[0])
    carddos.appendChild(img2)
}
agregarProductos()
review()







