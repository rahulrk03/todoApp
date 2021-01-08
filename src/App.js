import './App.css';
import React, { useState, useEffect } from 'react';
import { FormControl, Button, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    //this code here...fores when the app.js loads
    db.collection('todos').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc =>({id:doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); // Stop refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput(''); // Clear up the input after clicking
  }

  return (
    <div className="App">
      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
        </Button>

        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/> 
          // <li>{todo}</li>
        
        ))}
      </ul>

    </div>
  );
}

export default App;
