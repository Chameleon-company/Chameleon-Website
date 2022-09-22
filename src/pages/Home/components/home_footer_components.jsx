import React from "react";
import logo from "../../../assets/images/logo_homefooter.png"

import './home_footer_style.css';


export default function Footer (footer_props) 
{
    return(
        <div id = "page_container">
            <div className= "footer">
                <div>
                    <div className= "Footer_Logo">
                        <img src = {logo} alt = ""/>
                    </div>
                    <div className="footer_info_top">
                        <div className= "footer_chamelon_title">
                            {footer_props.title}
                        </div>
                        <div className="footer_info_intro">
                            {footer_props.intro}
                        </div>                   
                    </div>
                </div>

                <div>
                    <div className="footer_info_center">
                        <div className= "footer_contact_us">
                            {footer_props.contact_us}
                        </div>
                        <div className="footer_info_phone_number">
                            {footer_props.phone_number}
                        </div>
                        <div className="footer_info_email">
                            {footer_props.email}
                        </div>                          
                    </div>
                </div>

                <div>
                    <div className="footer_info_bottom">
                        <div className="footer_info_by">
                            {footer_props.by}
                        </div>                          
                    </div>
                </div>
            </div>
        </div>
    )
}
