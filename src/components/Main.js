import React from "react";
import image1 from '../assets/bruchetta.svg';
import image2 from '../assets/greeksalad.jpg';
import image3 from '../assets/lemondessert.jpg';

const Main = () => {
    return (
        <main>
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="grid grid-flow-col mb-20">
                        <div className="flex justify-start">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">This weeks specials!</h2>
                        </div>

                        <div className="flex justify-evenly">
                            <button type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4
                            focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Online Menu</button>
                        </div>

                    </div>
                    <div>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div className="max-w-sm bg-slate-100 border border-gray-200 rounded-2xl shadow-md">
                            <img className="rounded-t-lg" src={image2} alt="Greek Salad" />
                            <h3 className="mb-2 text-xl font-bold">Greek Salad</h3>
                            <p className="text-gray-500 dark:text-gray-400">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                        </div>
                        <div className="max-w-sm bg-slate-100 border border-gray-200 rounded-2xl shadow-md">
                            <img className="rounded-t-lg" src={image1} alt="Bruchetta" />
                            <h3 className="mb-2 text-xl font-bold">Bruchetta</h3>
                            <p className="text-gray-500 dark:text-gray-400">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
                        </div>
                        <div className="max-w-sm bg-slate-100 border border-gray-200 rounded-2xl shadow-md">
                            <img className="rounded-t-lg h-60 w-full" src={image3} alt="Lemon Dessert" />
                            <h3 className="mb-2 text-xl font-bold">Lemon Dessert</h3>
                            <p className="text-gray-500 dark:text-gray-400">Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;