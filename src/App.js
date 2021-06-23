import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './header'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <h1>E-Comm Project</h1>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/add">
          {/* <AddProduct /> */}
          <Protected Cmp={AddProduct}/>
        </Route>

        <Route path="/update">
          {/* <UpdateProduct /> */}
          <Protected Cmp={UpdateProduct}/>

        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
