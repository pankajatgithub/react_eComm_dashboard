import Header from './header'
import { useState } from 'react';
import {Table} from 'react-bootstrap';



function SearchProduct() {
    const [data,setData]=useState([]);
    async function search(key){
        let result=await fetch("http://localhost:8000/api/search/"+key);
        result=await result.json();
        console.log("search result==",result);
        setData(result);
    
    }
    return(
        <div>
            <Header />
            <h1>Search Product</h1>
            <br/>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Product" />
            
           
            </div>
            <br/><br/>

            {
                data.length>0?
            <Table >
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Price</th>
              <th>Desccription</th>

            </tr>
          </thead>
          <tbody>
            {
              data.map((item) =>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td><img style={{ width: 140, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }} src={"http://localhost:8000/" + item.file_path} /></td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                                  </tr>)}
          </tbody>
        </Table>
        :null
         }
        </div>

        
    )
    

}
export default SearchProduct;