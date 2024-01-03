let x = 1000
let count = document.querySelector("#count")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")

let counter  =document.querySelector("#counter")



let  interval = setInterval(increment,10)

function increment(){
    
    x--
    if(x<=0){
        clearInterval(interval)
        counter.innerHTML = 'Yo its done'
    }else{
        counter.innerHTML = x
    }
    
    
}

start.addEventListener('click',function(){
    count.addEventListener('click',increment)
})

stop.addEventListener('click',function(){
    count.removeEventListener('click',increment)

    box.removeEventListener('mouseleave',changeToBlue)
})

let box = document.querySelector(".box")
box.addEventListener('mouseenter',changeToRed)
function changeToRed(){
  
        box.style.backgroundColor='red'

}
box.addEventListener('mouseleave',changeToBlue)
function changeToBlue(){
    
        box.style.backgroundColor='green'
    
}




//setTimeout
//setInterval
//clearInterval

