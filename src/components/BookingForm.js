import React from "react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { fetchAPI, submitAPI } from "../stub/stubAPI";
import * as Yup from 'yup';

const BookingForm = () => {

    const [availableTimes, setAvailableTimes] = useState([]);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [showModal, setShowModal] = useState(false);


    const formik = useFormik({
        initialValues: {
            date: date,
            time: '',
            occasion: '',
            guests: 1
        },
        validationSchema: Yup.object({
            date: Yup.date().min(new Date().toISOString().slice(0, 10), 'Date cannot be in the past').required('Required'),
            guests: Yup.number().min(1, 'Must be greater than 0').max(10, 'Maximum no. of guests that can be booked online is 10')
                .required('Required')
        }),
        onSubmit: (values, actions) => {
            console.log("At submit action", formik.values.time);
            submitAPI(values)
                .then((response) => {
                    console.log(values, "===========", response);
                    actions.resetForm({
                        date: new Date().toISOString().slice(0, 10),
                        time: '',
                        occasion: '',
                        guests: 1
                    })
                    setShowModal(true);    
                })
        }
    })

    function handleDateChange(e) {
        formik.values.date = e.target.value;
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
                                    onChange={handleDateChange}
                                    onBlur={formik.handleBlur}
                                    />
                                {formik.touched.date && formik.errors.date ? (
                                    <div>{formik.errors.date}</div>
                                ) : null}
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
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}/>
                                {formik.touched.guests && formik.errors.guests ? (
                                    <div>{formik.errors.guests}</div>
                                ) : null}
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4
                                             focus:ring-yellow-300 rounded-xl mr-2 mb-2 data-modal">
                            Reserve
                        </button>
                    </form>
                </div>

            </section>

            {
                showModal && (
                    <div tabIndex="-1" className="flex justify-center w-full p-4 overflow-x-auto overflow-y-auto md:inset-0 h-modal md:h-full">
                        <div className="relative w-full h-full max-w-2xl md:h-auto">
                            <div className="relative bg-slate-100 rounded-lg shadow">

                                <div className="flex items-center justify-center p-4 border-b rounded-t">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        Reservation Status
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                        onClick={() => {
                                            setShowModal(false);
                                            setDate(new Date().toISOString().slice(0, 10));}}>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div className="flex items-baseline justify-between p-4 border-b rounded-t">
                                    <p className="text-base leading-relaxed text-gray-500">
                                        You reservation on {new Date(date).toUTCString().split(" ").slice(0,4).join(" ")} is confirmed
                                    </p>
                                    <button type="button" className="px-5 py-2 sm:mt-6 text-sm font-medium text-center text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4
                                             focus:ring-yellow-300 rounded-xl mr-2 mb-2 data-modal"
                                        onClick={() => {
                                            setShowModal(false);
                                            setDate(new Date().toISOString().slice(0, 10));}}>
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default BookingForm;