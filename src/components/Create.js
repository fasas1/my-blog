import React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { makeStyles }  from '@material-ui/core'

import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

      const useStyles = makeStyles({
       
          heads:{
             marginTop:30
          },
          fields:{
             width:'90%',
             marginTop:20,
             marginBottom:20,  marginLeft:30
          },
          button:{
             textAlign:'center',
             marginLeft:30
          }
      })
      
      export default function Create() {
          const classes = useStyles()
      
    return ( 
         <div>
        <Typography
         variant="h4"
         align="center"
         className={classes.heads}
        color ='primary'>
                Add a new Blog
</Typography>
        

<form  noValidate autoComplete="off">
  <TextField 
   className={classes.fields}
  color="secondary" 
  label="Title" 
  variant="outlined" 
  required
  />

  <TextField 
   className={classes.fields}
  color="secondary" 
  label="Details" 
  variant="outlined" 
  required
  multiline
  rows={4}/>
   
   <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
      >
        Send
      </Button>
</form>
</div>
     );
}
 
