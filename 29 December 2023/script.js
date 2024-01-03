
// SetTimeout------------------------------------------------------------------

// setTimeout(function(){
//     let loader = document.querySelector("h1")
// loader.innerHTML = 'Content Load Hogya <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio distinctio numquam officiis autem omnis nostrum exercitationem modi doloribus vero in, impedit itaque facilis nobis mollitia dolore hic. Quos, ad. '

// loader.style.color = 'red'
// loader.style.fontSize = '40px'
// loader.style.alignItem = 'center'

// },5000);





// setInterval -----------------------------------------------------------------------------

// let a = 0;

// let interval = setInterval(function(){

//     let bottle = document.querySelector("h1")
//     bottle.innerHTML = a;
//     a++
// },100)



// SetInterval -------------------------------------------------------------------------------------

// let one = 0;

// let interval = setInterval(function(){
//     let timestart = document.querySelector("h2")
//     if(one==1000){
//         clearInterval(interval)
//         timestart.innerHTML = "Your time is over"
//     }else{
//         timestart.innerHTML = one
//     }
  
//     one++
// },10)



// setinterval for reverse timing-----------------------------------------------

let ok = setTimeout(function(){
    let two = 60

let setRevarsetime = setInterval(function(){

    let timerevarse = document.querySelector("h3")
    timerevarse.style.textAlign = "center"
    timerevarse.style.fontSize = "200px"
    timerevarse.style.color = "blue"


    if(two==0){
        clearInterval(setRevarsetime)
        timerevarse.innerHTML = 'Time is over'
        timerevarse.style.color = "red"

        
    }else{
        timerevarse.innerHTML = two
    }
    two--

    
},1000);
},2000)


// -------------------------------------------------------------------------------

// let b = 100;

// let time = setTimeout(function(){

//     let h1 = document.querySelector("h1")

//     if(b==0){
//         clearInterval(time)

//         h1.innerHTML = 'Your time is over'
//     }
//     else{
//         h1.innerHTML = b
//     }


//     b++

// },100)


let storage = localStorage = 


