import { Button, ListGroup } from "react-bootstrap"
import { todoTypes } from "../App"

interface todoListType {
    listItems: todoTypes[],
    deleteTodoFunc: (deletingTodo:todoTypes)=>void
}



const TodoList: React.FC<todoListType> = ({ listItems, deleteTodoFunc }) => {
    return (
        <ListGroup >
            {listItems.length === 0 ? <p className="h5 text-center">You don't have any to-do!</p> : listItems.map((item: todoTypes, index: number) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">{item.text} <Button variant="danger" onClick={()=>deleteTodoFunc(item)}>X</Button></ListGroup.Item>
            ))}

        </ListGroup>
    )
}

export default TodoList