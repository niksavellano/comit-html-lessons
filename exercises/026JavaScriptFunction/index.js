"user strict";
let showEvenNumber = even => {
  while (even >= 1) {
    for (let i = 0; i <= 100; i += 2) {
      document.write(i + " is a even number<BR>");
    }
    even--;
  }
};

let showfibo = num => {
  let a = 1;
  let b = 0;
  let c;
  while (num >= 0) {
    c = a;
    a = a + b;
    b = c;
    num--;
  }
  console.log(b);
};
let showUser = user => {
  let name = "Nikko";
  let age = 22;
  let pnumber = "403-919-5613";
  let street = "21a";
  let pcode = "T2C0V9";
  let bool = false;

  while (user >= 1) {
    document.write(
      "======== <br> = &nbsp" +
        name +
        " = <br>========<br>" +
        "Age: " +
        age +
        "<br>" +
        "Phone number: " +
        pnumber +
        "<br>" +
        "Street: " +
        street +
        "<br>" +
        "Postal code: " +
        pcode +
        "<br>" +
        "Are you Married?: " +
        bool +
        "<br>"
    );

    user--;
  }
};

showEvenNumber(2);

showfibo(10);

showUser(2);
