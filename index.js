String.prototype.filter = function (bannedWords) {
  return this.split(' ')
    .filter((word) => !bannedWords.includes(word))
    .join(' ');
};

console.log('This house is not nice!'.filter(['not']));

Array.prototype.bubbleSort = function () {
  let sorted;
  do {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  } while (!sorted);
  return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

class Person {
  constructor(name) {
    this.name = name;
  }

  teach(subject) {
    console.log(`${this.name} is now teaching ${subject}.`);
  }
}

class Teacher extends Person {}

const teacher1 = new Teacher('John Doe');
teacher1.teach('Mathematics');

const teacher2 = new Teacher('Jane Smith');
teacher2.teach('History');
