import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const BlogNotes = ({ blog }) => {
    return ( 
        <>
        <Card elevation={1}>
            <CardHeader 
                action={
                  <IconButton>
                       <MoreVertIcon style={{color:'blue'}}/>
                    </IconButton>
              }
              title= {<h3> {blog.title}</h3>}
              subheader= {blog.author}
            />
            <CardContent>
                <Typography variant="body2" 
                 noWrap
                color="textSecondary">
                    {blog.body}
                   

                </Typography>
            </CardContent>
        </Card>
       
        </>
     );
}
 
export default BlogNotes;