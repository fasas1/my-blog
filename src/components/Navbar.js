import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    return ( 
        <Nav>
            <h3>My Blog</h3>
             <List>
                 <Link to  = "/">
                 Home
                 </Link>
                 <Link to ="/create">
                 Add Blog
                 </Link>
                 <Link to="/about" >
                 About
                 </Link>
             </List>
        </Nav>
     );
}
 

const  Nav = styled.div `
  background: black;
  border-bottom:3px solid #444;
  display:flex;
  justify-content:space-around;
  align-items:center;
  color:white;
 padding:10px;
  h3{
      font-size:21px;
  }
`

const List = styled.div`
     font-size:15px;
   

    a{
        color:white;
        text-decoration:none;
        padding:10px 12px;
    }
    a:hover{
        color:grey;
    }
`

export default Navbar;