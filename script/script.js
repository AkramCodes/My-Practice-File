// function test() {
//     // let value = document.querySelector("#demo").value
//     // console.log(value)

//     let demo  =document.querySelector("#demo")
//     demo.value = "Rohit kumar sharma"
//     //document.querySelector("#demo").value = "Rohit kumar"
// }
           

// function set(){
//     //options
//     let select = document.querySelector("#select");
//     let options = document.querySelectorAll("#select option") //array
//     options[2].setAttribute("selected","selected")

//     //setAttribute

// }

// function check(){
//     let checkboxes = document.querySelectorAll(".checkbox") //array
//     checkboxes[1].setAttribute("checked","checked")
    
// }
// function checkAll(){
//     let checkboxes = document.querySelectorAll(".checkbox") //array
//     for(i=0;i<checkboxes.length;i++){
//         checkboxes[i].setAttribute("checked","checked")
//     }
    
//     //checkboxes[1].setAttribute("checked","checked")
    
// }

// function selected(select){
//     let content = document.querySelector("#content")
//     let value = select.value
//     switch(value){
//         case 'India': content.innerHTML = `
//             <h1>India</h1>
//             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis quia officia mollitia esse accusantium saepe inventore quidem amet temporibus voluptatem ducimus illum consequatur, id ipsum repellat pariatur! Neque, est!</p>
//             `
//         break;
//         case 'China': content.innerHTML = `
//             <h1>China</h1>
//             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis quia officia mollitia esse accusantium saepe inventore quidem amet temporibus voluptatem ducimus illum consequatur, id ipsum repellat pariatur! Neque, est!</p>
//             `
//         break;
//         case 'Bangladesh': content.innerHTML = `
//             <h1>Bangladesh</h1>
//             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis quia officia mollitia esse accusantium saepe inventore quidem amet temporibus voluptatem ducimus illum consequatur, id ipsum repellat pariatur! Neque, est!</p>
//             `
//         break;
//         default : content.innerHTML = `
//             <h1>Default page</h1>
//             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis quia officia mollitia esse accusantium saepe inventore quidem amet temporibus voluptatem ducimus illum consequatur, id ipsum repellat pariatur! Neque, est!</p>
//             `
//         break;
//     }
// }

let cart_items = []
function addToCart(id,name){
    cart_items.push({id:id,name:name,qty:0})
    document.querySelector("#cart").innerText = cart_items.length

    //for 
    console.clear()
    console.log(cart_items)
   
}