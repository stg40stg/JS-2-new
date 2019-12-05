const goods = [
    { title: 'Shirt', price: 150, button: 'add' },
    { title: 'Socks', price: 150, button: 'add'  },
    { title: 'Jacket', price: 150, button: 'add' },
    { title: 'Shoes', price: 150, button: 'add' },
    { title: 'T-Shirt', price: 150, button: 'add' },
    { title: 'Cap', price: 150, button: 'add' },
    { title: 'Hat', price: 150, button: 'add' },
    { title: 'Trousers', price: 150, button: 'add' },
    { title: 'Pants', price: 150, button: 'add' },
    { title: 'Suit', price: 150, button: 'add' },
];

const renderGoodsItem = (title, price, button) => {
    return `<div class="goods-item"><img src="https://pbs.twimg.com/profile_images/378800000017423279/1a6d6f295da9f97bb576ff486ed81389_400x400.png" alt="img" height="70" 
width="100"></img><h3>${title}</h3><p>${price}</p><button>${button}</button></div>`;
};

const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.button));
    document.querySelector('.goods-list').innerHTML = goodsList;
};

renderGoodsList(goods);
