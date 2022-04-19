export default function FilterButton(props: {name: string, active: boolean}) {
    return <button type="button" className="btn toggle-btn" aria-pressed={props.active}>
        <span className="visually-hidden">Show </span>
        <span>{props.name}</span>
        <span className="visually-hidden"> tasks</span>
    </button>;
}