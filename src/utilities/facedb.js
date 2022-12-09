// use local storage to manege cart data
const addToDb = id => {
    let shoppingCart = {};

    // get the shoppingCart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }
    
    //add quantity
    const quantity = shoppingCart[id]
    if (quantity)
    {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else
    {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
export {addToDb}