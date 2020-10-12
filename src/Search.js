import React, { useState } from 'react';
import './Search.css';

//DATEPICKER IMPORTS
import "react-date-range/dist/theme/default.css";
import "react-date-range/dist/styles.css";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import { Button } from '@material-ui/core'


import './Banner.css';

// DATE PICKER COMPONENT
function Search() {
    // we add two pieces of state which are start date & end date
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // we add two new objects
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    //function dat will run after a date is selected in date picker
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker 
            ranges={[selectionRange]} 
            onChange={handleSelect} 
            />
            <h2>
            Number of guests
            <PeopleIcon />
            </h2>
            <input min={0}
            defaultValue={2}
            type="number" />
            <Button>Search Airbnb</Button>    
        </div>
    )
}

export default Search
