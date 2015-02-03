/*
 * CS 22A
 * Assignment 04
 * David Gudeman
 */

'use strict';

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
    var comparator = function (a,b) {
        var result = (a["name"] < b["name"]) ? -1 : (a["name"] > b["name"]) ? 1 : 0;
        return result
    };  
    return this.sort(comparator);
     
};

business.priceSort = function () {
    var comparator = function (a,b) {
        var key = "price";
        var result = (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
        return result;// * sortOrder;
    };  
    return this.sort(comparator);
};

business.ratingSort = function () {
    var comparator = function (a,b) {
        var key = "rating";
        var result = (a[key] < b[key]) ? 1 : (a[key] > b[key]) ? -1 : 0;
        return result;// * sortOrder;
    };  
    return this.sort(comparator);
};

business.updateLocation = function (miles) {
    this.forEach(function(element){
        element["distance"] += miles;
    });
    return this
};
business.select = function(maxDistance, maxPrice, minRating){
   return this.filter(function(element){
      return element["distance"] <= maxDistance &&
        element["price"] <= maxPrice &&
        element["rating"] >= minRating; 
        
    });
       
};


