window.addEventListener('DOMContentLoaded',navigator,false )
window.addEventListener('hashchange',navigator,false)

const borrar = document.querySelectorAll('.borrar')

// variables para imagenes de seccion cosas nuevas
const imguno = document.querySelector('.img-uno')
const imgdos = document.querySelector('.img-dos')
const imgtres = document.querySelector('.img-tres')
const imgcuatro = document.querySelector('.img-cuatro')

// imagenes para seccion de ver mas
const vermasTitle = document.querySelector('.ver-mas-title')
const vermasimg1 = document.querySelector('.ver-mas-img1')
const vermasimg2 = document.querySelector('.ver-mas-img2')
const vermasimg3= document.querySelector('.ver-mas-img3')
const vermasimg4= document.querySelector('.ver-mas-img4')
const vermasimg5 = document.querySelector('.ver-mas-img5')
const vermasimg6 = document.querySelector('.ver-mas-img6')
const vermasimg7 = document.querySelector('.ver-mas-img7')
const vermasimg8 = document.querySelector('.ver-mas-img8')

const moreproduct = document.querySelector('.aside-moreproduct')

// eyes de seccion principal
const eyes = document.querySelectorAll('.eyes')

eyes.forEach(element => element.addEventListener('click', () => {
    
    location.hash= '#detalle=' + element.id
    
}))

// eyes de seccion de ver mas
const vermasEye = document.querySelectorAll('.aside-eye')

vermasEye.forEach(element => element.addEventListener('click', () => {
    
    location.hash= '#detalle=' + element.id
    
}))

