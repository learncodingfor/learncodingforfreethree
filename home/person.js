const Person = {
  isHuman:false,
  printIntroduction:function() {
    alert('hello my name is ${this.firstName} ${this.lastName}. Am i human? ${this.isHuman} Am i happy? ${this.mood} my gender is $(this.gender)');
  }
};
const person = Object.create(Person);
person.firstName = "billy";
person.lastName = "joe bob";
person.isHuman = true;
person.mood = true;
person.gender = "boy";
person.printIntroduction();
