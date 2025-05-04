import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap"
import Swal from "sweetalert2";


interface funcType {
  todoFuncProp: (comingText:string)=>void
}
const Todo: React.FC<funcType> = ({ todoFuncProp }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [count,setCount] = useState<number>(0);
  const handleForm = (e: React.FormEvent) => {
    // let count:number = 0;
    e.preventDefault();
    if (!inputRef.current?.value) {
      Swal.fire({
        icon: "warning",
        title: "Please, add input!"
      })

    }
    else {
      todoFuncProp(inputRef.current.value);
      setCount(count=>count+1)
      console.log(count);
      inputRef.current.value = "";
    }
  }
  return (
    <>
      <p className="h2 my-2">My To-Do app</p>
      <Form className="my-4" onSubmit={handleForm}>
        <Form.Group className="mb-3">
          <Form.Label>Add new to-do...</Form.Label>
          <Form.Control type="text" placeholder="Enter your new to-do" ref={inputRef} />
        </Form.Group>
        <Button type="submit">Add</Button>
        <p className="h6 mt-4">Total To-do count: {count} </p>
      </Form>
    </>
  )
}

export default Todo