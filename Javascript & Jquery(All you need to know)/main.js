//var, let, const
//var can cause conflicts in your codes
//with let you can reasign value with const you cant

//example
//let

	let age=30;
	age=35;

	console.log(age)

//const

	//const number=30;
	//number=31;

	//console.log(number)
//const gives an error when you try to change the value of the variable.
//const stands for constant
//always use const when you are not going to reassign the value
//with const you must assign a value


//DATA TYPES
//Strings, Numbers, Boolean, null, undefined

const name='John';//John is a String. Always add the quotes'
const score=13;//13 is a Number. Quotes not needed.
const isCool=true;//This is a boolean. A string without quotes is a Boolean
const x=null;//This is null
const y=undefined;//this is undefined
let z;//this is undefined also

//STRINGS
//Concatenation
//There are two ways to concatenate one by adding the + sign where needed or two by

//Method 1
const name1='Adeoluwa';
const age1=90;

console.log('My name is' +' '+ name1 +' '+ 'and I am' +' '+ age1 +' '+ 'years old');

//Method 2 (Template Strings)
const name2='Adeoluwa';
const age2=90;

console.log(`My name is ${name2} and I am ${age2} years old`);

//String Properties and Methods
const s='Hello World';

console.log(s.length);//length is a property.
//Note: Properties dont have parenthesis when it has parenthesis its a method.
console.log(s.toUpperCase());//toUpperCase is a method hence the parenthesis
console.log(s.toLowerCase());//A method
console.log(s.substring(0, 5));//A method
//You can use two methods at the same time
console.log(s.substring(0, 5).toUpperCase())
//Spliting a string into a array
console.log(s.split(''))

//ARRAYS - Variables that use multiple values
//Constructing an array
//Method one
const n = new Array(1,2,3,4,5);

console.log(n);
//Method 2
const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits);

/*Assessing one value in a created array
Using fruits above*/
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
/*Adding variables to an Array
Using fruits above*/
//Method 1
fruits[3] = 'grapes';

console.log(fruits);
//Method 2 (end)
fruits.push('mangoes');

console.log(fruits);
//Method 2 (Beginning)
fruits.unshift('strawberries');

console.log(fruits);

//To remove the last variable
fruits.pop();

console.log(fruits);

//to confirm if an array is an array
console.log(Array.isArray(fruits));

//to the index of a variable
console.log(fruits.indexOf('apples'));

//OBJECT LITERALS
const person={
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	hoobies: ['music', 'movies', 'sports'],
	address: {
		street: '50 main st',
		city: 'boston',
		state: 'MA',
	}
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hoobies[1]);
console.log(person.address.city);

//to make object in variables
const { firstName, lastName, } = person;

console.log(firstName);

//to add object
person.email = 'johndoe@gmail.com';

console.log(person.email)

//EXAMPLE
const todos = [
	{
		id: 1,
		text: 'Take out trash',
		isCompleted: true
	},
	{
		id: 2,
		text: 'Meeting with Boss',
		isCompleted: true
	},
	{
		id: 3,
		text: 'Dentist appt',
		isCompleted: false
	}
];

console.log(todos);
console.log(todos[1].text);

//This is a Backend(server side) Code.
//Sending scripts to a server
//Using todos above
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//LOOPS
// For loops
for(let i = 0; i < 10; i++){
	console.log(`For Loop Number: ${i}`);
}

//while loops
let i = 0;
while(i<10) {
	console.log(`While Loop Number: ${i}`); i++
}

//Looping through arrays
//Method 1
for(let i=0; i<todos.length; i++) {
	console.log(todos[i].text);
}

//Method 2
for(let todo of todos) {
	console.log(todo)
	//For just the text
	console.log(todo.text)
}

//Method 3 
todos.forEach(function(todo) {
	console.log(todo.text);
})

//Method 4
todos.map(function(todo) {
	console.log(todo.text);
})

//Method 5
todos.filter(function(todo) {
	console.log(todo.text);
})

//Returning Arrays using "Map and Filter".

//Map
const todoText = todos.map(function(todo) {
	return todo.text;
})

console.log(todoText)

//Filter
const todoComplete = todos.filter(function(todo) {
	return todo.isCompleted === true;
})

console.log(todoComplete)

//CONDITIONALS
//if Statement
const w = 10

