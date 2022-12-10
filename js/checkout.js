let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addtocart(a){
    cart.push({...categories[a]});
    console.log({...categories[a]});
    localStorage.setItem('cart', JSON.stringify(cart))
    displaycart();
}


// function delElement(id){
//     cart.splice(id, 1);
//     localStorage.setItem('products', JSON.stringify(products));
//     console.log(JSON.parse(localStorage.getItem('products;')))
//     displaycart();
// }

function delElement(id) {
    try{
        cart = JSON.parse(localStorage.getItem('cart'))
        let newProduct = cart.splice(id, 1);
        console.log(newProduct);
    
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(JSON.parse(localStorage.getItem('cart')))
        displaycart();
    }
    catch(error){
        console.log(error)
    }
}


function displaycart(){
    let j = 0, total=0;
    let cart = JSON.parse(localStorage.getItem('cart'))
    document.getElementById("count").innerHTML=cart.length;

    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your checkout is empty";
        document.getElementById("total").innerHTML = "R "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            let {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "R "+total+".00";
            return(
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>R ${price}.00</h2>`+
                "<i class='fa-solid fa-trash'></i></div> <button class='delElement' onclick='delElement("+ (j++) +")' id='0'>Remove</button>"
                
            );
            
        }).join('');
        // function delElement(id) {
        //     try{
        //        let newProduct = products.splice(id, 1);
        //        console.log(newProduct);
         
        //        localStorage.setItem('products', JSON.stringify(products));
        //        console.log(JSON.parse(localStorage.getItem('products;')))
        //        function displaycart()
        //     }
        //     catch(error){
        //        console.log(error)
        //     }
        //  }
    }

  
        // ul.addEventListener("click", delt);
        
}
displaycart()