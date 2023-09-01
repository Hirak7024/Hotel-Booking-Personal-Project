import React from 'react';
import decorative from "../../assets/Decorative.png"
import event1 from "../../assets/Event1.jpg";
import event2 from "../../assets/Event2.jpg";
import event3 from "../../assets/Event3.jpg";
import "./events.scss";

export default function Events() {
  return (
    <>
    <div className="events-container">
        <h2>Upcoming</h2>
        <h1>Events</h1>
        <img className='decorative' src={decorative} alt="" />
        <div className="events">
            <div className="event">
                <img className='event-img' src={event2} alt="" />
                <div className="desc-box">
                    <div className='date'>
                        <h3>25</h3>
                        <h4>APRIL</h4>
                    </div>
                    <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </div>
                </div>
            </div>
            <div className="event">
                <img className='event-img' src={event1} alt="" />
                <div className="desc-box">
                    <div className='date'>
                        <h3>22</h3>
                        <h4>JUNE</h4>
                    </div>
                    <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </div>
                </div>
            </div>
            <div className="event">
                <img className='event-img' src={event3} alt="" />
                <div className="desc-box">
                    <div className='date'>
                        <h3>15</h3>
                        <h4>MAY</h4>
                    </div>
                    <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
