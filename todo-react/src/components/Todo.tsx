import { ChangeEvent, FormEvent, useState } from "react";
import TodoItem from "../models/TodoItem";

interface TodoProps extends TodoItem {
  toggleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, newName: string) => void;
}

export default function Todo(props: TodoProps) {
  const [isEditing, setEditing] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>(props.name);

  function handleOnChangeCheckbox(event: ChangeEvent<HTMLInputElement>) {
    props.toggleTaskCompleted(props.id);
  }

  function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setNewName(event.target.value);
  }

  function handleOnClickDelete(event: React.MouseEvent<HTMLButtonElement>) {
    props.deleteTask(props.id);
  }

  function handleOnClickEdit(event: React.MouseEvent<HTMLButtonElement>) {
    setEditing(true);
  }

  function handleOnClickCancel(event: React.MouseEvent<HTMLButtonElement>) {
    setEditing(false);
    setNewName(props.name);
  }

  function handleOnSubmitEdit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.editTask(props.id, newName);
    setEditing(false);
  }

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={handleOnChangeCheckbox}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={handleOnClickEdit}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={handleOnClickDelete}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleOnSubmitEdit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          onChange={handleOnChangeInput}
          value={newName}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={handleOnClickCancel}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button
          type="submit"
          className="btn btn__primary todo-edit"
        >
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}
