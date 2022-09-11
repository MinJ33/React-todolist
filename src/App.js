import React, { useState } from 'react';
import './App.css';

function App(){ 

// State hook 'useState'
const [newItem, setNewItem] = useState("")
                        // empty array initially
const [items, setItems] = useState([])

// Helper Functions
function addItem () {
 
  const item = {
    id:Math.floor(Math.random() * 1000),
    value:newItem // we get from the inputs
  }

  setItems(oldList => [...oldList, item])
  setNewItem("");

  // let's see what's inside of our items array
  console.log(items)
}

  return (
    <div className="App">
      {/* 1. Header */}
    <h1>Todo List App</h1>

      {/* 2. Input (input and button) */}
    <input
      type="text"
      placeholder="Add an item.."
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
    />

    <button onClick={() => addItem()}> Add </button>

    {/* 3. List of Items (unordered list with items) */}
    <ul>
      <li>Take out the trash</li>
      <li>Water the plants</li>
      <li>Go to the gym</li>
    </ul>
    </div>
  );
}


export default App;
