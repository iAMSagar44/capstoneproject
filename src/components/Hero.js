import React from "react";
import foodLogo from '../assets/restaurantfood.jpg'
import { useNavigate } from "react-router-dom";


const Hero = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/reservations');
    }

    return (
        <>
            <section className="bg-teal-900 max-h-64 lg:overflow-visible w-full">
                <div className="md:flex md:flex-row">
                    <div className="md:w-2/3 md:pr-4">
                        <h1 className="lg:pl-80 md:pl-40 max-w-2xl mt-4 mb-1 text-2xl font-medium tracking-tight leading-none md:text-3xl xl:text-4xl text-yellow-300">Little Lemon</h1>
                        <h2 className="lg:pl-80 md:pl-40 max-w-2xl mb-4 text-1xl font-medium tracking-tight leading-none md:text-2xl xl:text-2xl text-white">Chicago</h2>
                        <p className="lg:pl-80 md:pl-40 max-w-2xl mb-4 font-normal md:text-base lg:text-lg text-white">We are a family owned Mediterranean restaurant, focussed on traditional recipes served with a modern twist.</p>
                        <div className="lg:pl-80 md:pl-40">
                            <button type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4
                                             focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                                onClick={handleButtonClick}>Reserve a Table</button>
                        </div>

                    </div>
                    <div className="md:w-1/3 lg:pt-5 md:pt-2 relative hidden md:block">
                        <img className="aspect-square lg:h-64 lg:w-auto object-cover rounded-lg" src={foodLogo} alt="" />
                    </div>
                </div>
            </section>


        </>


    )
}
export default Hero;