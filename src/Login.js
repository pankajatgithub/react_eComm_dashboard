import { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import Header from './header'

function Login(){
    const history=useHistory();

    useEffect(()=>{
        if(localStorage.getItem("user-info"))
        {
            history.push("/add");
        }
    },[]);
    return(
        <> 
        <Header />
        <h1>
            Login page
        </h1>
        </>
    )

}
export default Login;