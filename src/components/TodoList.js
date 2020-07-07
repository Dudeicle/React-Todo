// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo.js';


const TodoList = props => {

    console.log(props)

    return (
        <div className="todo-list">
            {props.list.map(item => (
                <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
            ))}
        </div>
    );
};

export default TodoList;