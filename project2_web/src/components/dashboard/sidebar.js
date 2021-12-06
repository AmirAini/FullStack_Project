import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {logoutAct} from '../../containers/redux/actions';
import {useNavigate} from 'react-router-dom';


function Sidebar(props){

    const login = useSelector(state => state.login)
    const dispatch = useDispatch();
    const navigate=useNavigate();
    
    function logout(){
        // console.log('hit');
        dispatch(logoutAct())
    }

    useEffect(() => {
        if(login.token == ''){
            alert('Invalid Token');
            navigate('/');
        }
    }, [login])


    return(
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <Link class="nav-link" to="/dashboard">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            <div class="sb-sidenav-menu-heading">Interface</div>
                            <Link class="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                More Info
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </Link>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <Link class="nav-link" to="/profile">User Profile</Link>
                                    <Link class="nav-link" to="/stats">Stats</Link>
                                </nav>
                            </div>
                            
                
                            <div class="sb-sidenav-menu-heading">Addons</div>
                            <Link class="nav-link" to="/table">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Tables
                            </Link>
                            <Link class="nav-link" to="/">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                <button type="submit" className="btn btn-primary" onClick={logout}>Logout</button>
                            </Link>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as: {login.name}</div>
                        {/* map this name */}
                    </div>
                </nav>
    )
}

export default Sidebar;