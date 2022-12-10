
let products = JSON.parse(localStorage.getItem('products')) || [
    {
        id: 0,
        image: 'https://i.postimg.cc/FFTfRcYG/155fdb858921a4a4e107ba79b2086626.jpg',
        title: 'XXXtentacion Iced out chain',
        price: 6700,
    },
    {
        id: 1,
        image: 'https://i.postimg.cc/xjZ0hPJr/51-I8-YKx7o-L-AC-SY580.jpg',
        title: 'Iced Out DJ deck chain',
        price: 9000,
    },
    {
        id: 2,
        image: 'https://i.postimg.cc/852TJpVp/dollar.jpg',
        title: 'Dollar sign chain',
        price: 5400,
    },
    {
        id: 3,
        image: 'https://i.postimg.cc/L5kFJjTD/ring-1.jpg',
        title: 'Diamond star ring',
        price: 5100,
    },
    {
        id: 4,
        image: 'https://i.postimg.cc/x1CB2wWt/ring-2.webp',
        title: 'Cuban link Ring',
        price: 4100,
    },
    {
        id: 5,
        image: 'https://i.postimg.cc/3JLbnLdp/watch-1.jpg',
        title: 'Oversized Camille Pavé Silver-Tone Watch',
        price: 11100,
    },
    {
       id: 6,
       image: 'https://i.postimg.cc/Ls7KQBGV/15659983-36967083-1000.webp',
       title: 'audemars piguet customised Royal Oak Grande Fleur Ghost',
       price: 12000,
   },
   {
       id: 7,
       image: 'https://i.postimg.cc/85KHmt31/76c8b63bf7d498d51f5297741f4bada8b7a5db8a2870af17f8844288c4fc3f91-1600x.jpg',
       title: 'Hip Hop bracelet',
       price: 5200,
   }
 ];
 
 
 
 let tableBody = document.querySelector('tbody.tb')
 loadTable()
 function loadTable() {
    tableBody.innerHTML = ''
    products.forEach(product => {
       product.id = products.indexOf(product)
       tableBody.innerHTML += `
       <tr>
          <td><img src="${product.image}" style="width: 50px;"></td>
          <td>${product.title}</td>
          <td>R${product.price}</td>
          <td><button style="background-color: crimson;" onclick="deleteB(${product.id})">Delete</button></td>
       </tr>
       `
 
    })
 };
 
 function deleteB(id) {
    try{
       let newProduct = products.splice(id, 1);
       console.log(newProduct);
 
       localStorage.setItem('products', JSON.stringify(products));
       console.log(JSON.parse(localStorage.getItem('products')))
       loadTable()
    }
    catch(error){
       console.log(error)
    }
 }
 
 function clearLocalStorage() {
    localStorage.clear()
    location.reload()
 }