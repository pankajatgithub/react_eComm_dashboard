import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './header'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected'
import ProducList from './ProductList';
import SearchProduct from './SearchProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>    
      <Switch> 
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

        <Route path="/update/:id">
          {/* <UpdateProduct /> */}
          <Protected Cmp={UpdateProduct}/>
        </Route>

        <Route path="/search">
          {/* <UpdateProduct /> */}
          <Protected Cmp={SearchProduct}/>
        </Route>

        
{/* keep this default route at the end always in switch */}
        <Route path="/">
          <ProducList />
        </Route>
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
