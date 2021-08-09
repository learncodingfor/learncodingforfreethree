const Person = {
  isHuman:false,
  printPerson:function(){
    alert("my name is  ${this.name}. Am i human? ${this.isHuman}");
  }
};
const person = object.create(Person);
