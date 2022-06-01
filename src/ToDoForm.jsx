import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className='form-group' value={userInput} onChange={handleChange} placeholder="Tapşırıqı daxil edin..."/>
            <button style={{background:"green",border:'1px solid green',color:"#fff",padding:"2px 20px"}}>Təsdiq et</button>
        </form>
    );
};

export default ToDoForm;