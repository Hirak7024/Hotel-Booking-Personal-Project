import React, { useEffect } from 'react';
import HomeImage from "../../assets/HomeImage.jpg";
import Navbar from "../../components/Navbar/Navbar";
import { BsArrowRight } from "react-icons/bs";
import Events from '../../components/Events/Events';
import Rooms from '../../components/Rooms/Rooms';
import Choose from '../../components/Choose/Choose';
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch';
import { useLocation } from 'react-router-dom';
import "./home.scss";

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    return (
        <>
            <div className="home-main-container">
                <Navbar />
                <div className="home-container">
                    <img src={HomeImage} alt="" />
                    <div className="content">
                        <h1>Welcome to Hotely</h1>
                        <p>THE PLACE WHERE YOU LOOKING TO</p>
                        <button>EXPLORE NOW <BsArrowRight className="icon" /> </button>
                    </div>
                </div>
                <HeaderSearch />
                <Rooms />
                <Choose />
                <Events />
            </div>
        </>
    )
}
