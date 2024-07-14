function countZeroes(arr) {
  
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (arr[0] === 0){
            return arr.length;
        }
        else if (arr[arr.length -1] === 1) {
            return 0;
        }
        if (middleVal === 0 && arr[middleIdx - 1] === 1 ) {
            return (arr.length - middleIdx);
        }
        else if (middleVal === 1 && arr[middleIdx + 1] === 1 ) {
            leftIdx = middleIdx + 1;
        }
        else if (middleVal === 0 && arr[middleIdx - 1] === 0 ) {
            rightIdx = middleIdx - 1;
        }
        else if (middleVal === 1 && arr[middleIdx + 1] === 0 ){
            return (arr.length - 1 - middleIdx);
        }
    }
}

module.exports = countZeroes