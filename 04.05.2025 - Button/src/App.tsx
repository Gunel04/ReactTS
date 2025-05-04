import Button from "./Button"

const App = () => {
    return (
        <div className="container my-5">
            <Button width={100} height={50} disabled={false} content="Click me" type="button" background="beige" color="red" modalTitle="Modal Task" modalText="Modal props for TypeScript "/>
            {/* <Modal/> */}
        </div>
    )
}

export default App