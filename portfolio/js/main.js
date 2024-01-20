// start loader functionality
window.onload=()=>{
    const loader=document.querySelector(".loader")
    const loadLoader=setTimeout(()=>{
        loader.style.opacity=0;
        loader.style.transition=".7s ease"
    },3000)
    // 
    const animatedContent=document.querySelector(".container")
    const animatedContent2=document.querySelector(".container-2")
    const contentLoader=setTimeout(()=>{
        animatedContent.style.opacity=1;
        animatedContent.style.transition=".7s ease"
        animatedContent2.style.opacity=1;
        animatedContent2.style.transition=".7s ease"
    },4000)
}
// end loader functionality
// start hover on links effect
const link=document.querySelectorAll(".hover-this")
const cursor=document.querySelector(".cursor")
const animateit=function(e){
    const span=document.querySelectorAll("span")
    const { offsetX: x,offsetY: y}=e,
    {offsetWidth:width,offsetHeight:height}=this,
    move =25 ,
    xMove = x / width * ( move * 2 ) - move,
    yMove = y / height * ( move * 2) - move;
}
const editCursor= e =>{
    const {clientX:x,clientY:y}=e;
    cursor.style.left=x+"px";
    cursor.style.top=y+"px";
}
link.forEach(b=>b.addEventListener("mouseover",animateit))
link.forEach(b=>b.addEventListener("mouseleave",animateit))
window.addEventListener("mousemove",editCursor)
// end hover on links functionality
// magnatic social links
const magnaticButton = document.querySelectorAll(".socialMagnaticLinks a")
magnaticButton.forEach(a=>{
    a.addEventListener("mousemove",(e)=>{
        const x =e.layerX -10;
        const y =e.layerY -10;
        const i =e.target.querySelectorAll("i")
        const bg =e.target.querySelectorAll(".bg")
        i.forEach(ele=>{
            ele.style.transform=`translate(${x/4}px,${y/4}px)`
        })
        bg.forEach(ele=>{
            bg.style.transform=`translate(${x/8}px,${y/8}px)`
        })
    })
})
magnaticButton.forEach(a=>{
    a.addEventListener("mouseleave",(e)=>{
        const x =0;
        const y =0;
        const i =e.target.querySelectorAll("i")
        const bg =e.target.querySelectorAll(".bg")
        i.forEach(ele=>{
            ele.style.transform=`translate(${x/4}px,${y/4}px)`
        })
        bg.forEach(ele=>{
            bg.style.transform=`translate(${x/8}px,${y/8}px)`
        })
    })
})
// end magnatic social links
// magnatic colorssettings
const colorsettings = document.querySelectorAll(".socialMagnaticLinks2 button")
colorsettings.forEach(button=>{
    button.addEventListener("mousemove",(e)=>{
        e.preventDefault()
        const x =e.layerX -10;
        const y =e.layerY -10;
        const i =e.target.querySelectorAll("i")
        const bg =e.target.querySelectorAll(".bg")
        i.forEach(ele=>{
            ele.style.transform=`translate(${x/4}px,${y/4}px)`
        })
        bg.forEach(ele=>{
            bg.style.transform=`translate(${x/8}px,${y/8}px)`
        })
    })
})
colorsettings.forEach(button=>{
    button.addEventListener("mouseleave",(e)=>{
        const x =0;
        const y =0;
        const i =e.target.querySelectorAll("i")
        const bg =e.target.querySelectorAll(".bg")
        i.forEach(ele=>{
            ele.style.transform=`translate(${x/4}px,${y/4}px)`
        })
        bg.forEach(ele=>{
            bg.style.transform=`translate(${x/8}px,${y/8}px)`
        })
    })
})

// setting up dark mode
const darkMode=document.querySelector(".dark-mode")
var style = getComputedStyle(document.body)
darkMode.addEventListener("click",(e)=>{
    e.preventDefault()
    if(document.documentElement.style.getPropertyValue('--primary-clr')=== '#0a192f'){
        document.documentElement.style.setProperty('--primary-clr', '#ccd6f6');
        document.documentElement.style.setProperty('--secondary-clr', '#0a192f');
    }
    else{
        document.documentElement.style.setProperty('--primary-clr', '#0a192f');
        document.documentElement.style.setProperty('--secondary-clr', '#ccd6f6');
        document.documentElement.style.setProperty('--primary-2-clr', '#64ffda');
    }
})

// end setting dark mode
// arrow functionality
const scrollUp = document.querySelector(".gotop")
let spaceScrolled = screenY
scrollUp.onclick=(e)=>{
    e.preventDefault()
    scrollTo(0,-spaceScrolled,"smooth")
}
// end arrow functionality
