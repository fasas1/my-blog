
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import About from './components/About';
import BlogDetails from './components/BlogDetails';
import Create from './components/Create';

import Home from './components/Home';

import Navbar from './components/Navbar';

function App() {
  return (
    <>   
          <Router>
           
             <Navbar />
             <Switch>
               <Route exact path="/">
             <Home/>
             </Route>
             <Route path="/blogs/:id">
             <BlogDetails/>
             </Route>
             <Route path="/create">
             <Create/>
             </Route>
             <Route path="/about">
             <About />
             </Route>
             </Switch>
             </Router>
            
    </>
  );
}

export default App;
