//timepicker
$(function() {
  $("#datetimepicker1").datetimepicker();
});
//function: on click save todo and date into local storage

//get string that is in the todo
var getTodo = document.querySelector(".col-sm-4.todo").value;
//get date that is as a string in the input
var getDate = document.querySelector(".form-control").value;
var storeData = [];

//get button and store ToDo and date
document.querySelector("#saveBtn").addEventListener("click", function() {
  localStorage.setItem("getDate", JSON.stringify(getDate));
  //document.getDate.localStorage.setItem("getDate", getDate.val());
  JSON.parse(localStorage.getItem("getDate"));
  localStorage.setItem("getTodo", JSON.stringify(getTodo));
  //document.getDate.localStorage.setItem("getTodo", getTodo.val());
  JSON.parse(localStorage.getItem("getTodo"));
});

alert(
  "Saved: " + localStorage.getItem("getTodo")

  //, and " +
  //localStorage.getItem("getDate")
);
//clock function bellow
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
