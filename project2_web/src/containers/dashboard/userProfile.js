import React from "react";

//Components
import Navbar from "../../components/dashboard/navbar";
import Sidebar from "../../components/dashboard/sidebar";
import Footer from "../../components/dashboard/footer";
import Profile from "../../components/dashboard/profile";

function UserProfile(props){
    return(
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>
                <div id="layoutSidenav_content">
                <div>
                    <Profile />
                </div>
                <Footer />
                </div>
            </div>
        </div>
    )
}

export default UserProfile;