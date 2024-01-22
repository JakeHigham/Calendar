$(function () {
  // Added an listener for click events on the save button
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  // Get the current hour using Day.js
  var currentHour = dayjs().hour();

  // Iterates through each time-block to apply the appropriate class
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });

  // Retrieves user input from local storage and set values of elements
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var storedInput = localStorage.getItem(timeBlockId);
    $(this).find(".description").val(storedInput);
  });

  // Display the current date in the header
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
