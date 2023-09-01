import React from 'react';
import Choose1 from "../../assets/Choose1.jpg";
import Choose2 from "../../assets/choose2.jpg";
import Choose3 from "../../assets/choose3.jpg";
import Choose4 from "../../assets/choose4.jpg";
import Choose5 from "../../assets/choose5.jpg";
import Choose6 from "../../assets/choose6.jpg";
import "./choose.scss";

export default function Choose() {
    return (
        <>
            <div className="choose-container">
                <h1> WHY TO CHOOSE US ? </h1>
                <ul>
                    <li>ALL</li>
                    <li>DESERT</li>
                    <li>COFFEE</li>
                    <li>CATERING</li>
                    <li>SERVICES</li>
                </ul>
                <div className="img-container">
                    <img className='image' src={Choose1} alt="" />
                    <img className='image' src={Choose2} alt="" />
                    <img className='image' src={Choose3} alt="" />
                    <img className='image' src={Choose4} alt="" />
                    <img className='image' src={Choose5} alt="" />
                    <img className='image' src={Choose6} alt="" />
                </div>
                <button>View All</button>
            </div>
        </>
    )
}
