import React from "react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { fetchAPI, submitAPI } from "../stub/stubAPI";

const BookingForm = () => {

    const [availableTimes, setAvailableTimes] = useState([]);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    const formik = useFormik({
        initialValues: {
            date: new Date().toISOString().slice(0, 10),
            time: '',
            occasion: '',
            guests: 1
        },
        onSubmit: (values, actions) => {
            //alert(JSON.stringify(values, null, 2));
            submitAPI(values)
                .then((response) => {
                    console.log(response);
                    actions.resetForm({
                        date: new Date().toISOString().slice(0, 10),
                        time: '',
                        occasion: '',
                        guests: 1
                    })
                })
        }
    })

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function updateAvailableTime(date) {
        fetchAPI(date)
                .then((response) => {
                    console.log("Inside the update time func call", response);
                    setAvailableTimes(response);
                })
    }

    useEffect(() => {
        console.log("Inside the useEffect call", date);
        updateAvailableTime(new Date(date));
    }, [date])

    return (
        <>
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900">Reserve your table</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div>
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                                <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                        focus:border-primary-600 block w-full p-2.5"
                                    value={date}
                                    onChange={handleDateChange} />
                            </div>
                            <div>
                                <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900">Choose Time</label>
                                <select id="time" name="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    value={formik.values.time}
                                    onChange={formik.handleChange}>
                                    {
                                        availableTimes.map(time => (
                                            <option key={time} value={time}>{time}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="occasion" className="block mb-2 text-sm font-medium text-gray-900">Occasion</label>
                                <select id="occasion" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    value={formik.values.occasion}
                                    onChange={formik.handleChange}>
                                    <option value="Select" hidden>Select an occassion</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="casual">No special occasion.Just a casual visit</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="guests" className="block mb-2 text-sm font-medium text-gray-900">Number of Guests</label>
                                <input type="number" name="guests" id="guests" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                        focus:border-primary-600 block w-full p-2.5" placeholder="1" min={1} max={10}
                                    value={formik.values.guests}
                                    onChange={formik.handleChange} />
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4
                                             focus:ring-yellow-300 rounded-xl mr-2 mb-2">
                            Reserve
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default BookingForm;