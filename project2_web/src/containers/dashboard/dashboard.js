import React from "react";

//CSS and JS
import '../../assests/admin/css/styles.css';
import '../../assests/admin/js/scripts.js';

//Components
import Navbar from "../../components/dashboard/navbar";
import Sidebar from "../../components/dashboard/sidebar";
import Footer from "../../components/dashboard/footer";
import Main from "../../components/dashboard/main";

function Dashboard (){
    return(
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>
                <div id="layoutSidenav_content">
                <div>
                    <Main />
                </div>
                <Footer />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;