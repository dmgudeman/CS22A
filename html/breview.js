/*
 * Business Review  - Template 
 */
'use strict';
// This is the business array.
// It is populated for you.
var business = [
    {
        name: 'Red Apple',
        distance: 2,
        price: 3,
        rating: 1
    },
    {
        name: 'Everything Pizza',
        distance: 6,
        price: 1,
        rating: 2
    },
    {
        name: 'Zoe',
        distance: 1,
        price: 1,
        rating: 5
    },
    {
        name: 'Salad Place',
        distance: 2,
        price: 2,
        rating: 4
    },
    {
        name: 'Yumm',
        distance: 5,
        price: 2,
        rating: 3
    },
    {
        name: 'California Foods',
        distance: 8,
        price: 5,
        rating: 4
    }
];

business.alphaSort = function () {
    business.sort(); 
    // Return an array sorted in ascending alphabetical order 
    // based on the name.    
};

business.priceSort = function () {
    // Fill in the function body. 
    // Return an array sorted in ascending numerical order 
    // based on the price (low to high).
};

business.ratingSort = function () {
    // Fill in the function body. 
    // Return an array sorted in descending numerical order
    // based on the rating (high to low).
};

business.select = function (maxDistance, maxPrice, minRating) {
    // Fill in the function body. 
    // Return a subset of the array with only 
    // the businesses within the distance maxDistance, 
    // that have a rating of at least minRating 
    // and a price of at most maxPrice.
};

business.updateLocation = function (miles) {
    // Fill in the function body. 
    // Return an array where the distance property of each business
    // has been incremented by the value of the parameter miles.

};

/*
 * Testing
 * Make sure you open the Firebug console so that you can see and compare the output.
 * The expected output is ducumented in TestBReview.pdf
 */

// Test the select method.
// Get the businesses that satisfy the selection criteria and output the result.
console.table(business.select(2, 2, 3));
console.table(business.select(5, 4, 3));
console.table(business.select(7, 4, 2));
console.table(business.select(8, 5, 4));

// Test the alhpaSort method.
// Get the businesses sorted alphabetically by name and output the result.
console.table(business.alphaSort());

// Test the priceSort method.
// Get the businesses sorted by price (low to high) and output the result.
console.table(business.priceSort());

// Test the ratingSort method.
// Get the businesses sorted by rating (high to low) and output the result.
console.table(business.ratingSort());

// Test the updateLocation method.
// Sort the businesses alphabetically then update their distances.
console.table(business.alphaSort().updateLocation(3));