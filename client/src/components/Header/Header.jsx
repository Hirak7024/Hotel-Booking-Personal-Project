import React from 'react';
import { TfiFacebook, TfiPinterestAlt } from "react-icons/tfi";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import "./header.scss";

export default function Header() {
    const navigate = useNavigate();
    return (
        <>
            <div className="header-container">
                <div className="left" onClick={() => navigate('/')}>
                    <h1>H</h1>
                    <h2>otel Booking</h2>
                </div>
                <div className="right">
                    <div className="social">
                        <TfiFacebook className="icons" />
                        <AiOutlineTwitter className="icons" />
                        <TfiPinterestAlt className="icons" />
                        <TiSocialGooglePlus className="icons-gplus" />
                    </div>
                    <div className="login">
                        <button>
                            <BsFillPersonFill className="icons" />
                            Log in / Sign up
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
