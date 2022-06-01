import React from 'react';
import ToDo from './ToDo';
 
 
const ToDoList = ({toDoList,handleToggle, handleFilter}) => {
   return (
       <div>
           {toDoList && toDoList.map((todo,id) => {
               return (
                   <ToDo key={id} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
               )
           })}
           <button className='btn btn-danger' style={{margin: '20px'}} onClick={handleFilter}>Tapşırıqı sil</button>
       </div>
   );
};
 
export default ToDoList;