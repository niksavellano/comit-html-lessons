var user1 = {
  username: "batman",
  password: "hunter2"
};
var user2 = {
  username: "wonderwoman",
  password: "123123",
  greet() {
    console.log("Hello I am ", this.username);
  },
  updateUser() {
    let c = prompt("Enter new Name");
    this.username = c;
    console.log("your new name is ", c);
  }
};

console.log(typeof user1);
console.log(user1);
console.log(user2);
let a = prompt("Enter username");
let b = prompt("Enter password");

if (a == user1.username && b == user1.password) {
  alert("Access Granted");
} else {
  alert("Access Denied");
}

user2.greet();
user2.updateUser();
