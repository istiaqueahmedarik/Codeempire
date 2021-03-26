import FacebookIcon from '@material-ui/icons/Facebook';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import React from 'react';
import {
  BrowserRouter as Router,


  Link,
  Route,
  Switch
} from "react-router-dom";
import Home from './Home';
import Post from './Post';
function App() {
  return (
   <Router>
     <div className="Nav">
       <nav className="navbar">
         <>
           
             <Link to="/" style={{fontFamily: 'Train One'}}>BOOK <MenuBookRoundedIcon style={{ fontSize: 30,paddingLeft:"10px",paddingRight:"10px" }}/> REVIEW</Link>
           
             <Link to="/posts">Posts</Link>
           
             
             
             <a href="https://www.facebook.com/shortReviewBook" target="_blank" rel="noreferrer"><FacebookIcon style={{fontSize:33}}/></a>
           
         </>
       </nav>

       <Switch>
         
         <Route path="/posts">
           <Post/>
         </Route>
         
         <Route path="/">
            <Home />
         </Route> 
       </Switch>
     </div>
   </Router>
  )
}

export default App
