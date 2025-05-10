import { useRef, type FormEvent } from "react"
import { Button, Col, Container, Form, InputGroup, ListGroup, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { add } from "./features/todoSlice";

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
      <Row className="d-flex justify-content-center align-items-center my-5">
        <Col sm={5}>
          <h3 className="text-center">My todo App</h3>
          <form className="input-group mb-3" onSubmit={submitForm}>
            <input ref={inputRef} type="text" className="form-control" placeholder="Add new Todo" />
            <button className="btn btn-outline-info" type="submit" id="button-addon2">Add</button>
          </form>

          <ul className="list-group">
            {listItem.map((item: any, index:number) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{item.text} <button className="btn btn-danger">X</button> </li>

            ))}
          </ul>

        </Col>
      </Row>
    </Container>

  )
}

export default App