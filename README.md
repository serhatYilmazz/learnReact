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
- The first parameter is the selector for the component Person, the second parameter tells that where to render it.

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

## 3 - Base Features & Syntax

### 3.1 - Component Basics
It can be written. But it is not a react component.
```typescript jsx
ReactDOM.render(<h1> Test </h1>, document.getElementById('root'));
```
 But in react component:
```typescript jsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
- App is the root component.
---
```typescript jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hi I'm a react app </h1>
    </div>
  );
}
export default App;
```
- Creating a class with *class* keyword and extends from *Component* from **React** library.  
- This is the one way of the creating components.
- *render()* method is needed to render something to the screen.
- Every react component has to return or render some HTML code which can be rendered to the DOM to the screen.
- Export as default the component to use another files. 
- Actually it is **not** HTML code. It is just a syntactical sugar. It is JSX.

### 3.2 - Understanding JSX
```typescript jsx
import React from 'react';
import './App.css';

function App() {
  return React.createElement('div', null, 'h1', 'I\'m a React App!!!');
}
export default App;
```
- *createElement()* is a method that takes at least three arguments.
- The first one the element we want to render to the DOM. This could be a *div*. It can be our own component that is available.
- The second argument is configuration for it. It is JS object and optional.
- The third one is the children that implies what is nested inside of it.
Here, *h1* (the third argument) is interpreted as text
For this:
```typescript jsx
import React from 'react';
import './App.css';

function App() {
  return React.createElement('div', null, React.createElement('h1', null, 'I\'m a React App!!!'));
}
export default App;
```
There is not any css styling. Because we didn't add any configuration.
For this: (I)
```typescript jsx
import React from 'react';
import './App.css';

function App() {
  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React App!!!'));
}
export default App;
```
As a result the code above is equal to: (II)
```typescript jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hi I'm a react app </h1>
    </div>
  );
}
export default App;
```
So, at the end of the day, JSX is compiled to (I).

### 3.3 - JSX Restrictions
- JS keywords can not be used in JSX. (*className* for *class*)
- JSX has to have one root element. We can't do:
```typescript jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hi I'm a react app </h1>
    </div>
    // This h1 gives error.
    <h1> Another heading here </h1>
  );
}
export default App;
```
It is kind of loosened. The best practice, wrap everything into one root element per component.

### 3.4 - Creating a Functional Component 
When creating a component, the directory starts with capital letter as a convention.
- The function name starts with lowercase character.

When creating components, you have the choice between two different
ways:
- Functional components (also referred to as "presentational", "dumb" or
"stateless" components):
```typescript jsx
import React from "react";
const person = () => {
    return <p>I'm a Person!</p>
};

export default person;

```
-  class-based components (also referred to as "containers", "smart" or "stateful"
components):
```typescript jsx
import {Component} from 'react';

class Cmp extends Component { 
    render () {
        return <div>some JSX</div> 
    } 
}
```
The important thing here is to use these components in dynamic way.

### 3.5 - Working with Props 
- Import *Person*. 
- Pass *name* and *age* parameter to Person.
 ```typescript jsx
import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1> Hi I'm a react app </h1>
        <Person name="React" age="5" />
        <Person name="Angular" age="6" >My Hobbies: Playing</Person>
        <Person name="Vue" age="4"/>
    </div>
  );
}

export default App;
 ```
- Take ***props*** as a parameter.
 ```typescript jsx
import React from "react";

const person = (props) => {
    return <p>I'm {props.name} and I'm {props.age} years old.</p>
};
export default person;
 ```
But what happened if we add something between our component tags like:
 ```typescript jsx
<Person name="Angular" age="6" >My Hobbies: Playing</Person>
 ``` 

### 3.6 - Understanding the Children Property 
 ```typescript jsx
import React from "react";

const person = (props) => {
    return (
        <p>I'm {props.name} and I'm {props.age} years old.</p>
        <p>I'm {props.name} and I'm {props.age} years old.</p>
    );
};
export default person;
 ```
As a remainder; there should be only a single root in a component.
So: 
 ```typescript jsx
import React from "react";

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;
 ```
There is a reserved property: ***props.children*** that provides us to reach the field that enclosed by the component's tag.

### 3.7 - Understanding & Using State
Sometimes we need an information that does not come from outside, inside and we need to change it again inside of the component.
Therefore we need a class, because a class has properties.
We have a way that is only works in a class that extends ***Component***.
In a function component, it does not work.
- ***state*** is reserved.
 ```typescript jsx
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        {"name": "React", "age": 5},
        {"name": "Angular", "age": 6},
        {"name": "Vue", "age": 4}
    ],
    otherState: 'some other value'
  };
    render() {
        return (<div className="App">
               <h1> Hi I'm a react app </h1>
               <button>Switch Name</button>
               <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
               <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Playing</Person>
               <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
           </div>)
    }
}

export default App;
 ```
- Changing ***state***, it will lead react to re-render our DOM or update the DOM. For example changing name, the component, the DOM will be re-rendered. 

### 3.8 - Handling Events with Methods
- Click event is normally written as *onclick()* in JS. But it is written as *onClick()* in JSX.  
- We have a method named *switchNameHandler*. That means we have a method and we don't call it actively. ***..Handler*** part here is to indicate that this is the method we aren't actively calling it, but we assigned it as eventHandler.    
- Don't call it when we add the handler to the button or any other place. We only need to pass a reference.  
 ```typescript jsx
switchNameHandler = () => {
      console.log('Was clicked');
    };

    render() {
        return (<div className="App">
            <h1> Hi I'm a react app </h1>
            <button onClick={this.switchNameHandler}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Playing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>)
    }
 ```
### 3.9 - Manipulating the State
- ***this.setState()*** is a ***Component*** provided function that ensures that ***state*** is changed and the changes are reflected to DOM. 
- It takes an object and then merge it with our existing state.
- It does not change the property that doesn't overwritten in state.
- For example ***otherState*** remains untouched.
- Don't change state directly like: It already does not change the DOM. 
 ```typescript jsx
switchNameHandler = () => {
    this.state.persons[0].name = "React-DOM";
};
 ```
 ```typescript jsx
    switchNameHandler = () => {
      this.setState({
        persons: [
          {"name": "React-DOM", "age": 5.5555},
          {"name": "Angular", "age": 6.77},
          {"name": "Vue", "age": 4.66}
        ]
      });
    };
 ```
It changes state as a first place, then what else ?

Answer: ***props***. If *state* or *props* changes, it analyzes the code it already rendered to the DOM. After then it re-render the place that needs to be updated to reflect new state or props. 
