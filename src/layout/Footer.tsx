import React from "react";
// import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

const Footer: React.FC =() => {
    return (
        <div className="footer-body">
            <footer className="social-media">
                <div>
                    <span>Follow Us on</span><br/>
                    {/*<MDBBtn floating social="tw" size="sm">*/}
                    {/*    <MDBIcon fab icon="twitter" className="pr-1" />*/}
                    {/*</MDBBtn>*/}

                    <a href="https://www.facebook.com/TajSamudraColombo/"><i className="feather-facebook"/></a><br/>
                    <span>&copy; Taj Samudra.</span>
                </div>
                <div className="contact">
                    <span>Guest ReservationsTM is an independent travel network offering over 100,000 hotels worldwide.</span>
                </div>
            </footer>
        </div>

    )
}
export default Footer;