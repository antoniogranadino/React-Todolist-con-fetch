import React, {useState} from "react";

const Input = (props) => {
    const[task, setTask] = useState()
    const handlechange = (event) =>{
        setTask(event.target.value)
        console.log(task)
    }

    const handlesubmit = (e) =>{
        e.preventDefault(); 

        props.nombre(task);

        setTask("");
    }

    return(
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" className="form-control-md"onChange={handlechange}/>
                <button type="submit" className="bg-danger">Add</button>
            </form>
        </div>
    )
};

export default Input;
