import React from 'react';
import {AiFillCaretDown} from "react-icons/ai";
import "./navbar.scss";

export default function Navbar() {
    return (
        <>
            <div className="navbar-main-container">
                <div className="left-container">
                    <ul>
                        <li><a href="" style={{color:'rgb(232,36,76)'}} >HOME</a></li>
                        <li><a href="">ABOUT US <AiFillCaretDown/> </a></li>
                        <li><a href="">ROOMS <AiFillCaretDown/></a></li>
                        <li><a href="">SERVICES <AiFillCaretDown/> </a></li>
                        <li><a href="">GALLERY <AiFillCaretDown/> </a></li>
                        <li><a href="">BLOG <AiFillCaretDown/> </a></li>
                        <li><a href="">CONTACT <AiFillCaretDown/> </a></li>
                    </ul>
                </div>
                <div className="right-container">
                    <p>BOOK NOW</p>
                </div>
            </div>
        </>
    )
}