if(w === 10) {
	console.log('w is 10')
}

//else Statement
const g = 20

if(g === 10) {
	console.log('g is 10')
}
else {
	console.log('g is NOT 10')
}

//else if Statement
const t = 45

if(t === 20) {
	console.log('t is 20')
}
else if(z > 20) {
	console.log('t is greater than 20')
}
else {
	console.log('t is less than 20')
}

/* Note: Or is represented by ||
while and is represented by &&
? represents then
: represents else
*/

//example
const h = 10

const color = h > 10 ? 'red' : 'blue'
console.log(color)

//Switch statement
switch(color) {
	case 'red':
		console.log('color is red')
		break;
	case 'blue':
		console.log('color is blue')
		break;
	default:
		console.log('color is not red or blue')
		break;
}

//Functions
function addNums(Num1, Num2) {
	console.log(Num1 + Num2)
}

addNums(60, 40)

//Object oriented programming

//Using ECMASCRIPT 5
//Constructor Functions
function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);
	this.getBirthYear = function() {
		return this.dob.getFullYear();
	}
	this.getFullName = function() {
		return `${this.firstName} ${this.lastName}`;
	}
}
//Comment belowis used to move specific functions into the _proto_ section of the console result
/*
Person.prototype.getBirthYear = function() {
	return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
}
*/

//Instatiate
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Smith', '3-6-1982')

console.log(person1);
console.log(person1.dob);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());


//Using ECMASCRIPT 6
//Classes
class Person1 {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = new Date(dob);
	}
	getBirthYear() {
		return this.dob.getFullYear();
	}
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	
}

//Instatiate
const person3 = new Person1('John', 'Doe', '4-3-1980')
const person4 = new Person1('Mary', 'Smith', '3-6-1982')

console.log(person3);
console.log(person4.dob);
console.log(person3.dob.getFullYear());
console.log(person4.getBirthYear());
console.log(person3.getFullName());


//DOM (Document Object Model)
console.log(window); //This is called the Window Object.
//Everything window related is located in the window object including the document object.


//Selectors
//Single element selectors
//Single element selectors only select the first of that element even if they are more than one of that element.
console.log(document.getElementById('my-form'));
//querySelector is a jQuery command that can select any element, class or id in the html document.
console.log(document.querySelector('.container'));

//Multiple element selectors
console.log(document.querySelectorAll('.items'));
console.log(document.getElementsByClassName('items'));
console.log(document.getElementsByTagName('li'));
//To grab each item
const items = document.querySelectorAll('.items');

items.forEach((item) => console.log(item));

//Manipulating Elements in the DOM
const ul = document.querySelector('.items')

ul.remove();
//Their are a list of other methods that can used to edit elements in the DOM.
//You can check for other methods on the MDN(Mozilla Developer Network) at developer.mozilla.org.

//Changing html styles.
const btn = document.querySelector('.btn');
//btn.style.background = 'red';
//adding an event listener
btn.addEventListener('click', (e) => {
	e.preventDefault();
	//console.log('click');
	document.querySelector('#my-form').style.background = '#ccc';
	document.querySelector('body').classList.add('bg-dark');
});

//Calliing and listing to the submit command
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(p) {
	p.preventDefault();

	if(nameInput.value === '') {
		msg.classList.add('error');
		msg.innerHTML = 'Please input your name.';

		setTimeout(() => msg.remove(), 5000);
	}else if(emailInput.value === '') {
		msg.classList.add('error');
		msg.innerHTML = 'Please input email address.'
	}else {
		msg.classList.add('success');
		msg.innerHTML = 'Success'; 

		setTimeout(() => msg.remove(), 5000);

		const li = document.createElement('li');
		li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

		userList.appendChild(li);

		//Clean fields
		nameInput.value = '';
		emailInput.value = '';
	}
}

//JavaScript Dates
//To use dates we change a tags content to the value of a variable

var d = new Date();
document.getElementById("demo").innerHTML = d;

//The date can be displayed in diffrent format
document.getElementById("demo1").innerHTML = d.toString();
document.getElementById("demo2").innerHTML = d.toUTCString();
document.getElementById("demo3").innerHTML = d.toDateString();
document.getElementById("demo4").innerHTML = d.toLocaleTimeString();
