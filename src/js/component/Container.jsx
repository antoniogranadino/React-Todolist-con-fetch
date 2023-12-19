import React, {useState} from "react";
import Input from "./Input";
import TaskList from "./TaskList";


const Container = () => {
	const[list, setlist] = useState([])
	
	const nombre = (tarea) => {
		setlist([tarea])
	}
	return (
		<div>
			<div className="text-center border border-dark">
				<h1 className="text-center mt-5 display-1">Todo</h1>
				<Input nombre = {nombre} />
				<TaskList list ={list} />
			</div>
		</div>
	);
};

export default Container;
