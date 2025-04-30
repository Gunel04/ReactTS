"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var sweetalert2_1 = require("sweetalert2");
var myInfo = {
    email: "gunel@gmail.com",
    password: "gunel123"
};
console.log(myInfo);
var Login = function (_a) {
    var input1 = _a.input1, input2 = _a.input2, input3 = _a.input3, icon1 = _a.icon1, icon2 = _a.icon2, icon3 = _a.icon3;
    var _b = (0, react_1.useState)(""), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(""), password = _c[0], setPassword = _c[1];
    var formSubmitted = function (e) {
        e.preventDefault();
        if (!email || !password) {
            sweetalert2_1.default.fire({
                icon: "".concat(icon1),
                text: "Please fill inputs!"
            });
        }
        else if (email === myInfo.email && password === myInfo.password) {
            sweetalert2_1.default.fire({
                icon: "".concat(icon2),
                text: "Login is completed successfully"
            });
        }
        else {
            sweetalert2_1.default.fire({
                icon: "".concat(icon3),
                text: "Email address or password is wrong!"
            });
        }
    };
    return (<div className="entire-div">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center">

                    <h1 className="text-center my-4">Login</h1>
                    <div className="col-3">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type={input1} className="form-control" id="exampleInputEmail1" onChange={function (e) { return setEmail(e.target.value); }}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type={input2} className="form-control" id="exampleInputPassword1" onChange={function (e) { return setPassword(e.target.value); }}/>
                            </div>
                            <div className="text-part d-flex justify-content-between">
                                <div className="mb-3 form-check">
                                    <input type={input3} className="form-check-input" id="exampleCheck1"/>
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
        </div>);
};
exports.default = Login;
