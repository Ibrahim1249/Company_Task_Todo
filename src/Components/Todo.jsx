import { useEffect, useState } from "react";
import data from "../../data.json";
import SingleTodo from "./SingleTodo";

function Todo() {
  const [todo, setTodo] = useState(localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : data);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search , setSearch] = useState("")

  // converting currentTimeStamp to this format Date , time such as  August 4, 2024 , 12:16:21 PM
  const timeConvertor = ({ timestamp }) => {
    const date = new Date(timestamp);

    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    return {
      date: formattedDate,
      time: formattedTime,
    };
  };

  // this function simply add todo in our todo array 
  const addTodoToList = (title, description) => {
    const currentTimeStamp = timeConvertor({
      timestamp: new Date().toISOString(),
    });
    setTodo([
      ...todo,
      {
        id: todo.length + 1,
        title: title,
        description: description,
        completed: false,
        lastUpdated: currentTimeStamp,
      },
    ]);
  };

   // this function simply update todo in our todo array 
  const updateTodoItem = (id, updateTodo) => {
    const currentTimeStamp = timeConvertor({
      timestamp: new Date().toISOString(),
    });
    setTodo(
      todo.map((todo) =>
        todo.id === id
          ? { ...todo, ...updateTodo, lastUpdated: currentTimeStamp }
          : todo
      )
    );
  };

  // this function simply  help us to complete todo so that i will reflect in UI as line through
  const completeTodoItem = (id) => {
    const currentTimeStamp = timeConvertor({
      timestamp: new Date().toISOString(),
    });
    setTodo(
      todo.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              lastUpdated: currentTimeStamp,
            }
          : todo
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoToList(title, description);
    setDescription("");
    setTitle("");
  };

  // storing data in local storage
  useEffect(() => {
   localStorage.setItem("todoData",JSON.stringify(todo))

 }, [addTodoToList , updateTodoItem , completeTodoItem]);

  
  // filter todo
  const filteredTodo = todo?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="todo-container">
        <h2>Todo List</h2>

        <form onSubmit={handleSubmit} className="input-container">
          <input
            type="text"
            placeholder="write Title.."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <input
            type="text"
            placeholder="write description..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
          <button className="button" type="submit">Add</button>
        </form>
          
          <div className="search">
             <input type="text" placeholder="search todo.." value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          </div>
        <div className="list-container">
          {filteredTodo.map((todo, index) => {
            return (
              <SingleTodo
                key={index}
                todo={todo}
                completeTodoItem={completeTodoItem}
                updateTodoItem={updateTodoItem}
                timeConvertor={timeConvertor}
              />
            );
          })}
        </div>

      </div>
    </>
  );
}

export default Todo;
