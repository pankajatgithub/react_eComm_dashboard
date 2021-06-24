import { useEffect ,useState} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './header'

function Login(){
    const history=useHistory();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        if(localStorage.getItem("user-info"))
        {
            history.push("/add");
        }
    },[]);

    async function login(){
        // to collect data in json object
        let item={email,password}
        // await is a promise  to do some work
        let result=await fetch('http://localhost:8000/api/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
            },
            body:JSON.stringify(item)

        });
        result=await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/add");
        console.log("data",result);

    }
    return(
        <> 
        <Header />
        <div className="col-sm-6 offset-sm-3" >
            <h1>
                Login
            </h1>

            
            <br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />

            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />

            
            <br />
            <button onClick={login} className="btn btn-primary">Login</button>
        </div>
        </>
    )

}
export default Login;