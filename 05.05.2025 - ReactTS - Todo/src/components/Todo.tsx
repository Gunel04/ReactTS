import { useRef} from "react";
import { Button, Form } from "react-bootstrap"
import Swal from "sweetalert2";


interface funcType {
  todoFuncProp: (comingText: string) => void,
  count: number,
  clearAllFuncProp: () => void
}


const Todo: React.FC<funcType> = ({ todoFuncProp, count, clearAllFuncProp }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      Swal.fire({
        icon: "warning",
        title: "Please, add input!"
      })

    }
    else {
      todoFuncProp(inputRef.current.value);
      console.log(count);
      inputRef.current.value = "";
    }
  }
  return (
    <>
      <p className="h2 my-2 text-center fw-bold">My To-Do app</p>
      <Form className="my-4" onSubmit={handleForm}>
        <Form.Group className="mb-3">
          <Form.Label className="h4">Add new to-do...</Form.Label>
          <Form.Control type="text" placeholder="Enter your new to-do" ref={inputRef} />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button type="submit" variant="success">Add</Button>
          <Button type="button" variant="warning" onClick={()=>clearAllFuncProp()}>Clear All</Button>
        </div>
        <p className="h5 mt-4">Total To-do count: {count} </p>
      </Form>
      <hr />
    </>
  )
}

export default Todo