import '../sass/style.scss'
const txt=document.getElementById('txt') as HTMLHeadingElement
const btn= document.getElementById('btn') as HTMLButtonElement

btn.onclick=()=>{
    txt.innerHTML="i have been changed"

}