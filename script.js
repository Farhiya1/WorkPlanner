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


// Call function ColorCodeSchedule
colorCodeSchedule();

// Saving users input to local storage when user click save button

$(".saveBtn").on("click", function () {
  // Storing user input from changes made to parent html "id" attribute and sibbling "description" attribute
  var time = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();
  //save items in local storage.
  localStorage.setItem(time, text);
});

//Retreive users input from local storage and have the saved events persist on the page when the page is refreshed.

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
