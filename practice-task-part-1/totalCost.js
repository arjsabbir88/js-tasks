
const products = [
    {name: 'Shampoo', price: 300, quantity: 2},
    {name: 'Chironi', price: 100, quantity: 1},
    {name: 'Shirt', price: 700, quantity: 3},
    {name: 'Pant', price: 1200, quantity: 4}
]


function getShoppingTotal(products){
    let totalCost = 0;
    for(const product of products){
        totalCost+= product.price*product.quantity;
    }
    return totalCost;
}
const total = getShoppingTotal(products);
console.log("The total cost : ",total);