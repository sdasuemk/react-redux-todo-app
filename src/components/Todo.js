import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux' 
// useSelector is used to get the store state, 
//useDispatch is used to wrapp the action functions
import {addTodo, deleteTodo, clearTodo} from '../actions/index'; // all actions

const Todo = () => {
    const [input, setInput] = useState("");
    const list = useSelector((state) =>state.todoReducer.list); // store state
    const dispatch = useDispatch(); // dispatch
    
    const handleChange = (e) => {
        setInput(e.target.value);

    };
    const handleSubmit = () => {
        dispatch(addTodo(input)); // dispatch use case
        setInput("");
        
    };
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        
    };
    const handleClearAll = () => {
        dispatch(clearTodo())
    }
  return (
    <div>
        <input type="text" placeholder="Input Task" value={input} onChange={handleChange}/>
        <button type="button" onClick={() => handleSubmit()}>add</button>
        <div>
            <p>Check-output</p>
            {
                list.map((todo) =>(
                    <div key={todo.id}>
                        <p>{todo.data}</p>
                    <button type='button' onClick={() => handleDelete(todo.id)}>delete</button>
                    </div>
                ))
            }
        </div>
        <button type="button" onClick={() => handleClearAll()}>Clear All</button>
    </div>
  )
}

export default Todo