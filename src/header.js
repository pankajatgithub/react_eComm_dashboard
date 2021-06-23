
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';


function  Header(){
    return (
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto nav_bar_wrapper">
      {
        localStorage.getItem("user-info")?
        <>
         <Link to="/add">Add Product</Link>
      <Link to="/update">Update Product</Link>
        
        </>
        :<>
        <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
       
        </>
      }


      
      

    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    )
}
export default  Header;