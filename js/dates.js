//STEP 1
// let month       = Number(prompt("Enter the month (1-12):"));
// let year        = Number(prompt("Enter the year:"));
// let date        = new Date(year, month-1, 1);
// let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// let monthName   = date.toLocaleString('default', { month: 'long' });

// console.log(`There are ${daysInMonth} days in ${monthName} ${year}.`);

//STEP 2
// let inputDate = new Date(prompt("Enter a date (MM/DD/YYYY):"));
// let monthName = inputDate.toLocaleString('default', { month: 'long' });
// console.log(`The month is ${monthName}.`);

//STEP 3
// const dateStr    = prompt("Enter a date (MM/DD/YYYY):");
// const date       = new Date(dateStr);
// const dayOfWeek  = date.getDay();

// if (dayOfWeek === 0 || dayOfWeek === 6) {
//   console.log(`${dateStr} lands on a weekend.`);
// } else {
//   console.log(`${dateStr} does not land on a weekend.`);
// }

//STEP 4
// const today     = new Date();
// const yesterday = new Date(today);
// yesterday.setDate(today.getDate() - 1);

// const yesterdayStr = yesterday.toLocaleDateString('en-US', { weekday: 'long' });
// console.log(`Yesterday was ${yesterdayStr}`);

//STEP 5
// const today = new Date();
// const dayOfWeek = today.toLocaleDateString('en-US', {weekday: 'long'});
// const firstLetter = dayOfWeek.slice(0, 1);
// console.log(firstLetter);
