import Todo from './components/Todo';
import TodoItem from "./models/TodoItem";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import {useState} from "react";

export default function App(props: {tasks: TodoItem[]}) {
    const [tasks, setTasks] = useState<TodoItem[]>(props.tasks);

    function addTask(name: string){
        const newTask: TodoItem = {id: "task-" + tasks.length, name: name, completed: false};
        setTasks([...tasks, newTask]);
    }

    const taskList = tasks.map(task => (
        <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
    ));

  return (
    <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form addTask={addTask}/>
        <div className="filters btn-group stack-exception">
            <FilterButton name="all" active={true}/>
            <FilterButton name="Active" active={false}/>
            <FilterButton name="Completed" active={false}/>
        </div>
        <h2 id="list-heading">
            3 tasks remaining
        </h2>
        <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
        >
            {taskList}
        </ul>
    </div>
  );
}
