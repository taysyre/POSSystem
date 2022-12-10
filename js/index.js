const products = JSON.parse(localStorage.getItem('products')) || [
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
    }
];
localStorage.setItem('products', JSON.stringify(products))

// let productsLS = JSON.parse(localStorage.getItem('products'))
// const categories = [...new Set(productsLS.map((item)=>
//     {return item}))]