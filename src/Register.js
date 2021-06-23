
import { json } from "body-parser";
import { Button } from "bootstrap";
import { cos, div } from "prelude-ls";
import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
 
function Register() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history=useHistory();


    async function signUp() {
        let item = { name, email, password };

        let result=await fetch("http://localhost:8000/api/register", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)

        });
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/add");
    }

    return (
        <div className="col-sm-6 offset-sm-3" >
            <h1>
                Sign Up
            </h1>

            <br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="User Name" />

            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />

            <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />

            <br />
            <button onClick={signUp} className="btn btn-primary">Register</button>




        </div>

    )

}
export default Register;