function navigator(){
    if(location.hash.startsWith('#detalle=')){
        imgDetails()
    } else if(location.hash.startsWith('#sillas=')){
        SeccionSillas()
    }else if(location.hash.startsWith('#muebles=')){
        SeccionMuebles()
    }else if(location.hash.startsWith('#mesadas=')){
        SeccionMesadas()
    }
    else{
        HomePage()
    }

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function SeccionSillas(){
    vermasimg1.innerHTML= ''
    vermasimg2.innerHTML= ''
    vermasimg3.innerHTML= ''
    vermasimg4.innerHTML= ''
    vermasimg5.innerHTML= ''
    vermasimg6.innerHTML= ''
    vermasimg7.innerHTML= ''
    vermasimg8.innerHTML= ''

    moreproduct.classList.remove('inactive')
    asideimginfo.classList.add('inactive')
    borrar.forEach(element => element.classList.add('inactive')) 

    vermasTitle.innerHTML= 'Sillas' //TITULO DE LA SECCION

    // ACA EMPIEZA LAS IMAGENES
    const img1 = document.createElement('img')
    img1.classList.add('img-cards')
    img1.setAttribute('src',productlist[0].image[3])
    vermasimg1.appendChild(img1)

    const img2 = document.createElement('img')
    img2.classList.add('img-cards')
    img2.setAttribute('src',productlist[0].image[2])
    vermasimg2.appendChild(img2)

    const img3 = document.createElement('img')
    img3.classList.add('img-cards')
    img3.setAttribute('src',productlist[1].image[3])
    vermasimg3.appendChild(img3)

    const img4 = document.createElement('img')
    img4.classList.add('img-cards')
    img4.setAttribute('src',productlist[0].image[0])
    vermasimg4.appendChild(img4)

    const img5 = document.createElement('img')
    img5.classList.add('img-cards')
    img5.setAttribute('src',productlist[0].image[1])
    vermasimg5.appendChild(img5)

    const img6 = document.createElement('img')
    img6.classList.add('img-cards')
    img6.setAttribute('src',productlist[0].image[1])
    vermasimg6.appendChild(img6)

    const img7 = document.createElement('img')
    img7.classList.add('img-cards')
    img7.setAttribute('src',productlist[0].image[2])
    vermasimg7.appendChild(img7)

    const img8 = document.createElement('img')
    img8.classList.add('img-cards')
    img8.setAttribute('src',productlist[0].image[3])
    vermasimg8.appendChild(img8)

}

function SeccionMuebles(){
    vermasimg1.innerHTML= ''
    vermasimg2.innerHTML= ''
    vermasimg3.innerHTML= ''
    vermasimg4.innerHTML= ''
    vermasimg5.innerHTML= ''
    vermasimg6.innerHTML= ''
    vermasimg7.innerHTML= ''
    vermasimg8.innerHTML= ''

    moreproduct.classList.remove('inactive')
    asideimginfo.classList.add('inactive')
    borrar.forEach(element => element.classList.add('inactive')) 

    vermasTitle.innerHTML= 'Muebles' //TITULO DE LA SECCION

    // ACA EMPIEZA LAS IMAGENES
    const img1 = document.createElement('img')
    img1.classList.add('img-cards')
    img1.setAttribute('src',productlist[0].image[3])
    vermasimg1.appendChild(img1)

    const img2 = document.createElement('img')
    img2.classList.add('img-cards')
    img2.setAttribute('src',productlist[0].image[2])
    vermasimg2.appendChild(img2)

    const img3 = document.createElement('img')
    img3.classList.add('img-cards')
    img3.setAttribute('src',productlist[1].image[3])
    vermasimg3.appendChild(img3)

    const img4 = document.createElement('img')
    img4.classList.add('img-cards')
    img4.setAttribute('src',productlist[0].image[0])
    vermasimg4.appendChild(img4)

    const img5 = document.createElement('img')
    img5.classList.add('img-cards')
    img5.setAttribute('src',productlist[0].image[1])
    vermasimg5.appendChild(img5)

    const img6 = document.createElement('img')
    img6.classList.add('img-cards')
    img6.setAttribute('src',productlist[0].image[1])
    vermasimg6.appendChild(img6)

    const img7 = document.createElement('img')
    img7.classList.add('img-cards')
    img7.setAttribute('src',productlist[0].image[2])
    vermasimg7.appendChild(img7)

    const img8 = document.createElement('img')
    img8.classList.add('img-cards')
    img8.setAttribute('src',productlist[0].image[3])
    vermasimg8.appendChild(img8)


}

function SeccionMesadas(){
    vermasimg1.innerHTML= ''
    vermasimg2.innerHTML= ''
    vermasimg3.innerHTML= ''
    vermasimg4.innerHTML= ''
    vermasimg5.innerHTML= ''
    vermasimg6.innerHTML= ''
    vermasimg7.innerHTML= ''
    vermasimg8.innerHTML= ''

    moreproduct.classList.remove('inactive')
    asideimginfo.classList.add('inactive')
    borrar.forEach(element => element.classList.add('inactive')) 

    vermasTitle.innerHTML= 'mesadas' //TITULO DE LA SECCION

    // ACA EMPIEZA LAS IMAGENES
    const img1 = document.createElement('img')
    img1.classList.add('img-cards')
    img1.setAttribute('src',productlist[0].image[3])
    vermasimg1.appendChild(img1)

    const img2 = document.createElement('img')
    img2.classList.add('img-cards')
    img2.setAttribute('src',productlist[0].image[2])
    vermasimg2.appendChild(img2)

    const img3 = document.createElement('img')
    img3.classList.add('img-cards')
    img3.setAttribute('src',productlist[1].image[3])
    vermasimg3.appendChild(img3)

    const img4 = document.createElement('img')
    img4.classList.add('img-cards')
    img4.setAttribute('src',productlist[0].image[0])
    vermasimg4.appendChild(img4)

    const img5 = document.createElement('img')
    img5.classList.add('img-cards')
    img5.setAttribute('src',productlist[0].image[1])
    vermasimg5.appendChild(img5)

    const img6 = document.createElement('img')
    img6.classList.add('img-cards')
    img6.setAttribute('src',productlist[0].image[1])
    vermasimg6.appendChild(img6)

    const img7 = document.createElement('img')
    img7.classList.add('img-cards')
    img7.setAttribute('src',productlist[0].image[2])
    vermasimg7.appendChild(img7)

    const img8 = document.createElement('img')
    img8.classList.add('img-cards')
    img8.setAttribute('src',productlist[0].image[3])
    vermasimg8.appendChild(img8)


}


function imgDetails(){
    imguno.innerHTML= ""
    imgdos.innerHTML= ""
    imgtres.innerHTML= ""
    imgcuatro.innerHTML= ""
    
    asideimginfo.classList.remove('inactive')    
    moreproduct.classList.add('inactive')
    borrar.forEach(element => element.classList.add('inactive'))
    
    
    const [idName,idImage] = location.hash.split('=')
    // eyes de vista principal
    if(idImage == 1){
    const img0 = document.createElement('img')
    img0.classList.add('slider--img')    
    img0.setAttribute('src', productlist[0].image[0])
    imguno.appendChild(img0)

    const img1 = document.createElement('img')
    img1.classList.add('slider--img')    
    img1.setAttribute('src', productlist[0].image[1])
    imgdos.appendChild(img1)

    const img2 = document.createElement('img')
    img2.classList.add('slider--img')    
    img2.setAttribute('src', productlist[0].image[2])
    imgtres.appendChild(img2)

    const img3 = document.createElement('img')
    img3.classList.add('slider--img')    
    img3.setAttribute('src', productlist[0].image[3])
    imgcuatro.appendChild(img3)
    }   

    if(idImage == 2){
        const img0 = document.createElement('img')
        img0.classList.add('slider--img')    
        img0.setAttribute('src', productlist[1].image[0])
        imguno.appendChild(img0)
    
        const img1 = document.createElement('img')
        img1.classList.add('slider--img')    
        img1.setAttribute('src', productlist[1].image[1])
        imgdos.appendChild(img1)
    
        const img2 = document.createElement('img')
        img2.classList.add('slider--img')    
        img2.setAttribute('src', productlist[1].image[2])
        imgtres.appendChild(img2)
    
        const img3 = document.createElement('img')
        img3.classList.add('slider--img')    
        img3.setAttribute('src', productlist[1].image[3])
        imgcuatro.appendChild(img3)
    } 

    if(idImage == 3){
            const img0 = document.createElement('img')
            img0.classList.add('slider--img')    
            img0.setAttribute('src', productlist[2].image[0])
            imguno.appendChild(img0)
        
            const img1 = document.createElement('img')
            img1.classList.add('slider--img')    
            img1.setAttribute('src', productlist[2].image[1])
            imgdos.appendChild(img1)
        
            const img2 = document.createElement('img')
            img2.classList.add('slider--img')    
            img2.setAttribute('src', productlist[2].image[2])
            imgtres.appendChild(img2)
        
            const img3 = document.createElement('img')
            img3.classList.add('slider--img')    
            img3.setAttribute('src', productlist[2].image[3])
            imgcuatro.appendChild(img3)
    } 

    if(idImage == 4){
                const img0 = document.createElement('img')
                img0.classList.add('slider--img')    
                img0.setAttribute('src', productlist[3].image[0])
                imguno.appendChild(img0)
            
                const img1 = document.createElement('img')
                img1.classList.add('slider--img')    
                img1.setAttribute('src', productlist[3].image[1])
                imgdos.appendChild(img1)
            
                const img2 = document.createElement('img')
                img2.classList.add('slider--img')    
                img2.setAttribute('src', productlist[3].image[2])
                imgtres.appendChild(img2)
            
                const img3 = document.createElement('img')
                img3.classList.add('slider--img')    
                img3.setAttribute('src', productlist[3].image[3])
                imgcuatro.appendChild(img3)
     } 

    if(idImage == 5){
        const img0 = document.createElement('img')
        img0.classList.add('slider--img')    
        img0.setAttribute('src', productlist[0].image[0])
        imguno.appendChild(img0)
    
        const img1 = document.createElement('img')
        img1.classList.add('slider--img')    
        img1.setAttribute('src', productlist[0].image[1])
        imgdos.appendChild(img1)
    
        const img2 = document.createElement('img')
        img2.classList.add('slider--img')    
        img2.setAttribute('src', productlist[0].image[2])
        imgtres.appendChild(img2)
    
        const img3 = document.createElement('img')
        img3.classList.add('slider--img')    
        img3.setAttribute('src', productlist[0].image[3])
        imgcuatro.appendChild(img3)
    }

    if(idImage == 6){
        const img0 = document.createElement('img')
        img0.classList.add('slider--img')    
        img0.setAttribute('src', productlist[1].image[0])
        imguno.appendChild(img0)
    
        const img1 = document.createElement('img')
        img1.classList.add('slider--img')    
        img1.setAttribute('src', productlist[1].image[1])
        imgdos.appendChild(img1)
    
        const img2 = document.createElement('img')
        img2.classList.add('slider--img')    
        img2.setAttribute('src', productlist[1].image[2])
        imgtres.appendChild(img2)
    
        const img3 = document.createElement('img')
        img3.classList.add('slider--img')    
        img3.setAttribute('src', productlist[1].image[3])
        imgcuatro.appendChild(img3)
    }   
    if(idImage == 7){
        const img0 = document.createElement('img')
        img0.classList.add('slider--img')    
        img0.setAttribute('src', productlist[3].image[0])
        imguno.appendChild(img0)
    
        const img1 = document.createElement('img')
        img1.classList.add('slider--img')    
        img1.setAttribute('src', productlist[3].image[1])
        imgdos.appendChild(img1)
    
        const img2 = document.createElement('img')
        img2.classList.add('slider--img')    
        img2.setAttribute('src', productlist[3].image[2])
        imgtres.appendChild(img2)
    
        const img3 = document.createElement('img')
        img3.classList.add('slider--img')    
        img3.setAttribute('src', productlist[3].image[3])
        imgcuatro.appendChild(img3)
    } 
    if(idImage == 8){
        const img0 = document.createElement('img')
        img0.classList.add('slider--img')    
        img0.setAttribute('src', productlist[3].image[0])
        imguno.appendChild(img0)
    
        const img1 = document.createElement('img')
        img1.classList.add('slider--img')    
        img1.setAttribute('src', productlist[3].image[1])
        imgdos.appendChild(img1)
    
        const img2 = document.createElement('img')
        img2.classList.add('slider--img')    
        img2.setAttribute('src', productlist[3].image[2])
        imgtres.appendChild(img2)
    
        const img3 = document.createElement('img')
        img3.classList.add('slider--img')    
        img3.setAttribute('src', productlist[3].image[3])
        imgcuatro.appendChild(img3)
    } 
    // eyes de seccion de ver mas
    if(idImage == 'aside-1'){
        const img0 = document.createElement('img')
        img0.classList.add('slider--img')    
        img0.setAttribute('src', productlist[0].image[0])
        imguno.appendChild(img0)
    
        const img1 = document.createElement('img')
        img1.classList.add('slider--img')    
        img1.setAttribute('src', productlist[0].image[1])
        imgdos.appendChild(img1)
    
        const img2 = document.createElement('img')
        img2.classList.add('slider--img')    
        img2.setAttribute('src', productlist[0].image[2])
        imgtres.appendChild(img2)
    
        const img3 = document.createElement('img')
        img3.classList.add('slider--img')    
        img3.setAttribute('src', productlist[0].image[3])
        imgcuatro.appendChild(img3)
        }   
    
        if(idImage == 'aside-2'){
            const img0 = document.createElement('img')
            img0.classList.add('slider--img')    
            img0.setAttribute('src', productlist[1].image[0])
            imguno.appendChild(img0)
        
            const img1 = document.createElement('img')
            img1.classList.add('slider--img')    
            img1.setAttribute('src', productlist[1].image[1])
            imgdos.appendChild(img1)
        
            const img2 = document.createElement('img')
            img2.classList.add('slider--img')    
            img2.setAttribute('src', productlist[1].image[2])
            imgtres.appendChild(img2)
        
            const img3 = document.createElement('img')
            img3.classList.add('slider--img')    
            img3.setAttribute('src', productlist[1].image[3])
            imgcuatro.appendChild(img3)
        } 
    
        if(idImage == 'aside-3'){
                const img0 = document.createElement('img')
                img0.classList.add('slider--img')    
                img0.setAttribute('src', productlist[2].image[0])
                imguno.appendChild(img0)
            
                const img1 = document.createElement('img')
                img1.classList.add('slider--img')    
                img1.setAttribute('src', productlist[2].image[1])
                imgdos.appendChild(img1)
            
                const img2 = document.createElement('img')
                img2.classList.add('slider--img')    
                img2.setAttribute('src', productlist[2].image[2])
                imgtres.appendChild(img2)
            
                const img3 = document.createElement('img')
                img3.classList.add('slider--img')    
                img3.setAttribute('src', productlist[2].image[3])
                imgcuatro.appendChild(img3)
        } 
    
        if(idImage == 'aside-4'){
                    const img0 = document.createElement('img')
                    img0.classList.add('slider--img')    
                    img0.setAttribute('src', productlist[3].image[0])
                    imguno.appendChild(img0)
                
                    const img1 = document.createElement('img')
                    img1.classList.add('slider--img')    
                    img1.setAttribute('src', productlist[3].image[1])
                    imgdos.appendChild(img1)
                
                    const img2 = document.createElement('img')
                    img2.classList.add('slider--img')    
                    img2.setAttribute('src', productlist[3].image[2])
                    imgtres.appendChild(img2)
                
                    const img3 = document.createElement('img')
                    img3.classList.add('slider--img')    
                    img3.setAttribute('src', productlist[3].image[3])
                    imgcuatro.appendChild(img3)
         } 
    
        if(idImage == 'aside-5'){
            const img0 = document.createElement('img')
            img0.classList.add('slider--img')    
            img0.setAttribute('src', productlist[0].image[0])
            imguno.appendChild(img0)
        
            const img1 = document.createElement('img')
            img1.classList.add('slider--img')    
            img1.setAttribute('src', productlist[0].image[1])
            imgdos.appendChild(img1)
        
            const img2 = document.createElement('img')
            img2.classList.add('slider--img')    
            img2.setAttribute('src', productlist[0].image[2])
            imgtres.appendChild(img2)
        
            const img3 = document.createElement('img')
            img3.classList.add('slider--img')    
            img3.setAttribute('src', productlist[0].image[3])
            imgcuatro.appendChild(img3)
        }
    
        if(idImage == 'aside-6'){
            const img0 = document.createElement('img')
            img0.classList.add('slider--img')    
            img0.setAttribute('src', productlist[1].image[0])
            imguno.appendChild(img0)
        
            const img1 = document.createElement('img')
            img1.classList.add('slider--img')    
            img1.setAttribute('src', productlist[1].image[1])
            imgdos.appendChild(img1)
        
            const img2 = document.createElement('img')
            img2.classList.add('slider--img')    
            img2.setAttribute('src', productlist[1].image[2])
            imgtres.appendChild(img2)
        
            const img3 = document.createElement('img')
            img3.classList.add('slider--img')    
            img3.setAttribute('src', productlist[1].image[3])
            imgcuatro.appendChild(img3)
        }   
        if(idImage == 'aside-7'){
            const img0 = document.createElement('img')
            img0.classList.add('slider--img')    
            img0.setAttribute('src', productlist[3].image[0])
            imguno.appendChild(img0)
        
            const img1 = document.createElement('img')
            img1.classList.add('slider--img')    
            img1.setAttribute('src', productlist[3].image[1])
            imgdos.appendChild(img1)
        
            const img2 = document.createElement('img')
            img2.classList.add('slider--img')    
            img2.setAttribute('src', productlist[3].image[2])
            imgtres.appendChild(img2)
        
            const img3 = document.createElement('img')
            img3.classList.add('slider--img')    
            img3.setAttribute('src', productlist[3].image[3])
            imgcuatro.appendChild(img3)
        } 
        if(idImage == 'aside-8'){
            const img0 = document.createElement('img')
            img0.classList.add('slider--img')    
            img0.setAttribute('src', productlist[3].image[0])
            imguno.appendChild(img0)
        
            const img1 = document.createElement('img')
            img1.classList.add('slider--img')    
            img1.setAttribute('src', productlist[3].image[1])
            imgdos.appendChild(img1)
        
            const img2 = document.createElement('img')
            img2.classList.add('slider--img')    
            img2.setAttribute('src', productlist[3].image[2])
            imgtres.appendChild(img2)
        
            const img3 = document.createElement('img')
            img3.classList.add('slider--img')    
            img3.setAttribute('src', productlist[3].image[3])
            imgcuatro.appendChild(img3)
        } 

}

function HomePage(){
    
    asideimginfo.classList.add('inactive')
    borrar.forEach(element => element.classList.remove('inactive'))
    moreproduct.classList.add('inactive')
}
