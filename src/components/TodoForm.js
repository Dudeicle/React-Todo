import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    handleChanges = e => {
        this.setState({
            task: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.task);
        this.setState({
            task: ""
        });
    };

    render (){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="item"
                    value={this.state.task}
                    onChange={this.handleChanges}
                />
                
                <button>Add Item!</button>
            </form>
        );
    }
}

export default TodoForm;