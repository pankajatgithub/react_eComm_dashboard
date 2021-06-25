import Header from './header'
import { useState } from 'react';


function AddProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");

   async function addProduct() {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);

        let result= await fetch("http://localhost:8000/api/addproduct",{
            method:"POST",
            body:formData

        });
        alert("Data has been saved successfully");


        let item = { name, price, description, file };
        console.log(item);
    }
    return (
        <div>
            <Header />
            <h1>
                AddProduct page
            </h1>

            <div className="col-sm-6 offset-sm-3">
                <br />
                <input type="text" className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name" />
                <br />
                <input type="file" className="form-control"
                    onChange={(e) => setFile(e.target.files[0])}
                    placeholder="upload Image" />
                <br />
                <input type="text" className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="price" />
                <br />
                <input type="text" className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="description" />
                <br />
                <button onClick={addProduct}>Add Product</button>

            </div>
        </div>
    )

}
export default AddProduct;