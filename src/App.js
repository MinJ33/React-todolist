import React, { useState } from 'react';
import './App.css';

function App(){ 

// State hook 'useState'
const [newItem, setNewItem] = useState("")

// Helper Functions
function addItem () {
  console.log(newItem)
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
