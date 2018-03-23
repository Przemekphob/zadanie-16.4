import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
	}

    render() {
        return (
            {this.props.todo} 
        )
    }

}

export default Todo;