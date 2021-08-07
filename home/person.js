const person = {
  isHuman: false,
  printIntroduction: function() {
    alert(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
