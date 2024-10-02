// BASIC ASSORTMENT
// Our database of products is stored as an array of objects

const basicProducts = [
    { id: "01", name: "Apples", category: "premium", originalPrice: 13 },
    { id: "02", name: "Bananas", category: "standard", originalPrice: 8 },
    { id: "03", name: "Cherries", category: "premium", originalPrice: 25 },
    { id: "04", name: "Grapes", category: "standard", originalPrice: 18 },
    { id: "05", name: "Peaches", category: "premium", originalPrice: 30 },
];


// ADD DISCOUNT FEATURE
// Apply the discount functionality to the basic assortment

const addDiscountFeature = (array) => {
    const copyArray = [...array]; // creates a copy of an array

    // Add discount-related fields to each object in the array
    for (let item of copyArray) {
        item.discountPercentage = 0;
        item.finalPrice = item.originalPrice;
        item.getDiscountPrice = function() {
             this.finalPrice = Math.round(this.originalPrice * (1 - this.discountPercentage / 100));
        }
    } 

    return copyArray;
}

// ADD DISCOUNT FEATURE
// Apply adding discount functionality to the basic accortiment

const basicProductsWithDiscount = addDiscountFeature(basicProducts);

console.log("Updated assortment array with discount functionality:\n", basicProductsWithDiscount);

// CREATE ASSORTMENT FOR OCTOBER
// In October we offer 15% discount for premium products

const premiumDiscount = 17;

const getProductsNextMounth = (array, category) => {
    const resultArray = array.map(item => {
        if (item.category === category) {
            item.discountPercentage = premiumDiscount;
        }
        return item;
    })

    for (let item of resultArray) {
        item.getDiscountPrice();
    }
    return resultArray;
}

const productsOctober = getProductsNextMounth(basicProductsWithDiscount, "premium")

console.log("**************************************************")
console.log("Assortiment for October: \n", productsOctober);