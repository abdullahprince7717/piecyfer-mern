function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
    return "No two sum solution";
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]