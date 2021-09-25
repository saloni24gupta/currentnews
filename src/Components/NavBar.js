import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
        return (
            <div className="container" >
                <div className=" navbar-expand-sm  " style={{color: '#bed5f7'}} >
                    <div className="container-fluid" style={{backgroundColor: '#2b3848', color: '#bed5f7'}}>
                        <Link className="navbar-brand " to="/"></Link>
                        <ul className="navbar-nav me-auto mb-2">
               
            <li  className="nav-item"><Link className ="nav-link " style={{color: '#bac5d4'}}  to="/Sports">Sports</Link></li>
                <li  className="nav-item"><Link className ="nav-link" style={{color: '#bac5d4'}}  to="/entertainment" >entertainment</Link></li>
                <li  className="nav-item"><Link className ="nav-link" style={{color: '#bac5d4'}}  to="/Health">Health</Link></li>
                <li  className="nav-item"><Link className ="nav-link" style={{color: '#bac5d4'}}  to="/Technology" >Technology</Link></li>
                <li  className="nav-item"><Link className ="nav-link" style={{color: '#bac5d4'}}  to="/General" >General</Link></li>
                <li  className="nav-item"><Link className ="nav-link" style={{color: '#bac5d4'}} to="/Science" >Science</Link></li>
                <li  className="nav-item"><Link className ="nav-link" style={{color: '#bac5d4'}} to="/Business" >Business</Link></li>
               <div className="container">
             
               </div>
                </ul >
                
            </div>
            </div>
            </div>
        )
    }

export default NavBar