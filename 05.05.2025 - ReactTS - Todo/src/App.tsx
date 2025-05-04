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
  const addTodoFunc = (comingText:string)=>{
    // let count:number = 0;
    setTodos(prev=>[...prev, {id:3,text:comingText} ]);
    // count++;
    // console.log(count);
    
  }
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center flex-column my-4">
        <Col sm={6} >
          <Todo todoFuncProp = {addTodoFunc}  />
          <TodoList listItems = {todos}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App