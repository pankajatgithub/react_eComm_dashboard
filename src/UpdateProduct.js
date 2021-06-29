
import Header from './header'
import {withRouter} from 'react-router-dom';
import {useEffect,useState} from 'react';

function UpdateProduct(props){
    console.warn("props",props.match.params.id);
    const [data,setdata]=useState([]);
    useEffect(async ()=>{
        let result=await fetch("http://localhost:8000/api/product/"+props.match.params.id);
        result=await result.json();
        console.log("data==",result);
        setdata(result);      
    },[]);


    return(
        <div> 
        <Header />
        <h1>
            UpdateProduct page
        </h1>
        <input type="text" defaultValue={data.name}/> <br/><br/>
        <input type="text" defaultValue={data.price}/> <br/><br/>
        <input type="text" defaultValue={data.description}/> <br/><br/>
        <input type="file" defaultValue={data.file_path}/> <br/><br/>
        <img src={"http://localhost:8000/"+data.file_path} style={{width:50}} /> <br/><br/>
        <button>Update</button>

        </div>
    )

}
export default withRouter(UpdateProduct);