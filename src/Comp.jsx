

// import React, { useState,useEffect} from "react";

// function Comp() {
//   const [tasks, setTasks] = useState(["Eat breakfast", "take a shower", "running"]);
//   const [newTask, setNewTask] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//    const [editedTask, setEditedTask] = useState("");
//   useEffect(() => {
//     const savedTasks = localStorage.getItem("tasks");
//     if (savedTasks) {
//       setTasks(JSON.parse(savedTasks)); 
//     }
//   }, []);

  
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   function handleInputChange(event) {
//     setNewTask(event.target.value);
//   }

//   function handleKeyPress(event) {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   }

//   function addTask() {
//     if (newTask.trim() !== "") {
//       setTasks((prevTasks) => [...prevTasks, newTask.trim()]);
//       setNewTask("");
//     }
//   }

//   function deleteTask(index) {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);

//     if (editIndex === index) {
//       setEditIndex(null);
//       setEditedTask("");
//     }
//   }

//   function moveTaskUp(index) {
//     if (index > 0) {
//       const updatedTasks = [...tasks];
//       [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
//       setTasks(updatedTasks);
//     }
//   }

//   function moveTaskDown(index) {
//     if (index < tasks.length - 1) {
//       const updatedTasks = [...tasks];
//       [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
//       setTasks(updatedTasks);
//     }
//   }

//   function handleEdit(index) {
//     setEditIndex(index);
//     setEditedTask(tasks[index]);
//   }

//   function saveEditedTask() {
//     if (editedTask.trim() !== "") {
//       const updatedTasks = [...tasks];
//       updatedTasks[editIndex] = editedTask.trim();
//       setTasks(updatedTasks);
//       setEditIndex(null);
//       setEditedTask("");
//     }
//   }

//   return (
//     <div className="to-do-list">
//       <h1>TO-DO-LIST</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a task..."
//           value={newTask}
//           onChange={handleInputChange}
//           onKeyDown={handleKeyPress}
//         />
//         <button className="add-button" onClick={addTask}>
//           Add
//         </button>
//       </div>
//       <ol>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {editIndex === index ? (
//               <>
//                 <input
//                   type="text"
//                   value={editedTask}
//                   onChange={(e) => setEditedTask(e.target.value)}
//                   className="edit-input"
//                 />
//                 <button className="save-button" onClick={saveEditedTask}>
//                   Save
//                 </button>
//               </>
//             ) : (
//               <>
//                 <span className="text">{task}</span>
//                 <button className="delete-button" onClick={() => deleteTask(index)}>
//                   <i className="fas fa-trash"></i>
//                 </button>
//                 <button
//                   className="move-button"
//                   onClick={() => moveTaskUp(index)}
//                   disabled={editIndex !== null}
//                 >
//                   <i className="fas fa-arrow-up"></i>
//                 </button>
//                 <button
//                   className="move-button"
//                   onClick={() => moveTaskDown(index)}
//                   disabled={editIndex !== null}
//                 >
//                   <i className="fas fa-arrow-down"></i>
//                 </button>
//                 <button className="edit-button" onClick={() => handleEdit(index)}>
//                   <i className="fas fa-pen "></i>
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ol>

//       {/* Add this style to your CSS or global styles */}
//       <style>{`
//         button:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Comp;

import React, { useState, useEffect } from "react";

function Comp() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : ["Eat breakfast", "take a shower", "running"];
  });

  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask.trim()]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    if (editIndex === index) {
      setEditIndex(null);
      setEditedTask("");
    }
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function handleEdit(index) {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  }

  function saveEditedTask() {
    if (editedTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editedTask.trim();
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditedTask("");
    }
  }

  return (
    <div className="to-do-list">
      <h1>TO-DO-LIST</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="edit-input"
                />
                <button className="save-button" onClick={saveEditedTask}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  <i className="fas fa-trash"></i>
                </button>
                <button
                  className="move-button"
                  onClick={() => moveTaskUp(index)}
                  disabled={editIndex !== null}
                >
                  <i className="fas fa-arrow-up"></i>
                </button>
                <button
                  className="move-button"
                  onClick={() => moveTaskDown(index)}
                  disabled={editIndex !== null}
                >
                  <i className="fas fa-arrow-down"></i>
                </button>
                <button className="edit-button" onClick={() => handleEdit(index)}>
                  <i className="fas fa-pen"></i>
                </button>
              </>
            )}
          </li>
        ))}
      </ol>

      <style>{`
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}

export default Comp;
