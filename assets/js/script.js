var timerEL = $('#currentDay');

// var currentTimeHour = dayjs.utc();
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var timeInterval = setInterval(function () {
    
    timerEL.text(dayjs().format("ddd, D MMMM YYYY hh:mm:ss"));
    

  }, 1000);
});

// jQuery to be used within entire assignment
    // $("") == query selector

// Past, Present, Future 
  // Need to use 24 hour clock
  // Comparison between current time
    // time-block time < current time == past
    // time-block time = current time == present
    // time-block time > current time == future
  // dayjs() is time function within jquery

// Save events
  // Places in local storage
  // How to save in local storage?
    // Save as a JSON file
  // How to target each time block?
    // Time block id should be unique? ---- time?
    // id === time? 
    // event.target === correct time slot?

// Pulling saved events and render onto the according time block
  // Local storage saved within an array?
  // Create list elements then append onto the time block?

// TODO: Past, Present, Future

// function timeComparison() {
//   // Should we make an array of all the cards?
//   // Each card should have a signature id
//   // Each id will indicate which hour it is

//   dayjs().isBefore( , 'hour');

//   dayjs().isSame( , 'hour');

//   dayjs().isAfter( , 'hour');

//   // Use for loop
//   // Can use an if statement
//   for (let i = 0; i < arr.length; i++) {


//     if (... dayjs().isBefore(, 'hour')) {
//       .. addClass('past');
//     } else if (... daysjs().isAfter( , 'hour') {
//       .. addClass('future');
//     } else {
//       .. addClass('present');
//     }
//   }


//   // How to change id of the cards to dayjs()?
// }
var arr = [];

var blockObj = {
  time: undefined, 
}

arr.push(blockObj);

var counter = 9;

for (let i = 0; i < arr.length; i++) {
  
  arr[i].time = dayjs().hour(counter)

  counter++;
}

console.log(arr);

var test = {
  time: dayjs().hour(12),
}
var timer = dayjs().hour();

var res = dayjs().isBefore(test[0], 'hour');


console.log(timer);

console.log(res);

console.log(test);

console.log(dayjs());