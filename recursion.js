/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;

  const nextSlice = longest(words.slice(1));

  return Math.max(words[0].length, nextSlice)
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) return str;

  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) return -1;

  if (arr[0] === val) return 0;

  const result = findIndex(arr.slice(1), val);

  if (result !== -1) return result + 1;

  return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === "") return "";

  return str.slice(-1) + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const values = [];

  function gather(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'string') {
        values.push(obj[key]);
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        gather(obj[key]);
      }
    }
  }

  gather(obj);
  return values;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  function search(start = 0, end = arr.length - 1) {
    if (start > end) return -1;

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) return mid;

    if (val < arr[mid]) return search(start, mid - 1);

    return search(mid + 1, end);
  }
  return search();
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
