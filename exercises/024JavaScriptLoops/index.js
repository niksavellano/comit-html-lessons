let total = 0;
for (let i = 0; i < 1000; i++) {
  total += i;
  console.log(total);
  if (total >= 400) break;
}
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let a = 100;
while (a) {
  console.log(a);
  a--;
}

let b = 0;
do {
  console.log(b);
  b += 2;
} while (b <= 100);

let rows = prompt("how many rows do you want?");
for (let d = 0; d < rows; d++) {
  for (let e = 0; e <= d; e++) {
    console.log("*");
  }
  console.log("\n");
}

// print on documuent

for (let d = 0; d < rows; d++) {
  for (let e = 0; e <= d; e++) {
    document.write("*");
  }
  document.write("<br>");
}
