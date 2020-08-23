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
- Don't change state directly like: It does not change the DOM anyway. 
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

### 3.10 - Functional (Stateless) vs class (Stateful) Components
- In a functional component, we can't change state.
- Best practice is the usage of function form of components as often as possible.
- Because the simple component which are just functions receiving props are very clear about what they do. And they ***don't manipulate*** application state.
- The application state should only be changed and handled in a few selected components, referred as containers.
- *App.js* is an example of a container.

### 3.11 - Passing Method References Between Components
- We can pass methods also as props so that we can call a method which might change to state in another component which does not have direct access to the state and which shouldn't have direct access to the state.
(You can pass down click handlers which allow you to change data in the parent component in the *App* component.)

*App.js*:   
 ```typescript jsx
<Person name={this.state.persons[1].name} myEvent={this.switchNameHandler} age={this.state.persons[1].age}>My Hobbies: Playing</Person>
 ```
*Person.js*:   
 ```typescript jsx
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I'm {props.age} years old.</p>
            <p onClick={props.myEvent}>{props.children}</p>
        </div>
    );
};
 ```
So now, when we click the *My Hobbies: Playing*, the state in *App.js* changes.


What if we want to pass a value to our function.
 ```typescript jsx
    switchNameHandler = (newName) => {
      this.setState({
        persons: [
          {"name": newName, "age": 5.5555},
          {"name": "Angular", "age": 6.77},
          {"name": "Vue", "age": 4.66}
        ]
      });
    };
 ```
How to pass the newName. There are two ways.
- The first way:
```typescript jsx
render() {
        return (<div className="App">
            <h1> Hi I'm a react app </h1>
            <button onClick={this.switchNameHandler.bind(this, 'React-vers1')}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} myEvent={this.switchNameHandler.bind(this, 'React-vers2')} age={this.state.persons[1].age}>My Hobbies: Playing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>)
    }
```
- ***this*** here, tells that when we called this on the method, it should refer ***App.js*** instance properties. Because the place where we pass ***this*** implies ***App.js***.
- When we click the button, the name of the first element will be *React-vers1*, but when we click the paragraph *My Hobbies: Playing*, the name will be *React-vers2*. 
---
- The second way:
```typescript jsx
render() {
        return (<div className="App">
            <h1> Hi I'm a react app </h1>
            <button onClick={() => this.switchNameHandler('Say my name')}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} myEvent={this.switchNameHandler.bind(this, 'React-vers2')} age={this.state.persons[1].age}>My Hobbies: Playing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>)
    }
```
- Since it is deferred execution, *this.switchNameHandler('Say my name')* does not execute immediately. It can take a parameter and return a function call which is *this.switchNameHandler('Say my name')* in this case.
- But this way can be inefficient. The first way is the best practice.

### 3.12 - Adding Two Way Binding
What if we want to change the name our own.
We define a new handler for name changing.

*App.js*:
```typescript jsx
  nameChangedEventHandler = (event) => {
        this.setState({
            persons: [
                {"name": 'React-DOM', "age": 5.5555},
                {"name": event.target.value, "age": 6.77},
                {"name": "Vue", "age": 4.66}
            ]
        });
    };

 render() {
        return (<div className="App">
            <h1> Hi I'm a react app </h1>
            <button onClick={() => this.switchNameHandler('React-vers32')}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name}
                    myEvent={this.switchNameHandler.bind(this, 'React-vers2')}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedEventHandler}>My Hobbies: Playing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>)
    }
```
- The event object will actually be passed to method automatically by React like a normal JS. We have default get access to the ***event*** object.
- We pass this handler to second *Person* component.

*Person.js*: 
```typescript jsx
import React from "react";

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I'm {props.age} years old.</p>
            <p onClick={props.myEvent}>{props.children}</p>
            <input type='text' onChange={props.changed}/>
        </div>
    );
};

export default person;
```
- ***changed*** property is a contract with *Person* and *App*.
- When *onChange()* event is triggered, *nameChangedEventHandler* will called.

