import React, { Component } from 'react';
import { NavLink,Link} from 'react-router-dom';

export default class PublicFooter extends Component{
 render(){
   return(
     <footer>
       <div >
       {/* <Link to="/second/secondChild1" style={{color: 'blue'}} >尾部导航1</Link> */}
       <Link to="/father" style={{color: 'blue'}} >尾部导航1</Link>
       </div>
     </footer>
   )
 }
}