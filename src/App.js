import React, { useState } from 'react';
import './App.css';

function App(){ 

// State hook 'useState'
const [newItem, setNewItem] = useState("")
                        // empty array initially
const [items, setItems] = useState([])

// Helper Functions
function addItem () {
 
  // if there's no new item alert this
  if (!newItem) {
    alert("Enter an item")
  }

  const item = {
    id: Math.floor(Math.random() * 1000),
    value: newItem // we get from the inputs
  }

  setItems(oldList => [...oldList, item])
  setNewItem("");
}
  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
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
      {items.map(item => {
        return (
        <li key={item.id}>{item.value}
        <button onClick={() => deleteItem(item.id) }>🔥</button>
        </li>
        )
      })}
    </ul>
    </div>
  )}


export default App;
