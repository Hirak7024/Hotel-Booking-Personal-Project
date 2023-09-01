import React from 'react';
import { BsArrowsFullscreen, BsPeople, BsCurrencyDollar } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import "./room.scss";

export default function Room({ roomImg, roomTitle, roomSize, maxPeople, roomDesc, roomPrice,roomId }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="room-container">
                <div className="img-container">
                    <img className='room-img' src={roomImg} alt="" />
                </div>
                <div className="size-and-people">
                    <span><BsArrowsFullscreen className='icons' /> SIZE {roomSize}M2</span>
                    <span><BsPeople className='icons' />MAX PEOPLE {maxPeople}</span>
                </div>
                <h1>{roomTitle}</h1>
                <p className='room-para'>{roomDesc}</p>
                <button onClick={() => navigate(`/hotelroom/${roomId}`)}>BOOK NOW FROM <BsCurrencyDollar size={18} /> {roomPrice}</button>
            </div>
        </>
    )
}
