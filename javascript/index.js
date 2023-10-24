// Generate color 
// apply color
// apply color on space bar
const cardColor = document.querySelectorAll('.card-color')

const change = document.getElementById('change')

cardColor.forEach(card => {
    card.addEventListener('click',()=>{
        copyClipboard(card.innerText)
    })


})
document.addEventListener('keydown',e => {
    if(e.key === ''){
        createColor()
    }
})

change.addEventListener('click',() => {
    createColor()
})

 async function copyClipboard(colors){
    await navigator.clipboard.writeText(colors)
    const notification1 = document.createElement('div')
    notification1.className = 'fixed top-4 z-20 bg-blue-800 rounded-full py-4 px-20 text-white'
    notification1 .innerHTML = `color<b>${colors} </b>is copied  in the clipboard`
    document.body.appendChild(notification1)
    setTimeout(()=>{
        notification1.remove()
    },3000)

}
function createColor(){
    cardColor.forEach(card =>{
        const newColor = GenerateColor()
        card.querySelector('div').style.background = newColor
        card.querySelector('p').innerText = newColor
    })
}

function GenerateColor(){
    const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let color ='#'
    for(let i = 0 ;i < 6; i++){
color += colors[Math.floor(Math.random()*colors.length)]
    }
    return color
}
console.log(GenerateColor())