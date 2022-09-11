// import React, {useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 1. Header */}
    <h1>Todo List App</h1>
      {/* 2. Input (input and button) */}

    <input
      type="text"
      placeholder="Add an item.."
    />

    <button> Add </button>

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
