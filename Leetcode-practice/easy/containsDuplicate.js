

const containsDuplicate = (arr) => {

    const set = new Set();

    for (num of arr) {
        if (set.has(num)) {
            return (`True, Its ${num} that is duplicate`)
        }
        else {
            set.add(num);
        }
    }
    console.log("set", set);
    console.log("No value Appeared Twice OR All values are unique");
}

containsDuplicate([1, 2, 3, 4, 5, 6]); // All values are unique

console.log(containsDuplicate([1, 2, 3, 4, 2, 5, 4]));  // True, Its 2 that is duplicate
