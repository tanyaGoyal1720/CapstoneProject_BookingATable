import { useReducer } from "react";
import { useNavigate } from 'react-router-dom';
// import { useState } from "react";
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from "./fakeAPI";

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
  };

const initializeTimes = initialAvailableTimes =>
    [...initialAvailableTimes, ...fetchAPI(new Date())];

const BookingPage =() => {

    const [
        availableTimes,
        dispatchOnDateChange
    ] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = formData => {
        const response = submitAPI(formData);
        if (response) navigate('/ConfirmedBooking');
      };

    return(
        <BookingForm
            availableTimes={availableTimes}
            dispatchOnDateChange={dispatchOnDateChange}
            submitForm={submitForm}
        />
    );
}

export default BookingPage;