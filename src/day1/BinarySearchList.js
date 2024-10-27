"use strict";
exports.__esModule = true;
function bs_list(haystack, needle) {
    var low = 0;
    var high = haystack.length;
    var mid = Math.floor(low + (high - low) / 2);
    do {
        var value = haystack[mid];
        if (value === needle) {
            return true;
        }
        else if (value > needle) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    } while (low < high);
    return false;
}
exports["default"] = bs_list;
console.log(bs_list([4, 5, 6, 7, 8, 9, 10], 10));
console.log(true);
