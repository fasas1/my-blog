import { useHistory, useParams } from "react-router";
import Spinner from "./Spinner";
import Oops from './Oops';
import BlogNotes from "./BlogNotes";
import UseFetch from './UseFetch';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { DeleteOutlined } from '@material-ui/icons';
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar';
import {Typography,IconButton} from '@material-ui/core';


const BlogDetails = () => {
    
    const {id} = useParams()
    const{data:blog, error, isPending } =UseFetch('http://localhost:5000/blogs/' + id)
   
    return (  
        <>
          {isPending && <Spinner /> }
          {error &&  <Oops/> }
          {blog && (
            <Card style ={{marginTop:91, marginLeft:20}}>
                <CardHeader
                     avatar={
                        <Avatar style={{color:'blue'}} >
                          R
                        </Avatar>

                  }
                  action={
                    <IconButton>
                        <DeleteOutlined style={{color:'red'}}/>
                      </IconButton>
                }
                  title= {<h3> {blog.title}</h3>}
                  subheader=  {blog.author}
                />
      
                <CardContent >
                    <Typography variant="body2" 
                      
                    color="textSecondary">
                        
                        {blog.body}
                    </Typography>
                </CardContent>
            </Card>
          )}
          
        </>
    );


}
 
export default BlogDetails;