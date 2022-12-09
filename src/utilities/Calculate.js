import Cosmetics from "../components/Cosmetics/Cosmetics";

const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

// const numbers = [20, 24, 25, 65, 75];
// const sumReducer = (previus, current) => previus + current;
// const total=numbers.reduce(sumReducer, 0)
// const item = [
//     {id:1, name:'alta', price:100},
//     {id:1, name:'alta', price:100},
//     {id:1, name:'alta', price:100},
//     {id:1, name:'alta', price:100},
//     {id:1, name:'alta', price:100}
// ]

// const itemSumReduce = (previous, current) => previous + current.price;
// const itemTotal = item.reduce(itemSumReduce, 0);
const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}
export {
    add,
    multiply,
    getTotalPrice as getTotal
}