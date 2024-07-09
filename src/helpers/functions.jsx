export function convertToPersianNumber(number) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let persianNumber = "";
    for (let i = 0; i < number.length; i++) {
      const digit = number.charAt(i);
      const index = englishDigits.indexOf(digit);
      if (index !== -1) {
        persianNumber += persianDigits[index];
      } else {
        persianNumber += digit;
      }
    }
    return persianNumber;
  }
  
  export function addCommas(num) {
    let str = num.toString();
    let result = "";
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      result = str.charAt(i) + result;
      count++;
      if (count === 3 && i !== 0) {
        result = "," + result;
        count = 0;
      }
    }
    return result;
  }

  export const convertToPersianDate = (str) => {
    const persianNums = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (/\d/.test(str[i])) {
        newStr += persianNums[parseInt(str[i])];
      } else {
        newStr += str[i];
      }
    }
    return newStr;
  };

  export const toBoolean = (value) => {
    if (["true", true].includes(value)) return true;
    if (["false", false].includes(value)) return false;
    return null;
  };

  export const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); 
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] === sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }

  export const findDuplicateCourses = (coursesArr, duplicateTitlesArr) => {
    return coursesArr.filter(course => duplicateTitlesArr.includes(course.title));
  }
  
  