import Header from './header';

import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ProducList() {

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE"
    });
    result = await result.json();
    getData();
    alert(id);
  }

  function updateOperation(){

  }
  async function getData() {
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
    console.log("data", data);
  }


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
              data.map((item) =>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td><img style={{ width: 140, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }} src={"http://localhost:8000/" + item.file_path} /></td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td><Link to={"/update/"+item.id}><span className="btn-update">Update</span></Link></td>
                  <td><button className="btn btn-danger" onClick={() => { deleteOperation(item.id) }}>Delete</button></td>
                  


                </tr>)}
          </tbody>
        </Table>
      </div>

    </div>
  )

}

export default ProducList;