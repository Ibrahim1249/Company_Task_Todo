import React, { useState } from "react";

function SingleTodo({ todo, updateTodoItem, completeTodoItem }) {
  const [toggleDiv, setToggleDiv] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);

  // handleEdit simply call updateTodoItem and pass id along with updated content
  const handleEdit = () => {
    if(todo.completed) {
      alert("You already completed the todo !!!")
      return;
    }
    updateTodoItem(todo.id, { title: editTitle, description: editDescription });
    setIsEdit(!isEdit);
  };

  return (
    <>
      <div className="single-container">
        <div className="check">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => {
              completeTodoItem(todo.id);
            }}
          />
        </div>

        <div className="title">
          {/* if isEdit is true that means user able to edit content and that case input field should be visible to user */}
          {isEdit ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            />
          ) : (
            <h4
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </h4>
          )}

          {/* if toggleDiv is true  then case div will be expanded and user able to see description along with lastUpdated */}
          {toggleDiv ? (
            <div className="details-container">
              {isEdit ? (
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => {
                    setEditDescription(e.target.value);
                  }}
                />
              ) : (
                <li style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}>{todo.description}</li>
              )}
              <div className="detail">
                <p>
                  {" "}
                  LastUpdated :{" "}
                  {todo.lastUpdated.date && todo.lastUpdated.time
                    ? todo.lastUpdated.date + " , " + todo.lastUpdated.time
                    : todo.lastUpdated}
                </p>
                <button
                  className="button edit-button"
                  style={{
                    cursor: todo.completed ? "not-allowed" : "pointer",
                    opacity: todo.completed ? 0.6 : 1,
                  }}
                  onClick={handleEdit}
                >
                  {isEdit ? "save" : "edit"}
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="toggle">
          <button
            onClick={(e) => {
              setToggleDiv(!toggleDiv);
            }}
          >
            {toggleDiv ? "-" : "+"}
          </button>
        </div>
      </div>
    </>
  );
}

export default SingleTodo;
