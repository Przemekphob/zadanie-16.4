import React from 'react';

const Todo = props => 
<li id={props.id} ><button onClick={() => props.remove(props.id)}>delete</button>{props.name}</li>;

export default Todo;