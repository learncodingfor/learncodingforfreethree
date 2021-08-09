const Person = {
  isHuman:false,
  printPerson:function(){
    alert(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};
const person = object.create(Person);
