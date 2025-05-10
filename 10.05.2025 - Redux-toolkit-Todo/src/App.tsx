import { useRef, type FormEvent } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { add, deleteTodo } from "./features/todoSlice";

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const listItem = useSelector((p: any) => p.todo);
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      Swal.fire({
        title: "Please, fill input!",
        icon: "warning"
      })
    }
    else {
      dispatch(add(inputRef.current!.value));
      inputRef.current.value = "";
    }

  }
  return (
    <Container>
      <h3 className="text-center mt-4 mb-5">My todo App</h3>
      <Row className="d-flex justify-content-center align-items-center my-4">
        <Col sm={4}>
          <form className="input-group mb-5" onSubmit={submitForm}>
            <input ref={inputRef} type="text" className="form-control" placeholder="Add new Todo" />
            <button className="btn btn-outline-info" type="submit" id="button-addon2">Add</button>
          </form>

          <ul className="list-group">
            {listItem.map((item: any, index: number) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{index + 1}. {item.text} <button className="btn btn-danger" onClick={() => { dispatch(deleteTodo(item.id)) }}>X</button> </li>

            ))}
          </ul>

        </Col>
      </Row>
    </Container>

  )
}

export default App