const removeFromArray = function(array, toRemove1, toRemove2, toRemove3, toRemove4) {
    let returnArray = array.filter(checkArray);

    function checkArray(item) {
        if (
            item === toRemove1 ||
            item === toRemove2 ||
            item === toRemove3 ||
            item === toRemove4
            ) {
                console.log(`Removed ${item}`);
            } else {
                return item;
            }
        }

    return returnArray;
    }

// Do not edit below this line
module.exports = removeFromArray;
