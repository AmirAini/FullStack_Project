import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';



function Navbar(props){


    const login = useSelector((state)=>state.login);
    return(
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link to="index.html" className="navbar-brand ps-3">Welcome: {login.name}</Link>
    
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
    
    
    </nav>
    )
}

export default Navbar;