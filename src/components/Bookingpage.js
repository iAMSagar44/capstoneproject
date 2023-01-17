import React from "react";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

const BookingPage = () => {
    return (
        <div className="grid grid-rows-3 gap-4">
            <div className="row-start-1 row-span-2">
                <BookingForm />
            </div>
            <div className="row-start-3">
                <Footer />
            </div>
            
        </div>
    )

}

export default BookingPage;