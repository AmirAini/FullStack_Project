import React from "react";

//CSS and JS
import '../../assests/admin/css/styles.css';
import '../../assests/admin/js/scripts.js';

//components
import Navbar from "../../components/dashboard/navbar";
import Sidebar from "../../components/dashboard/sidebar";
import Footer from "../../components/dashboard/footer";
import StatComponent from "../../components/dashboard/stats";

function StatContainer(props){
    return(
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>
                <div id="layoutSidenav_content">
                <div>
                    <StatComponent />
                </div>
                <Footer />
                </div>
            </div>
        </div>
    )
}

export default StatContainer;