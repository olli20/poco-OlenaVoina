// Write a function that takes an array of objects representing products (with properties name, price, category) and returns an array of products that cost more than $20.

const myFilter = 20;

const myProducts = [
    {
        id: "234234",
        name: "Apples",
        category: "premium",
        price: 13
    },
    {
        id: "987654",
        name: "Bananas",
        category: "standard",
        price: 8
    },
    {
        id: "456789",
        name: "Cherries",
        category: "premium",
        price: 25
    },
    {
        id: "654321",
        name: "Grapes",
        category: "standard",
        price: 18
    },
    {
        id: "123456",
        name: "Oranges",
        category: "premium",
        price: 30
    }
];

const filterProducts = (array, price) => {
    const filteredArray = array.filter(function(item) {
        return item.price > this;
    }, price)

    return filteredArray;
}

const expensiveProducts = filterProducts(myProducts, myFilter);

console.table(expensiveProducts);