let toggle = document.querySelector("#toggle")
toggle.addEventListener('click',toggleXXX)

function toggleXXX(){
    let data = document.querySelector(".data")
    if(data.style.display=='block'){
        data.style.display  = 'none'
    }else{
        data.style.display = 'block'
    }
}






let stop = document.querySelector("#stop")
stop.addEventListener('click',function(){
    toggle.removeEventListener('click',toggleXXX)
})

