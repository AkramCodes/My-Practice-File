

let add_to_cart = []
function addToCart(id,name,qty){  
    add_to_cart.push({id:id, name:name, Qty:1})
    document.querySelector("#cart").innerText = add_to_cart.length

    console.log(add_to_cart)


}
// let add_to_cart = [];

// function addToCart(id, name, qty) {
//     // Check if the item with the given id already exists in the cart
//     const existingItemIndex = add_to_cart.findIndex(item => item.id === id);

//     if (existingItemIndex !== -1) {
//         // If the item exists, update the quantity
//         add_to_cart[existingItemIndex].Qty += qty;
//     } else {
//         // If the item doesn't exist, add a new item to the cart
//         add_to_cart.push({ id: id, name: name, Qty: 1 });
//     }

//     // Update the cart count on the page
//     document.querySelector("#cart").innerText = add_to_cart.length;

//     // Log the cart contents
//     console.log(add_to_cart);
// }