What if we want to bind two-way:
```typescript jsx
<input type='text' onChange={props.changed} value={props.name}/>
```
- We need to tell that ***value*** of the ***input*** should know ***props.name***.
- If we remove ***onChange={props.changed}***, we can't change the input field since we don't handle the changing event of it.

It is for two-way binding setup.

### 3.13 - Adding Styling with Stylesheets

We create Person/Person.css. After then we should import it the place where we want to use it.
```typescript jsx
import React from "react";
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>I'm {props.name} and I'm {props.age} years old.</p>
            <p onClick={props.myEvent}>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    );
};
export default person;
```
- Thanks to *webpack*, we can use our *.css* files without merging it any other so we can obtain single and modular styling.

- The second way: 

*App.js*:
```typescript jsx
render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        return (<div className="App">
            <h1> Hi I'm a react app </h1>
            <button style={style} onClick={() => this.switchNameHandler('React-vers32')}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name}
                    myEvent={this.switchNameHandler.bind(this, 'React-vers2')}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedEventHandler}>My Hobbies: Playing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>)
    }
```
- Hovering is difficult when we are using inline styles.
- We can use global *App.css* file.

## 4 - Working with Lists and Conditionals

### 4.1 - Rendering Content Conditionally

- With arrow function definition, ***this*** keyword inside the method always and under all circumstances returns to the class.
```typescript jsx
state = {
        persons: [
            {"name": "React", "age": 5},
            {"name": "Angular", "age": 6},
            {"name": "Vue", "age": 4}
        ],
        otherState: 'some other value',
        showPersons: false
    };
```
- We added *showPersons* to ***state***.
- In *render()*:
```typescript jsx
return (
            <div className="App">
                <h1> Hi I'm a react app </h1>
                <button style={style} onClick={this.togglePersons}>Toggle Persons</button>
                {this.state.showPersons ? 
                    <div>
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                    <Person name={this.state.persons[1].name}
                            myEvent={this.switchNameHandler.bind(this, 'React-vers2')}
                            age={this.state.persons[1].age}
                            changed={this.nameChangedEventHandler}>My Hobbies: Playing</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                </div> : null
                }
            </div>
        );
```
We added curly braces to a new *div* that encapsulates ***Person***s. So we can use normal JS expressions since we have curly braces. We can use ternary operator for it.

### 4.2 - Handling Dynamic Content the JavaScript Way
When react decides re-render to DOM, it executes everything inside ***render()*** method. So we can use it.
```typescript jsx
render() {
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                    <Person name={this.state.persons[1].name}
                            myEvent={this.switchNameHandler.bind(this, 'React-vers2')}
                            age={this.state.persons[1].age}
                            changed={this.nameChangedEventHandler}>My Hobbies: Playing</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                </div>
            );
        }

        return (
            <div className="App">
                <h1> Hi I'm a react app </h1>
                <button style={style} onClick={this.togglePersons}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
```
### 4.3 - Outputting Lists
There is special function for loop through a list to render. We just use VanillaJS functions. 
```typescript jsx
let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map(person => {
                            return <Person name={person.name} age={person.age}/>
                        })
                    }
                </div>
            );
        }
```
We want to remove a Person:

*App.js*
```typescript jsx
    deletePersonHandler = (index) => {
        const persons = this.state.persons;
        persons.splice(index, 1);
        this.setState({
            persons: persons
        });
    };
```
- Index is automatically provided by *map()*.
```typescript jsx
    let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person myEvent={this.deletePersonHandler.bind(this, index)} name={person.name}  age={person.age}/>
                        })
                    }
                </div>
            );
        }
```
*Person.js*
```typescript jsx
const person = (props) => {
    return (
        <div className="Person">
            <p>I'm {props.name} and I'm {props.age} years old.</p>
            <button type="button" onClick={props.myEvent}>Delete</button>
        </div>
    );
};
```
But this approach has flow...

