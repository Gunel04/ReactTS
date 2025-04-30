import { useState } from "react"
import Swal from "sweetalert2"

type inputTypes = {
    input1: string,
    input2: string,
    input3: string,
    icon1: string,
    icon2: string,
    icon3: string
}

type myInfoType = {
    email: string,
    password: string
}
const myInfo: myInfoType = {
    email: "gunel@gmail.com",
    password: "gunel123"
}

console.log(myInfo);



const Login: React.FC<inputTypes> = ({ input1, input2, input3, icon1, icon2, icon3 }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const formSubmitted = (e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
                icon: `${icon1}`,
                text: "Please fill inputs!"
            })
        }
        else if (email === myInfo.email && password === myInfo.password) {
            Swal.fire({
                icon: `${icon2}`,
                text: "Login is completed successfully"
            })
        }
        else {
            Swal.fire({
                icon: `${icon3}`,
                text: "Email address or password is wrong!"
            })
        }
    }
    return (
        <div className="entire-div">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center">

                    <h1 className="text-center my-4">Login</h1>
                    <div className="col-3">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type={input1} className="form-control" id="exampleInputEmail1" onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type={input2} className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="text-part d-flex justify-content-between">
                                <div className="mb-3 form-check">
                                    <input type={input3} className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <a href="#">Forgot password?</a>
                            </div>
                            <button className="btn btn-primary" style={{ width: "100%" }} onClick={formSubmitted}>Login</button>
                            <p className="text-center my-2">Don't have an account? <a href="#">Register</a></p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login