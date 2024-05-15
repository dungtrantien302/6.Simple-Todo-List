export function Todo({ name, todoId, handleDeleteTodo }) {
    return (
        <ul id="list">
            <li className="list-item">
                <label className="list-item-label">
                    <input type="checkbox" data-list-item-checkbox />
                    <span data-list-item-text>{name}</span>
                    <button data-button-delete onClick={() => handleDeleteTodo(todoId)}>Delete</button>
                </label>
            </li>
        </ul>
    )
}