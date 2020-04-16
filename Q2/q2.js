// JavaScript Document

//Create a class named person and hen in it we created a constructors
 //with the propererty of pERSONS.
 //Then we defined the properties of  inside our constructors.
class Person {
  constructor(name, age, gender, interests) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
// Here we added greetings to a person when a user login in a greetings message gets displayed.
// when we go to console in browser and type Person.greetings() then it displays Hi I'm and name of person.
// Person.greetings() and Person.bye().
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };
// Same as we did with the greeting function.
//we added a bye() function so that it display the following message.
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

//here we added two new different objects for persons.
//first we added the person named parth and all the property which we defined in Person class.
//same with the harmanpreet .
//when we go to console in browser and type parth.name then it displays name .
//same with other properties.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);


// Here we created another class named Teacher which extends the Person class.
//then we added the constructor for Teacher.
//And added the properties for the Teacher class.
//and now we wannted that Teacher class should take the same parameter as Person.
//So we called them in as super which are the parameters of Persons class.
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade and last are specific to Teacher
    this.last = last;
    this.subject = subject;
    this.grade = grade;
  }
}

// Initiate a new object for Teacher class with all the property which we defined in Teacher Class.
// same with this when we submit krens.name it display Krens name and same with each and every property.
let krens = new Teacher('Krens', 'Patel', 19, 'male', ['js', 'database '], 'JavaScript', 80)
