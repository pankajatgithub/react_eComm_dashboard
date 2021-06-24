
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom';


function  Header(){

  const user= JSON.parse( localStorage.getItem('user-info'));
  const history=useHistory();
  console.log(user);

function logout(){
  localStorage.clear();
  history.push("/register");
}

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
    {
    localStorage.getItem("user-info")?
    <Nav>
      {/* if user and user name both present */}
      <NavDropdown title={user && user.name}>
        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        <NavDropdown.Item>Profile</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    : null
    }     
    
   
  </Navbar.Collapse>
</Navbar>
    )
}
export default  Header;