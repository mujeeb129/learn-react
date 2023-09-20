import { useState } from "react";
import "./styles.css";

// push - user to append element to arrray
let dummyArray = ["Sports", "Cooking", "Reading"];
dummyArray.push(["Exercise", "done"]);
console.log(dummyArray);

// length - return length of array
console.log(dummyArray.length);

// findIndex - returns index of the item
console.log(dummyArray.findIndex((item) =>  {
  return item === 'Sports'
}))

// map - used to edit the elemets in the array as whole
const editedDummyArray = dummyArray.map((item) => item + ' < ! >')
console.log(editedDummyArray)

// Destructuring
const [firstName, lastName] = ['Mujeeb', 'Rahman']
console.log(firstName)

const {name : userName, age} = {
  name : ' Mujeeb',
  age: 12
}

console.log(userName)
console.log(age)

localStorage.setItem('id', userName)






// This array is used to contents in the each tab
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];


export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
