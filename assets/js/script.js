// Variables
var timerEl = $('#currentDay');
var saveBtn = $('.fa-save');
var timeBlock = $('.time-block');

// jQuery selectors
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');

// Array for storage
var timeBlocksArray = [];

$(function () {

// Sets current time display onto the header
var timeInterval = setInterval(function() {
    var currentTime = dayjs().format("ddd, D MMMM YYYY hh:mm:ss a");
    timerEl.text(currentTime);
  }, 1000);

// Function to store data into local storage after clicking 'save' icon  
function storeData(event) {

  // Event targets when you click 'save' icon
  var inputId = $(event.target).parents().parents('.time-block').attr("id");
  var inputValue = $(event.target).parents().siblings('.description').val().trim();


  // Object that is placed within an array after being created
  var timeBlockObj = {
      id: null,
      value: null,
      time: null,
  }
  
  // For loop to eliminate duplicates of the same timeBlockObj
  for(let i = 0; i < timeBlocksArray.length; i++) {
    if (timeBlocksArray[i].id === inputId) {
      timeBlocksArray.splice(i, 1);
    } 
  }

  // Sets object properties to the event.target
  timeBlockObj.id = inputId;
  timeBlockObj.value = inputValue;

  // Push the object into the array
  timeBlocksArray.push(timeBlockObj);
  
  // Places array into local storage using JSON format
  localStorage.setItem('timeBlocksArray', JSON.stringify(timeBlocksArray));
};

// Function to take out array from local storage
function retrieveData() {
  
  // Parse through the local storage using JSON
  var parsedArray = JSON.parse(localStorage.getItem('timeBlocksArray'));

  // if statement to make sure that the local storage array will transfer to js array
  if (parsedArray !== null) {
    timeBlocksArray = parsedArray;
  }

  renderData();
  timeComparison();
};

// Function to display the object data onto their respective time block
function renderData() {

  // For loop to query select the correct block using jQuery
  for (let i = 0; i < timeBlocksArray.length; i++) {
    var renderBlock = $("#" + timeBlocksArray[i].id);

    // tree traversal to find the correct textarea
    // Object value is now inserted into the textarea
    renderBlock.children('textarea').text(timeBlocksArray[i].value);
  }

}

// Function to determine past, present, and future of the time blocks
function timeComparison() {

  // Array of objects with hardcoded times
  var arr = [hour9ob = {
              target: hour9,
              time: 9,
            }, 
            hour10ob = {
              target: hour10,
              time: 10,
            }, 
            hour11ob = {
              target: hour11,
              time: 11,
            }, 
            hour12ob = {
              target: hour12,
              time: 12,
            }, 
            hour13ob = {
              target: hour13,
              time: 13,
            }, 
            hour14ob = {
              target: hour14,
              time: 14,
            }, 
            hour15ob = {
              target: hour15,
              time: 15,
            }, 
            hour16ob = {
              target: hour16,
              time: 16,
            }, 
            hour17ob = {
              target: hour17,
              time: 17,
            }];

  // If statement to compare the object's time with the hour of dayjs
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].time < dayjs().hour()) {
      arr[i].target.removeClass("present", "future");
      arr[i].target.addClass("past");
    } else if (arr[i].time > dayjs().hour()) {
      arr[i].target.removeClass("past", "present");
      arr[i].target.addClass("future");
    } else {
      arr[i].target.removeClass("past", "future");
      arr[i].target.addClass("present");
    }
  }
}

// jQuery click event that only works with the class of .fa-save
timeBlock.on('click', '.fa-save', storeData)

  retrieveData();
});