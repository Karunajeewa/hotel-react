import React from "react";

const Footer: React.FC =() => {
    return (
        <div className="footer-body" style={{backgroundColor:"#bb3d82"}}>
            <footer className="social-media">
                <div>
                    <span>Follow Us on</span><br/>

                    <a href="https://www.facebook.com/TajSamudraColombo/"> facebook</a><br/>
                    <span>&copy; Taj Samudra.</span>
                </div>
                <div className="contact">
                    <span>Guest ReservationsTM is an independent travel network
                        offering over 100,000 hotels worldwide.</span>
                </div>
            </footer>
        </div>

    )
}
export default Footer;