import home1 from '../img/home1.jpg'
import styled from 'styled-components'
import { useState, useEffect} from 'react'
import BlogList from '../components/BlogList';
import Spinner from './Spinner';
import Oops from './Oops';
import UseFetch from './UseFetch';


const Home = () => {
      const {data:blogs, isPending, error}= UseFetch('http://localhost:5000/blogs')

     return (
          <>
             <HeroContainer>
            <h2>My React Learning Experience</h2>   
            </HeroContainer> 
            {isPending && <Spinner /> } 
              {error &&  <Oops />}
          {blogs && <BlogList blogs={blogs} />} 
            </>      
     );
}
 

const HeroContainer  =  styled.div`
      
          background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.8)),url(${home1});
          height:40vh;
          
         
          background-position: center;
          background-size:cover;
          display:flex;
          justify-content:center;
          align-items:center;
        
     
     h2{
          color:white;
          font-size:28px;
          


     }
`


export default Home;