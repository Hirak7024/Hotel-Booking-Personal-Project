import React from 'react';
import Room from '../Room/Room';
import decorative from "../../assets/Decorative.png";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./rooms.scss";

export default function Rooms() {
    const navigate = useNavigate();
    const loading = useSelector((state)=>state.room.loading);
    const data = useSelector((state)=>state.room.rooms.data);

    console.log(data);

    return (
        <>
            <div className="rooms-main-container">
                {loading ? (
                    "Loading"
                ) : (
                    <>
                        <h1 className='heading'>WELCOME TO HOTEL</h1>
                        <img src={decorative} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cumque Culpa est praesentium tenetur ipsum ratione accusamus magni eos tempore!  </p>
                        <div className="rooms-container">
                            {loading ? (
                                "Loading"
                            ) : (
                                <>
                                    {data && (data.slice(0,3).map((item) => (
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
                        <button className='rooms-button'
                            onClick={() => navigate("/hotels")}>View all</button>
                    </>
                )}
            </div>
        </>
    )
}
