import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import { BsCalendar3, BsFillPersonFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi"
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./reservation.scss";


export default function Reservation() {
    const [openDate, setOpenDate] = useState(false);
    const [showRoom, setShowRoom] = useState(false);
    const roomTypes = ["Signature Room", "Delux Room", "Super Delux Room", "Luxury Suit"];
    const [selectedRoom, setSelectedRoom] = useState("Select Room Type");
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };


    return (
        <div className="reservation-container">
            <h1>Reservation</h1>
            <div className="selectRoom-conatiner">
                <div className="dropdown-menu">
                    <span onClick={() => setShowRoom(!showRoom)}>
                        <p>{selectedRoom}</p>
                        <BiChevronDown />
                    </span>
                    {showRoom && (
                        <div className="dropdown-content">
                            {roomTypes.map((option) => (
                                <div className="dropdown-item"
                                    onClick={(e) => {
                                        setSelectedRoom(option);
                                        setShowRoom(false);
                                    }}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    )
                    }
                </div>
            </div>
            <div className="date-container">
                <div className="date-calender">
                    <div className="calender-and-date">
                        <BsCalendar3 className="headerIcon" />
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                            {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}
                        </span>
                    </div>
                    {openDate && (
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDates([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dates}
                            className="date"
                            minDate={new Date()}
                        />
                    )}
                </div>
            </div>
            <div className="persons-container">
                <div className="person-conatiner-1">
                    <BsFillPersonFill className="headerIcon" />
                    <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>
                        {`${options.adult} adult · ${options.children} children`}
                    </span>
                </div>
                {openOptions && (
                    <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="btn-container">
                <button className="headerBtn" >Search</button>
            </div>
        </div >

    );
};

