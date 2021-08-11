const Person = {
  isHuman:false,
  printIntroduction:function() {
    alert('hello my name is ${this.firstName} ${this.lastName}. Am i human? ${this.isHuman} Am i happy? ${this.mood} ');
  }
};
const person = Object.create(Person);
person.firstName = "billy";
person.lastName = "joe bob";
person.isHuman = true;
person.mood = true;
person.printIntroduction();
