import React from "react";
import Navbar from "../../../components/frontend/navbar";
import classes from './home.module.css';
import pic1 from '../../../assests/pic1.png';
import pic2 from '../../../assests/pic2.png';


function Home(){
    return(
        <div>
            <Navbar/>
            <div className={classes.about_holder}>
                <h1>About Us</h1>
                <div className={classes.about_body}>
                    <div className={classes.about_left}>
                        <div className={classes.image_holderLeft}>
                            <img src={pic2} className={classes.image_left}/>
                        </div>
                        
                        <div className={classes.text_left}>
                            <div>
                                <h1>Title:</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                </p>
                            </div>
                        </div>
                        </div>
                            <div className={classes.about_right}>
                                <div className={classes.image_holderRight}>
                                    <img src={pic1}/>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Home; 