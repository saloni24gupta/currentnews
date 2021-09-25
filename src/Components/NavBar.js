import React from 'react'
// import { Link } from 'react-router-dom'

const NavBar = (props) => {
        return (
            <div className="container" >
                <div className=" navbar-expand-sm  " style={{color: '#bed5f7'}} >
                    <div className="container-fluid" style={{backgroundColor: '#2b3848', color: '#bed5f7'}}>
                        <a className="navbar-brand " href="/">hello</a>
                        <ul className="navbar-nav me-auto mb-2">
               
            <li  className="nav-item"><a className ="nav-link " style={{color: '#bac5d4'}}  href="/Sports">Sports</a></li>
                <li  className="nav-item"><a className ="nav-link" style={{color: '#bac5d4'}}  href="/entertainment" >entertainment</a></li>
                <li  className="nav-item"><a className ="nav-link" style={{color: '#bac5d4'}}  href="/Health">Health</a></li>
                <li  className="nav-item"><a className ="nav-link" style={{color: '#bac5d4'}}  href="/Technology" >Technology</a></li>
                <li  className="nav-item"><a className ="nav-link" style={{color: '#bac5d4'}}  href="/General" >General</a></li>
                <li  className="nav-item"><a className ="nav-link" style={{color: '#bac5d4'}} href="/Science" >Science</a></li>
                <li  className="nav-item"><a className ="nav-link" style={{color: '#bac5d4'}} href="/Business" >Business</a></li>
               <div className="container">
             
               </div>
                </ul >
                
            </div>
            </div>
            </div>
        )
    }

export default NavBar