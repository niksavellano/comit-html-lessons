let number = prompt("Enter a number 1-7 to know what day it is!!!");

let mon = "Today is Monday";
let tue = "Today is Tuesday";
let wed = "Today is Wednesday";
let thur = "Today is Thursday";
let fri = "Today is Friday";
let sat = "Today is Saturday";
let sun = "Today is Sunday";

let err = "Number not between 1-7!!!";

if (number == 1) {
  alert(mon);
} else if (number == 2) {
  alert(tue);
} else if (number == 3) {
  alert(wed);
} else if (number == 4) {
  alert(thur);
} else if (number == 5) {
  alert(fri);
} else if (number == 6) {
  alert(sat);
} else if (number == 7) {
  alert(sun);
} else {
  console.error(err);
}
let number2 = prompt("Enter a number 1-7 to know what day it is!!!");
let num = Number(number2);

switch (num) {
  case 1:
    alert(mon);
    break;
  case 2:
    alert(tue);
    break;
  case 3:
    alert(wed);
    break;
  case 4:
    alert(thur);
    break;
  case 5:
    console.log(fri);
    break;
  case 6:
    alert(sat);
    break;
  case 7:
    alert(sun);
    break;
  default:
    console.log(err);
}
