import React from "react";
import foodLogo from '../assets/restaurantfood.jpg'

const Hero = () => {

    return (
        <section className="bg-teal-900 grid grid-cols-12 gap-4 flex-row-reverse">

            <div className="col-start-3 col-span-2">
                <h1 className="max-w-2xl mt-4 mb-1 text-2xl font-medium tracking-tight leading-none md:text-3xl xl:text-4xl text-yellow-300">Little Lemon</h1>
                <h2 className="max-w-2xl mb-4 text-1xl font-medium tracking-tight leading-none md:text-2xl xl:text-2xl text-white">Chicago</h2>
                <p className="max-w-2xl mb-4 font-normal lg:mb-6 md:text-base lg:text-lg text-white">We are a family owned Mediterranean restaurant, focussed on traditional recipes served with a modern twist.</p>
                <button type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4
                                             focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Reserve a Table</button>
            </div>

            <div className="col-start-9 col-span-2 pt-5">
                <div className="flex items-center justify-center">
                    <img className="aspect-square rounded-lg w-full lg:w-full" src={foodLogo} alt="" />
                </div>

            </div>

        </section>
    )
}
export default Hero;