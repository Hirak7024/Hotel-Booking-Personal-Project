import React, { useEffect } from 'react';
import HomeImage from "../../assets/HomeImage.jpg";
import room1 from "../../assets/Room1.jpg";
import room2 from "../../assets/Room2.jpg";
import room3 from "../../assets/Room3.jpg";
import Room from '../../components/Room/Room';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import "./hotels.scss";

export default function Hotels() {
    const { data, loading, error } = useFetch("/api/rooms");

    const location = useLocation();

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
                            {data.length > 0 && (data.map((item) => (
                                <Room
                                    roomTitle={item.title}
                                    roomSize={item.roomSize}
                                    maxPeople={item.maxPeople}
                                    roomDesc={item.desc}
                                    roomPrice={item.price}
                                    roomImg={item.photo}
                                    roomId={item._id}
                                />
                            )))}
                        </>
                    )}
                </div>

            </div>
        </>
    )
}
