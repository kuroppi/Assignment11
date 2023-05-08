//STEP 1
// let name = prompt("Please enter your name:");
// let nameLength = name.length;
// alert(`Your name (${name}) has ${nameLength} characters.`)

//STEP 2
// let name = prompt("What is your name?");
// let number = prompt("Enter a numeric value:");

// number = parseInt(number);
// let letter = name.charAt(number);

// alert(`The letter at index ${number} in ${name} is ${letter}.`);

//STEP 3
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + " " + lastName;
// alert("Your name is: " + fullName);

//STEP 4
// let text = "The quick brown fox jumps over the lazy dog";
// let index = text.indexOf("fox");

// alert(`The index of 'fox' is:  ${index}`);

//STEP 5
// let text = "The quick brown fox jumps over the lazy fox";
// let lastIndex = text.lastIndexOf("fox");

// alert(`The index of the last instance of 'fox' is: ${lastIndex}`);

//STEP 6
// let myString = "The quick brown fox jumped over the lazy dog";
// let fullName = prompt("Please enter your full name:");
// let newString = myString.replace("the lazy dog", fullName);
// alert(newString);

//STEP 7
// let text        = "The quick brown fox jumps over the lazy dog";
// let searchWord  = prompt("Enter a word to search for in the text:");
// const index     = text.indexOf(searchWord);

// if (searchWord === "") {
//   alert("You did not enter a word to search for.");
// } else if (text.indexOf(searchWord) !== -1) {
//     alert(`The word '${searchWord}' was found at index ${index}.`);
// } else {
//     alert(`The word '${searchWord}' was not found in the text.`);
// }

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog";
// let new_string = old_string.slice(-12);
// let uppercase_string = new_string.toUpperCase();
// alert(uppercase_string);

//STEP 9
// let old_string = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// let trimmed_string = old_string.trim();
// let lowercase_string = trimmed_string.toLowerCase();

// alert(lowercase_string);

//STEP 10
// let sentence = "the quick brown fox jumps over the lazy dog";
// let capitalizedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

// alert(capitalizedSentence);