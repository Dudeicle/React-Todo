import React from 'react';

import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';

const list = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      task: list,
    };
  }
  
  addItem = taskItem => {
    const newItem = {
      task: taskItem,
      id: new Date(),
      completed: false
    };
    this.setState({
      task: [...this.state.task, newItem]
    });
  };
  
  toggleItem = itemId => {
    this.setState({
      task: this.state.task.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  
  render() {
    return (
      <div>
      
        <div>
          <h2>Welcome to your Todo App!</h2>
          
        </div>
        
        <div>
          <TodoList 
            toggleItem={this.toggleItem}
            task={this.state.task}
          />
          <TodoForm addItem={this.addItem} />
        </div>
      
      </div>
    );
  }
}

export default App;
