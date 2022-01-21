// Testing if page is functioning
$(document).ready(function () {
  console.log("document loaded");
});
// Defining variables

var saveBtn = document.querySelectorAll(".saveBtn");
var currentTime = moment().hour();
// Test if current time is working using moment.js
console.log(currentTime);
// Current date and time displayed at the top of the page using moment.js
var dateOfToday = moment().format("dddd, MMM Do YYYY, h:mm A");
$("#currentDay").html(dateOfToday);

// Color coding time blocks on planner to indicate whether it is in the past, present, or future

function colorCodeSchedule() {
  if (currentTime > 8) {
    $("#hour8").addClass("past");
  } else if (currentTime >= 8 && currentTime < 9) {
    $("#hour8").addClass("present");
  } else if (currentTime < 9) {
    $("#hour8").addClass("future");
  }
  if (currentTime > 9) {
    $("#hour9").addClass("past");
  } else if (currentTime >= 9 && currentTime < 10) {
    $("#hour9").addClass("present");
  } else if (currentTime < 10) {
    $("#hour9").addClass("future");
  }
  if (currentTime > 10) {
    $("#hour10").addClass("past");
  } else if (currentTime >= 10 && currentTime < 11) {
    $("#hour10").addClass("present");
  } else if (currentTime < 11) {
    $("#hour10").addClass("future");
  }
  if (currentTime > 11) {
    $("#hour11").addClass("past");
  } else if (currentTime >= 11 && currentTime < 12) {
    $("#hour11").addClass("present");
  } else if (currentTime < 12) {
    $("#hour11").addClass("future");
  }
  if (currentTime > 12) {
    $("#hour12").addClass("past");
  } else if (currentTime >= 12 && currentTime < 13) {
    $("#hour12").addClass("present");
  } else if (currentTime < 13) {
    $("#hour12").addClass("future");
  }
  if (currentTime > 13) {
    $("#hour13").addClass("past");
  } else if (currentTime >= 13 && currentTime < 14) {
    $("#hour13").addClass("present");
  } else if (currentTime < 14) {
    $("#hour13").addClass("future");
  }
  if (currentTime > 14) {
    $("#hour14").addClass("past");
  } else if (currentTime >= 14 && currentTime < 15) {
    $("#hour14").addClass("present");
  } else if (currentTime < 15) {
    $("#hour14").addClass("future");
  }
  if (currentTime > 15) {
    $("#hour15").addClass("past");
  } else if (currentTime >= 15 && currentTime < 16) {
    $("#hour15").addClass("present");
  } else if (currentTime < 16) {
    $("#hour15").addClass("future");
  }
  if (currentTime > 16) {
    $("#hour16").addClass("past");
  } else if (currentTime >= 16 && currentTime < 17) {
    $("#hour16").addClass("present");
  } else if (currentTime < 17) {
    $("#hour16").addClass("future");
  }
  if (currentTime > 17) {
    $("#hour17").addClass("past");
  } else if (currentTime >= 17 && currentTime < 18) {
    $("#hour17").addClass("present");
  } else if (currentTime < 18) {
    $("#hour17").addClass("future");
  }
}




/* ```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down 
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/
