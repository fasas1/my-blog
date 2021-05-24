import styled from 'styled-components'

const Oops = () => {
    return ( 
         <Error>
           <h3>Could not fetch data for the resource</h3>
         </Error>
     );
}
 

const Error = styled.h3`
     font-size:30px;
     margin-top:50px;
     text-align:center;
     color:red;
`

export default Oops;