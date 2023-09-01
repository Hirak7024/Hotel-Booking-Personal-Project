import React, { useEffect } from 'react';
import { LiaCheckSolid } from "react-icons/lia";
import { BiWifi, BiSolidCoffeeAlt } from "react-icons/bi";
import { FaBath, FaParking, FaSwimmingPool, FaHotdog, FaDumbbell, FaCocktail } from "react-icons/fa";
import Reservation from '../../components/Reservation/Reservation';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import "./hotelroom.scss";

export default function HotelRoom() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];  //to get the id of the room . [2] is given at last because when we split the pathname by "/", we get three items and id is at index 2

    const { data, loading, error } = useFetch(`/api/rooms/${id}`);
    console.log(data);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    return (
        <>
            <div className='hotel-room-container'>
                <div className="img-container">
                    <img className='image1' src={data.photo} alt="" />
                </div>
                <div className="container">
                    <div className="conatiner-1">
                        <div className="box101">
                            <h1>{data.title}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere culpa minima quod quis maiores quidem porro laborum perferendis odit. Repellendus cumque quasi laudantium sed voluptatem vel consequatur, blanditiis fugit officiis!</p>
                            <img src={data.photo} alt="" />
                        </div>
                        <div className="box102">
                            <h1>Room Facilities</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ullam placeat odit itaque voluptates facere labore libero quasi animi nam?</p>
                            <ul>
                                <div className="row">
                                    <li><BiWifi className='icons' style={{ color: '#e8244c' }} /><p>Wifi</p></li>
                                    <li><BiSolidCoffeeAlt className='icons' style={{ color: '#e8244c' }} /><p>Coffee</p></li>
                                    <li><FaBath className='icons' style={{ color: '#e8244c' }} /><p>Bath</p></li>
                                </div>
                                <div className="row">
                                    <li><FaParking className='icons' style={{ color: '#e8244c' }} /><p>Parking Space</p></li>
                                    <li><FaSwimmingPool className='icons' style={{ color: '#e8244c' }} /><p>Swimming Pool</p></li>
                                    <li><FaHotdog className='icons' style={{ color: '#e8244c' }} /><p>Breakfast</p></li>
                                </div>
                                <div className="row">
                                    <li><FaDumbbell className='icons' style={{ color: '#e8244c' }} /><p>GYM</p></li>
                                    <li><FaCocktail className='icons' style={{ color: '#e8244c' }} /><p>Drinks</p></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="conatiner-2">
                        <div className="box101">
                            <Reservation />
                        </div>
                        <div className="box202">
                            <h1>Hotel Rules</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum atque placeat consequatur enim recusandae veritatis pariatur, tenetur id illum?</p>
                            <ul>
                                <li className='list-item'><LiaCheckSolid style={{ color: '#e8244c' }} className='icons' /><p>Check-in: 3:00 PM - 9:00 PM</p></li>
                                <li className='list-item'><LiaCheckSolid className='icons' style={{ color: '#e8244c' }} /><p>Check-out: 10:30 AM</p></li>
                                <li className='list-item'><LiaCheckSolid className='icons' style={{ color: '#e8244c' }} /><p>No Pets</p> </li>
                                <li className='list-item'><LiaCheckSolid className='icons' style={{ color: '#e8244c' }} /><p>No Smoking</p> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
