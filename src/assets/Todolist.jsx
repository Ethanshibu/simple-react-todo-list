import React,{useState} from "react";

function TodoList() {
    const [tasks, setTasks] = useState(["Eat BreakFast","Take a shower","Walk the dog"]);


    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }
    function addTask() {
        if (newTask.trim() !== "" ) {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(idx) {
        const updatedTasks = tasks.filter((_,i) => i !== idx);
        setTasks(updatedTasks)
    }
    function moveTaskUp(idx) {
        if (idx > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[idx],updatedTasks[idx-1]] = [updatedTasks[idx-1],updatedTasks[idx]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(idx) {
         if (idx < tasks.length-1) {
            const updatedTasks = [...tasks];
            [updatedTasks[idx],updatedTasks[idx+1]] = [updatedTasks[idx+1],updatedTasks[idx]];
            setTasks(updatedTasks);
        }

    }



    return (
        
        <div className="TodoList">
            <h1>
                Todo List
            </h1>
            <div>
                <input
                type="text"
                placeholder="Enter a task.."
                value={newTask}
                onChange={handleInputChange}
                />
                <button className="add-button" onClick={() => addTask()}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task,idx) => 
                <li key={idx}>
                        <span className="text">
                            {task}
                        </span>
                            <button 
                                className="delete-button" 
                                onClick={() => deleteTask(idx)}>
                                    delete
                            </button>
                            <button 
                                className="move-button" 
                                onClick={() => moveTaskUp(idx)}>
                                    ⬆️
                            </button>
                            <button 
                                className="move-button" 
                                onClick={() => moveTaskDown(idx)}>
                                    ⬇️
                            </button>
                </li> )}
            </ol>
        </div>
        
    )
}

export default TodoList;