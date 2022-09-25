import React from "react";
import logo from "../../../assets/images/logo_homefooter.png"

import './home_footer_style.css';


export default function Footer (props) 
{
    return(
        <div id = "page_container">
            <div className= "footer">
                
                    <div className= "Footer_Logo">
                        <img src = {logo} alt = ""/>
                    </div>
                    <div className="footer_info_top">
                        <div className= "footer_chamelon_title">
                            {props.title}
                        </div>
                        <div className="footer_info_intro">
                            {props.intro}
                        </div>                   
                    </div>
                

                
                    <div className="footer_info_center">
                        <div className= "footer_contact_us">
                            {props.contact_us}
                        </div>
                        <div className="footer_info_phone_number">
                            {props.phone_number}
                        </div>
                        <div className="footer_info_email">
                            {props.email}
                        </div>                          
                    </div>
                

                
                    <div className="footer_info_bottom">
                        <div className="footer_info_by">
                            {props.by}
                        </div>                          
                    </div>
                
            </div>
        </div>
    )
}
