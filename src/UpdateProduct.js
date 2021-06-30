
import Header from './header'
import {withRouter} from 'react-router-dom';
import {useEffect,useState} from 'react';

function UpdateProduct(props){
    console.warn("props",props.match.params.id);
    const [data,setdata]=useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");



    useEffect(async ()=>{
        let result=await fetch("http://localhost:8000/api/product/"+props.match.params.id);
        result=await result.json();
        console.log("data==",result);
        setdata(result);
            // it will be used to set value in case of text is not being changed
        setName(result.name);
        setFile(result.file_path);
        setPrice(result.price);
        setDescription(result.description);  
    },[]);

    async function editProduct($id){
        let item = { name, price, description, file };
        console.log("item to update",item);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);

        let result= await fetch("http://localhost:8000/api/updateproduct/"+$id+"?_method=PUT",{
            method:"POST",
            body:formData

        });
        alert("Data has been updated successfully");


       
        
    }


    return(
        <div> 
        <Header />
        <h1>
            UpdateProduct page
        </h1>
        <input type="text"
         onChange={(e) => setName(e.target.value)}
        defaultValue={data.name}/> <br/><br/>
        <input type="text" 
         onChange={(e) => setPrice(e.target.value)}
        defaultValue={data.price}/> <br/><br/>
        <input type="text" 
         onChange={(e) => setDescription(e.target.value)}
        defaultValue={data.description}/> <br/><br/>
        <input type="file" 
         onChange={(e) => setFile(e.target.files[0])}
        defaultValue={data.file_path}/> <br/><br/>
        <img src={"http://localhost:8000/"+data.file_path} style={{width:50}} /> <br/><br/>
        <button onClick={()=>editProduct(data.id)}>Update</button>

        </div>
    )

}
export default withRouter(UpdateProduct);