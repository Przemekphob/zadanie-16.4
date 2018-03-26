import React from "react";

const TodoForm = props => (
	<form>
		<input
			type="text"
			value={props.val}
			placeholder="new task"
		/>
	</form>
);

export default TodoForm;