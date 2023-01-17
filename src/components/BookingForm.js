import React from "react";
import { useState } from "react";

const BookingForm = () => {

    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

    return (
        <>
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900">Reserve your table</h2>
                    <form action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div>
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                                <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                        focus:border-primary-600 block w-full p-2.5"/>
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Choose Time</label>
                                <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    {
                                        availableTimes.map(time => (
                                            <option key={time} value={time}>{time}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Occasion</label>
                                <select id="category" defaultValue={"Select"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option value="Select" hidden>Select an occassion</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="anniversary">Anniversary</option>
                                    <option value="casual">No special occasion.Just a casual visit</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900">Number of Guests</label>
                                <input type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                        focus:border-primary-600 block w-full p-2.5" placeholder="1" min={1} max={10} />
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4
                                             focus:ring-yellow-300 rounded-xl mr-2 mb-2 dark:focus:ring-yellow-900">
                            Reserve
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default BookingForm;