We get state reference directly. We should get a copy of it to prevent unintended results. So:
```typescript jsx
    deletePersonHandler = (index) => {
        //(1) const persons = this.state.persons.slice(); // Take copy of the array
        const persons = [...this.state.persons]; //(2) Take copy of the array with spread operator.
        persons.splice(index, 1);
        this.setState({
            persons: persons
        });
    };
```
With immutable fashion:
- Create a copy
- Change that
- Update the state with it.

### 4.4 - Lists & Keys
Key property is default property react expects to find on an element no matter if it is a custom component or a default HTML element which we render through a list.
- Key property helps React update the list efficiently.
- React doesn't render whole DOM, it needs to know which elements of virtual DOM are changed. To prevent React to render all list, ***key*** property allows React to keep track of individual elements to find out which elements changed and which did not.
We add *id* field that are unique on each *Person*. 
```typescript jsx
state = {
    persons: [
        {"id": "asd123", "name": "React", "age": 5},
        {"id": "bcd3214", "name": "Angular", "age": 6},
        {"id": "fghrwt31", "name": "Vue", "age": 4}
    ],
    otherState: 'some other value',
    showPersons: false
};
```
*key* property:
```typescript jsx
let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person key={person.id} myEvent={this.deletePersonHandler.bind(this, index)} name={person.name}  age={person.age}/>
                        })
                    }
                </div>
            );
        }
```
### 4.5 - Flexible Lists
Side Note 
---
If an event occurs in background, like *event* is passed to function automatically, after then we want to use event an the parameter we enter together, we should do:
 ```typescript jsx
persons = (
    <div>
        {
            this.state.persons.map((person, index) => {
                return <Person key={person.id}
                               myEvent={this.deletePersonHandler.bind(this, index)}
                               name={person.name}
                               age={person.age}
                               // changed={(event) => this.nameChangedEventHandler(event, person.id)}
                               changed={this.nameChangedEventHandler('ser', 'os')}
                />
            })
        }
    </div>
);
 ```
