
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'

import { Container } from '@material-ui/core'
import BlogNotes from './BlogNotes';


const BlogList = ({ blogs }) => {
    return ( 
         <Container>
        <Grid container spacing={3} style={{ marginTop: 33 }}>  
        {blogs.map((blog) => (
           <Grid   item key={blog.id} xs={12} md={6} lg={4}>
              <Link to={`/blogs/${blog.id}`} 
             style={{ textDecoration: 'none' }}> 
                 <BlogNotes blog={blog} />
                </Link>
                </Grid>
        ))}
      
        </Grid>
        </Container>
     );
}
 

export default BlogList;