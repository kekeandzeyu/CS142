"use strict";

function cs142MakeMultiFilter(originalArray) {
    let currentArray = originalArray.slice();
    // Copy of originalArray, direct assignment will be assigned by reference

    function arrayFilter(filterCriteria, callback) {
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }

        currentArray = currentArray.filter(filterCriteria);

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray); // Use call to set 'this' to originalArray
        }

        return arrayFilterer; // Return the function itself for chaining
    }
    return arrayFilter;
} 