//STEP 1
// let str = prompt("Please enter a string:");

// function sortString(str) {
//   return str.split('').sort().join('');
// }

// console.log(`Original string: ${str}`);
// console.log(`Sorted string: ${sortString(str)}`);
  
//STEP 2
//   let str = prompt("Please enter a string:");

// function capitalizeWords(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//       let word = words[i];
//       words[i] = word.charAt(0).toUpperCase() + word.slice(1);
//     }
//     return words.join(' ');
//   }

//   console.log(`Original string: ${str}`);
//   console.log(`Capitalized string: ${capitalizeWords(str)}`);
  
//STEP 3
// let str = prompt("Please Enter a string:");

// function countVowels() {
//     let count = 0;
    
//     for (let i = 0; i < str.length; i++) {
//       let letter = str[i].toLowerCase();
      
//       if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
//         count++;
//       }
//     }
    
//     return count;
//   }
  
//   console.log(`String entered: ${str}`);
//   console.log(`Number of vowels: ${countVowels()}`);  
  
//STEP 4
// function generateRandomStringId(length) {
//     let result = '';
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
//     for(let i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
    
//     return result;
//   }
  
//   let length = prompt("Enter the length of the string id:");
//   console.log(`Random string with ${length} characters: ${generateRandomStringId(length)}`);
  
//STEP 5
// let countryNames = prompt("Enter a list of country names separated by commas:").split(",");

// function findLongestCountryName() {
//     let longestName = "";
//     for (let i = 0; i < countryNames.length; i++) {
//       let currentName = countryNames[i].trim();
//       if (currentName.length > longestName.length) {
//         longestName = currentName;
//       }
//     }
//     return longestName;
//   }
  
//   console.log(`Country names submitted: ${countryNames}`)
//   console.log(`Longest country name: ${findLongestCountryName()}`);
  