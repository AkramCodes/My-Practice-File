let cart = []//array of products
function addToCart(id,name,price,qty){
    //parameter
    //i will check for exsting product
    if(cart.length!=0){
        let index = null
        for(i=0;i<cart.length;i++){
            let item = cart[i]
            if(item.id==id){
                index = i 
                break;
            }
        }
        
        if(index!=null){
            //exist
            cart[index].qty +=1
        }else{
            cart.push({id:id,name:name,price:price,qty:qty})
        }

    }else{
        cart.push({id:id,name:name,price:price,qty:qty})
    }
    
    console.log(cart)
    document.querySelector("#items").innerHTML = cart.length
}

/*
[
    {id:1,name:'',price:66554,qty:4122},
    {id:2, name:'',price:4522,qty:11}
]
*/