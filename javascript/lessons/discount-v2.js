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

const discountFields = {
    discountPercentage: 0,
    finalPrice: item.originalPrice,
    getDiscountPrice() {
        this.finalPrice = Math.round(this.originalPrice * (1 - this.discountPercentage / 100));
    }
};

// Function to add discount fields to products
const addDiscountFeature = (array) => {
    return array.map(item => {
        return Object.assign(item, discountFields);
    });
};

// ADD DISCOUNT FEATURE
// Apply adding discount functionality to the basic accortiment

const basicProductsWithDiscount = addDiscountFeature(basicProducts);

// CREATE ASSORTMENT FOR OCTOBER
// In October we offer 15% discount for premium products

const premiumDiscount = 17;

const getProductsNextMonth = (array, category) => {
    return array.map(item => {
        if (item.category === category) {
            item.discountPercentage = premiumDiscount; // Update the discount percentage
            item.getDiscountPrice(); // Apply the discount using the existing method
        }
        return item;
    });
};

const productsOctober = getProductsNextMonth(basicProductsWithDiscount, "premium");

console.log("Original array:\n", basicProducts);
console.log("**************************************************");
console.log("Updated assortment array with discount functionality:\n", basicProductsWithDiscount);
console.log("**************************************************");
console.log("Assortment for October: \n", productsOctober);