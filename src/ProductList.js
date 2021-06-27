import Header from './header';

import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap'

function ProducList() {

    const [data,setData]=useState([]);
    useEffect(async ()=>{

    let result= await fetch("http://localhost:8000/api/list");

    result=await result.json();
    setData(result);
    console.log("data",data);

    },[]);
    return (
        <div>
            <Header />
            <h1>Product List</h1>
            <div className="col-sm-10 offset-sm-1">
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
      data.map((item)=>
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td><img style={{width:140, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center'}} src={"http://localhost:8000/"+item.file_path}/></td>
      <td>{item.price}</td>
      <td>{item.description}</td>
    </tr>)}
  </tbody>
</Table>
</div>

        </div>
    )

}

export default ProducList;