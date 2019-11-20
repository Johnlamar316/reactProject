class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreetings() { 
    return `Hi, I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); //it refers to the parent class
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}  

const me = new Student("Okafor John", 17, "Computer science");
console.log(me.getGreetings());
console.log(me);

const others = new Student("Seun Bakare", 23,"French");
console.log(others.getDescription());

let applicate = document.getElementById("app");

let renderNow = () => {
  const tempt = (
    <div>
    <h1>Class: {"Hello Class"}</h1>
    <p>{me.getGreetings()}</p>
    </div>
  )
  ReactDOM.render(tempt, applicate);
}

renderNow();




