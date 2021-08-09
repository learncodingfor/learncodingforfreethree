const Person = {
  isHuman:false,
  printperson: function() {
    alert("My name is ${this.name}. I am ${this.age} years old. Am i human? ${this.human}");
  }
}
const person = Object.create(Person);
person.age = 23;
person.name = "bob";
person.isHuman = true;
person.printperson();
