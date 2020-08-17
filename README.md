## 1 - Getting started
### 1.1 - First React Code

```html
<div class="person">
  <h1>React</h1>
  <p>Age: 28</p>
</div>
```
```css
.person {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    border: 1px solid #eee;
    width: 200px;
    box-shadow: 0 2px 2px #ccc;
}
```

- To reuse the div above, add some dependencies. After adding react and react-dom, now it is ready to code as function by function.

```typescript jsx
function Person() { 
  return (
    <div className="person"> 
      <h1>React</h1>
      <p>Age: 28</p>
    </div>
  );
}
ReactDOM.render(<Person />, document.querySelector("#p1"));
```
- **ReactDOM.render(...)** This methods allows us to render a JS function as a component to the real DOM.
- It is not a exact HTML. 'class' becomes 'className' in JSX.
- The first parameter is the selector for the component Person, the second parameter tells that where to render it is.

```html
<div id="p1"></div>
```
Now, it is going to be rendered the *div* whose id is *p1*.
But, 
```html
<div id="p2"></div>
```
It can't be reused. We can configure the components dynamically. ***props*** is used for it.
```typescript jsx
function Person(props) { 
  return (
    <div className="person"> 
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}
ReactDOM.render(<Person  name="React" age="12"/>, document.querySelector("#p1"));
```
- Dynamic parameters is passed in *..render(..)*. Thus we don't need to write for *p1* and *p2* separately.
```typescript jsx
ReactDOM.render(<Person  name="React" age="12"/>, document.querySelector("#p1"));
ReactDOM.render(<Person  name="React-DOM" age="21"/>, document.querySelector("#p2"));
```
- The parenthesis allows us to write multiple line of code in JSX
```typescript jsx
  return (

  );
```
- We can define component as a wrapped variable.
```typescript jsx
function Person(props) { 
  return (
    <div className="person"> 
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}
const app = (
  <div>
    <Person name="React" age="12" /> 
    <Person name="Reac-DOM" age="18" /> 
  </div>
);
ReactDOM.render(app, document.querySelector("#app"));
```
```html
<div id="app"></div>
```
We have to wrap with *div*, because JSX has the requirement of only having one root element. So adjacent elements are not allowed.
 
## 2 - Next-Gen JS
### 2.1 - let & const

- *let* is for creating variable that you really want to create a variable in a modern way.
- *const* for constants.

### 2.2 - Arrow Functions
- Traditional function definition:
```js
function x() {
  
}
```
- Arrow function definition:
```js
const myFunc = number => number * 2;
console.log(myFunc(5));
```
No more issues with ***this*** keyword. When use ***this*** in an arrow function, it keep its context and not changed surprisingly on runtime.
- The usage contracts of arrow functions is same lambda expressions in Java.

### 2.3 - Exports & Imports (Modules)
person.js:
```js
const library = {
    name: "React"
}

export default library;
```
- ***default*** keyword means if we just import something from that file that will be always our default export.
- So in this case *person* constant. Thus when we import person with file name *'person.js'*, we can name it as whatever we want.

utility.js:
```js
export const clean = () => {};
export const baseData = 10;
```
- Import syntax uses the curly braces to explicitly target specific things from that file. These are called ***named exports***

app.js
```js
import person from './person.js'
import prs from './person.js'

import {clean} from 'utility.js'
import {baseData} from 'utility.js'
import {baseData as SpecificName} from 'utility.js'
import * as bundled from 'utility.js'
```

### 2.4 - Classes
Class definition:
- [x] with constructor definition
```js
class Library {
    constructor() {
        
    }
    name = 'React';
    call = () => {};
}
```
Usage:
```js
const myLibrary = new Library();
myLibrary.call();
console.log(myLibrary.name);
```
Inheritance:
```js
class Library extends Code {}
```
Example: 
 ```js
class Gender {
  constructor() {
    this.gender = 'male';
  }
  
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Gender {
  
  constructor() {
    super();
    this.name = 'React-DOM';
  }
  
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
```
- When a class extends another, ***super()*** calls should be done explicitly.
- ***this.name = 'React-DOM';*** definition gives us an instance field.

### 2.5 - Spread & Rest Operators
**Spread**: Used to split up array elements or object properties.
```js
const newArray = [...oldArray, 1, 2];
const newObject = {...oldObject, newProp: 5};
```
- If we want to add all the elements from the *oldArray* to *newArray* and additionaly add one or more elements.
- If we create a *newObject* with new properties, '...' is to pull out all the properties of the old object and their values and add them as key-value pairs to the new object.
**Note**: If *oldObject* has a property *newProp*, it would be overridden by a *newProp: 5*. It takes precedence.

**Rest**: Used to merge a list of function arguments into an array.
```js
function sortArgs(...args) {
    return args.sort();
}
``` 

### 2.6 - Destructuring
Easily extract array elements or object properties and store them in variables.
- Array Destructuring
```js
[a, b] = ['React', 'React-DOM'];
console.log(a); //React
console.log(b); //React-DOM
``` 
- Object Destructuring
```js
({name} = {name: 'React', type: 'Library'});
console.log(name); //React
console.log(type); //undefined
``` 

### 2.7 - Reference & Primitives Types
```js
const number = 1;
const num2 = number;

console.log(num2); // (1)

const person = {
  name: 'React'
};

const secondPerson = person; // (2)
secondPerson.name = 'Not React';
console.log(person); //Not React
``` 
- (1) real copy of *number*.
- (2) not copied the *person*. Modifications apply on the original *person*, when we do modification on *secondPerson* object.

Immutable way of creating or duplicating objects are important. Thus we can't change the original objects in an unexpected behaviour.
 ```js
const thirdPerson = {
    ...person
};
thirdPerson.name = 'Immutable Way';
console.log(thirdPerson); //Immutable Way
console.log(person); //Not React
 ``` 

### 2.8 - Array Functions
- *filter()*
- *map()*
- *sort()*

