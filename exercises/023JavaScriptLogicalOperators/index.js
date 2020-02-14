let a = prompt("enter the current hour (0-23)");
if (a < 0 || a > 23) {
  alert("Input Incorrect");
} else if (a < 8 || a >= 18) {
  alert("hour is out of office hours");
} else if (a >= 8 && a < 18) {
  alert("We are open!");
}
