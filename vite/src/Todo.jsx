//1 Add new todo to list todo
// export function Todo({ newtodo }) {
//     return (
//         <li> {newtodo}</li>
//     )
// }

//2 Add the ability to mark a todo as complete 
// export function Todo({ newtodo }) {
//     return (
//         <ul id="list">
//             <li className="list-item">
//                 <label className="list-item-label">
//                     <input type="checkbox" data-list-item-checkbox />
//                     <span data-list-item-text>{newtodo}</span>
//                 </label>
//             </li>
//         </ul>
//     )
// }

//3 Add a delete button next to each todo
export function Todo({ newtodo, idTodo, deleteTodo }) {
    return (
        <ul id="list">
            <li className="list-item">
                <label className="list-item-label">
                    <input type="checkbox" data-list-item-checkbox />
                    <span data-list-item-text>{newtodo}</span>
                    <button data-button-delete onClick={() => deleteTodo(idTodo)}>Delete</button>
                </label>
            </li>
        </ul>
    )
}