import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { TfiFacebook } from "react-icons/tfi";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import "./footer.scss";

export default function Footer() {
    return (
        <>
            <div className="footer-main-container">
                <div className="footer-container-1">
                    <div className="address-box">
                        <h1>ADDRESS</h1>
                        <ul>
                            <li><MdLocationPin className='icon' /> Hotel in India</li>
                            <li><FaPhoneAlt className='icon' /> +91 1234567809</li>
                            <li><GrMail className='icon' /> hotel@gmail.com</li>
                        </ul>
                    </div>
                    <div className="information-box">
                        <h1>INFORMATION</h1>
                        <ul>
                            <li>About Us</li>
                            <li>Delivery Information</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Site Map</li>
                        </ul>
                    </div>
                    <div className="account-box">
                        <h1>MY ACCOUNT</h1>
                        <ul>
                            <li>My Account</li>
                            <li>Order History</li>
                            <li>Wish list</li>
                            <li>NewsLetter</li>
                            <li>Returns</li>
                        </ul>
                    </div>
                    <div className="newsletter-box">
                        <h1>NEWSLETTER</h1>
                        <p>Subscribe to our newsletter to latest news, tips and advice</p>
                        <div className="input-box">
                            <input type="text" />
                            <button>SEND</button>
                        </div>
                        <div className="social-links">
                            <TfiFacebook size={30} style={{backgroundColor:'#214a8a', color:'white', borderRadius:'50%', padding:'4px'}} className='icons' />
                            <AiOutlineTwitter  size={30} style={{backgroundColor:'#01a6d5', color:'white', borderRadius:'50%', padding:'4px'}} className='icons'/>
                            <TiSocialGooglePlus  size={30} style={{backgroundColor:'#d94f3f', color:'white', borderRadius:'50%', padding:'1px'}} className='icons'/>
                        </div>
                    </div>
                </div>
                <div className="footer-container-2">
                    <p>&copy; 2022 . Hotel. All rights .</p> 
                </div>
            </div>
        </>
    )
}
