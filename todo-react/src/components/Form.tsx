import {ChangeEvent, FormEvent, useState} from "react";

export default function Form(props: {addTask: (name: string) => void}){
    const [name, setName] = useState<string>('');

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        props.addTask(name);
        setName('');
    }

    function handleOnChange(event: ChangeEvent<HTMLInputElement>){
        setName(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleOnChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    );
}