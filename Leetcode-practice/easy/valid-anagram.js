function validAnagram(str1, str2) {
    // str1 = str1.split('').sort().join(''); 
    // str2 = str2.split('').sort().join('');

    let isAnagram = false;

    if (str1.length !== str2.length) {
        return "Its not a Valid Anagram"
    }
    let freq1 = {};
    let freq2 = {};

    for (char of str1) {
        if (freq1[char]) {
            freq1[char] += 1;
        }
        else {
            freq1[char] = 1;
        }
    }

    for (char of str2) {
        if (freq2[char]) {
            freq2[char] += 1;
        }
        else {
            freq2[char] = 1;
        }
    }

    for (key in freq1) {
        if (freq1[key] !== freq2[key]) {
            // return "Its not a Valid Anagram"
            isAnagram = false;
        }
        else {
            // return "Its a Valid Anagram"
            isAnagram = true;
        }
    }
    if (isAnagram) {
        return "Its a Valid Anagram"
    }
    else {
        return "Its not a Valid Anagram"
    }
}

console.log(validAnagram("anagram", "nagaram")); // Its a Valid Anagram
console.log(validAnagram("rat", "car")); // Its not a Valid Anagram