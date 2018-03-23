import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const Todolist = props => {
	const todoListElements = props.data.map(element => <Todo id={element.id} text={element.text} />)
	return (
        <ul className={style.TodoList}>{todoListElements}</ul>
    )
}

export default TodoList;