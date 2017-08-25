'use strict';
/**
 * Created by revanth on 8/17/2017.
 */

var searchFunction = function (arrayObject, customId) {
    var len = arrayObject.length;
    var min = 0, max = len - 1;
    var mid = parseInt((min + max) / 2);

    while (min <= max && mid <= max && mid >= min) {
        var currentCustomid = arrayObject[mid].customId;
        if (currentCustomid === customId) {
            return mid;
        } else if (currentCustomid < customId) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
        mid = parseInt((min + max) / 2);
    }
    return -1;
};

exports.searchFunction = searchFunction;