- *changed={this.nameChangedEventHandler('ser', 'os')* is a binding. But in function:
```typescript jsx
nameChangedEventHandler = (name, name2) => event => {
    this.setState({
        persons: [
            {"name": event.target.value, "age": 5.5555},
            {"name": name, "age": 6.77},
            {"name": name2, "age": 4.66}
        ]
    });
};
```
- We should curry it. Because inner function returns a function implicitly. It can be also written as:
```typescript jsx
nameChangedEventHandler = (name, name2) => {
    return (eventt) => {
        this.setState({
            persons: [
                {"name": eventt.target.value, "age": 5.5555},
                {"name": name, "age": 6.77},
                {"name": name2, "age": 4.66}
            ]
        });
    }
};
```
We should use arrow function to *this* keyword implies always *App.js*. So we ***can't*** write it like
```typescript jsx
 nameChangedEventHandler(name, name2) {
        return function (eventt) {
            this.setState({
                persons: [
                    {"name": eventt.target.value, "age": 5.5555},
                    {"name": name, "age": 6.77},
                    {"name": name2, "age": 4.66}
                ]
            });
        }
    };
```
---
Now we define *onChange* event on our *Person* components respectively.
```typescript jsx
persons = (
    <div>
        {
            this.state.persons.map((person, index) => {
                return <Person key={person.id}
                               myEvent={this.deletePersonHandler.bind(this, index)}
                               name={person.name}
                               age={person.age}
                               changed={(event) => this.nameChangedEventHandler(event, person.id)}
                />
            })
        }
    </div>
);
```
- First we pass *changed* property to *Person* component and we define it with arrow function.
- We pass *event* (default from JS) and *person.id*.

Now we can change *nameChangedEventHandler* to:
```typescript jsx
nameChangedEventHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => {
        return p.id === id
    });
    const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
        persons: persons
    });
};
```
Let's dive into it:
---
```typescript jsx
let personIndex = this.state.persons.findIndex(p => {
    return p.id === id
});
```
- Find index of the person from state.
---
```typescript jsx
const person = {
       ...this.state.persons[personIndex]
   };
```
- Obtaining person from state with an immutable way.
---
```typescript jsx
person.name = event.target.value;
```
- Getting new name from input field and change on immutable person's name.
---
```typescript jsx
const persons = [...this.state.persons];
persons[personIndex] = person;
```
- Getting the person whose name will change is got immutable way.
- Changing immutable Person list with changed Person object.
---
```typescript jsx
this.setState({
            persons: persons
        });
``` 
- It is reflected to state.
---

## 5 - Styling React Components & Elements

### 5.1 - Setting Styles Dynamically
We want to change toggle person button background color toggle when we click it. So:
```typescript jsx
render() {
    const style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
    };

    let persons = null;
    if (this.state.showPersons) {
        persons = (
            <div>
                {
                    this.state.persons.map((person, index) => {
                        return <Person key={person.id}
                                       myEvent={this.deletePersonHandler.bind(this, index)}
                                       name={person.name}
                                       age={person.age}
                                       changed={(event) => this.nameChangedEventHandler(event, person.id)}
                        />
                    })
                }
            </div>
        );

        style.backgroundColor = 'red';
    }

    return (
        <div className="App">
            <h1> Hi I'm a react app </h1>
            <button style={style} onClick={this.togglePersons}>Toggle Persons</button>
            {persons}
        </div>
    );
}
```
- *style.backgroundColor = 'red';* is applied when *this.state.showPersons* is true.
- Everything is JS.

### 5.2 - Setting Class Names Dynamically
We want to apply the rule of:
- If list size of the person is less than or equal to 2, red,
- If list size of the person is 1 or less, red and bold.

*App.css*:
```css
.red {
    color: red;
}

.bold {
    font-weight: bold;
}
```
*App.js*:
```typescript jsx
render() {
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person key={person.id}
                                           myEvent={this.deletePersonHandler.bind(this, index)}
                                           name={person.name}
                                           age={person.age}
                                           changed={(event) => this.nameChangedEventHandler(event, person.id)}
                            />
                        })
                    }
                </div>
            );

            style.backgroundColor = 'red';
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1 className={classes.join(' ')}> Hi I'm a react app </h1>
                <button style={style} onClick={this.togglePersons}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
```
- *const classes* is for accumulate css class.
```typescript jsx
<h1 className={classes.join(' ')}> Hi I'm a react app </h1>
```
- We joined css classes to be formatted valid css class names.

### 5.3 - Adding and Using Radium
Hover can't be used directly.
```shell script
npm install --save radium
```
Radium is popular third party library that allows us to use pseudo selectors, media-queries and inline styles.
```typescript jsx
import Radium from "radium";
```
```typescript jsx
export default Radium(App);
```
- Import it and wrap the App with it.
- Adding and injecting some functionality to our *App.js*.
- Wrapping can be used both functional component and class based. 
```typescript jsx
render() {
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };
```
It can be used as:
```typescript jsx
if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person key={person.id}
                                           myEvent={this.deletePersonHandler.bind(this, index)}
                                           name={person.name}
                                           age={person.age}
                                           changed={(event) => this.nameChangedEventHandler(event, person.id)}
                            />
                        })
                    }
                </div>
            );

            style.backgroundColor = 'red';
            // Hovering is a JS object.
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }
```

### 5.4 - Using Radium for Media Queries
- Wrapping app with Radium is enough for Pseudo selectors. But if we want to use *media-queries* we need to use ***StyleRoot***.

*Person.js*:
```typescript jsx
import React from "react";
import Radium from "radium";
import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p>I'm {props.name} and I'm {props.age} years old.</p>
            <input value={props.name} onChange={props.changed} />
            <button type="button" onClick={props.myEvent}>Delete</button>
        </div>
    );
};

export default Radium(person);
``` 
*App.js*:
```typescript jsx
import Radium, {StyleRoot} from "radium";
...
return (
            <StyleRoot>
                <div className="App">
                    <h1 className={classes.join(' ')}> Hi I'm a react app </h1>
                    <button style={style} onClick={this.togglePersons}>Toggle Persons</button>
                    {persons}
                </div>
            </StyleRoot>
        );
```
### 5.5 - Enabling & Using CSS Modules
If we want to use each component's style responsible for the CSS file whose name is same to JS file of it, we need to enable CSS modules. For this:
Activate configurations.
```shell script
npm run eject
```
After execute the command, multiple configuration files come up.
```
config --> webpack.config.js:
{
  test: cssRegex,
  exclude: cssModuleRegex,
  use: getStyleLoaders({
    importLoaders: 1,
    sourceMap: isEnvProduction && shouldUseSourceMap,
  }),
  sideEffects: true,
},
```
Add:
```
use: getStyleLoaders({
  importLoaders: 1,
  sourceMap: isEnvProduction && shouldUseSourceMap,
  modules: {
    localIdentName: '[name]__[local]__[hash:base64:5]'
  },
}),
```
- *modules: true* for enabling CSS Modules. (For older versions)
- *localIdentName*  css classes getting unique name for per component, so that don't override each other applciation wide. 
    - *[name]* for css class name.
    - *[local]* will allow css loader to assign it local component. To scope it.
    - *[hash:base64:5]* unique hash not to override on application wide. 

So now we can use css classes like:
```typescript jsx
import appClasses from './App.css';
...
return (
    <div className={appClasses.App}>
        <h1 className={classes.join(' ')}> Hi I'm a react app </h1>
        <button style={style} onClick={this.togglePersons}>Toggle Persons</button>
        {persons}
    </div>
);
```
- *appClasses* now refers to *App.css* file.

*App.css*
```css
.App {
    text-align: center;
}

.red {
    color: red;
}

.bold {
    font-weight: bold;
}
```
So *appClasses.App* refers *.App* in *App.css*.
What happened ?:
- The Css Loader transforms the css class names in the css file into a unique one using the ***localIdentName*** pattern we set up *webpack.config.js* file where it essentially takes the class name to find the file name of the JS file or you import the class and some random hash to generate unique css class names.
- If we observe the console for changing class names, we can see strange and unique names for each class that defined in *.css* file.

### 5.6 - Adding Pseudo Selectors
Just define css of those which defined statically in *render()* previously.

*App.css*:
```css
.App {
    text-align: center;
}

.red {
    color: red;
}

.bold {
    font-weight: bold;
}

.App button {
    border: 1px solid blue;
    padding: 16px;
    background-color: green;
    font: inherit;
    color: white
}

.App button:hover {
    background-color: lightgreen;
    color: black;
}

.App button.red {
    background-color: red;
}

.App button.red:hover {
    background-color: salmon;
    color: black;
}
```

```typescript jsx
render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
        persons = (
            <div>
                {
                    this.state.persons.map((person, index) => {
                        return <Person key={person.id}
                                       myEvent={this.deletePersonHandler.bind(this, index)}
                                       name={person.name}
                                       age={person.age}
                                       changed={(event) => this.nameChangedEventHandler(event, person.id)}
                        />
                    })
                }
            </div>
        );

        btnClass = appClasses.red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
        classes.push(appClasses.red);
    }
    if (this.state.persons.length <= 1) {
        classes.push(appClasses.bold);
    }

    return (
        <div className={appClasses.App}>
            <h1 className={classes.join(' ')}> Hi I'm a react app </h1>
            <button className={btnClass} onClick={this.togglePersons}>Toggle Persons</button>
            {persons}
        </div>
    );
}
```
- Define *btnClass* for dynamically change it in if statement.

### 5.6 - Working with Media Queries
*Person.css*:
```css
.Person {
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
}


@media (max-width: 500px) {
   .Person {
       width: 450px;
       text-align: end;
   }
}
```
It should work automatically Person component.
