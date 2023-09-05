import React, { useEffect } from 'react';
import HomeImage from "../../assets/HomeImage.jpg";
import Room from '../../components/Room/Room';
import { useLocation } from 'react-router-dom';
import {useSelector} from "react-redux";
import "./hotels.scss";

export default function Hotels() {
    const location = useLocation();

    const loading = useSelector((state)=>state.room.loading);
    const data = useSelector((state)=>state.room.rooms.data);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    return (
        <>
            <div className="hotels-main-container">
                <div className="img-container">
                    <img className='homeImg' src={HomeImage} alt="" />
                </div>
                <div className="hotels-container">
                    {loading ? (
                        "Loading"
                    ) : (
                        <>
                            {data && (data.map((item) => (
                                <div key={item._id}>
                                <Room
                                roomTitle={item.title}
                                roomSize={item.roomSize}
                                maxPeople={item.maxPeople}
                                roomDesc={item.desc}
                                roomPrice={item.price}
                                roomImg={item.photo}
                                roomId={item._id}
                                />
                                </div>
                                )))}
                        </>
                    )}
                </div>

            </div>
        </>
    )
}
