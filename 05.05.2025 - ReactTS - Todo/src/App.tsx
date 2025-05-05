import { Col, Container, Row } from "react-bootstrap"
import Todo from "./components/Todo"
import TodoList from "./components/TodoList"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

export interface todoTypes {  // type -> = qoyulur,   interface -> = qoyulmur
  id: string | number,
  text: string
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<todoTypes[]>([]);
  const [count, setCount] = useState<number>(0);


  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
      console.log(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setCount(todos.length);
  }, [todos])

  const addTodoFunc = (comingText: string) => {
    // localStorage.setItem('todo', 'adding');
    // if(localStorage.getItem('todo') === 'adding'){}
    setTodos(prev => [...prev, { id: Date.now(), text: comingText }]);
    setCount(count => count + 1);
    localStorage.getItem('adding');
  }

  const deleteTodo = (deletingTodo: todoTypes) => {
    setTodos(prev => prev.filter(p => p.id !== deletingTodo.id));
    setCount(count => count - 1);

  }

  const clearAll = () => {
    if(todos.length === 0) {
      Swal.fire({
        icon:"warning",
        title:"There is no any todo"
      })
    }
    else {
      setTodos([]);
      setCount(0);
    }
    
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