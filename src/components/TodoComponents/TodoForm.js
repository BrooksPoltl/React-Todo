import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addItem}>
                <input
                    type="text"
                    name="inputText"
                    placeholder="...todo"
                    value={props.inputText}
                    onChange={props.handleChange}
                />
                <button type="submit">Add Todo</button>
                <button >Clear Completed</button>
            </form>
        </div>
    );
};


export default TodoForm; 