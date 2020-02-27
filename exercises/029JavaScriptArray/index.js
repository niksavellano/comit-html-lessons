let charNames = ["tito", "vic", "joey"];
let parentName = ["ding", "dang"];
let c = charNames.concat(parentName);
console.log(c);

c.push("Coco");

console.log(c);

c.reverse();

console.log(c);

console.log(parentName[0]);

for (let i = 0; i < c.length; i++) {
  console.log(c[i]);
}

// THE RECIPE CARD
let recipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};
console.log("Title: ", recipe.title);
console.log("Servings: ", recipe.servings);
console.log("Ingredients: ", recipe.ingredients);

// THE READING LIST
var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  }
];

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var bookInfo = book.title + '" by ' + book.author;
  if (book.alreadyRead) {
    console.log('You already read "' + bookInfo);
  } else {
    console.log('You still need to read "' + bookInfo);
  }
}

function map(arr, func) {
  // todo, turn arr into new array using func
  return arr.map(func);
}

const result = map([1, 2, 3], function(item) {
  return item * 2;
});

console.log(result);
