import { Col, Container, Row } from "react-bootstrap"
import Todo from "./components/Todo"
import TodoList from "./components/TodoList"
import { useState } from "react"

export interface todoTypes {  // type -> = qoyulur,   interface -> = qoyulmur
  id: string | number,
  text: string
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<todoTypes[]>([]);
  const [count, setCount] = useState<number>(0);

  const addTodoFunc = (comingText: string) => {
    setTodos(prev => [...prev, { id: Date.now(), text: comingText }]);
    setCount(count => count + 1);
  }

  const deleteTodo = (deletingTodo: todoTypes) => {
    setTodos(prev => prev.filter(p => p.id !== deletingTodo.id));
    setCount(count => count - 1);

  }

  const clearAll = () => {
    setTodos([]);
    setCount(0);
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center flex-column my-4">
        <Col sm={6} >
          <Todo todoFuncProp={addTodoFunc} count={count} clearAllFuncProp={clearAll} />
          <TodoList listItems={todos} deleteTodoFunc={deleteTodo} />
        </Col>
      </Row>
    </Container>
  )
}

export default App