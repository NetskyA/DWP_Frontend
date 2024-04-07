import medal from "../Images/medal.png"
import game from "../Images/game.jpg"
import close from "../Images/close.png"
import Carouselcard from "../Component/Carouselcard"
import Footer from "../Component/Footer";

export default function Payment() {
    return (
        <>
            <div className="flex items-center w-full justify-center bg-cover bg-center">
                <div className="cover w-11/12 sm:w-3/4 bg-white bg-opacity-75 rounded-lg">
                    <div className="flex-row">
                        <div className="p-5 mt-5 mx-auto">
                            <h1 className="text-xl xl:text-3xl mb-6 text-center">Good choice for the future</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full mb-24">
                <div className="xl:flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row max-w-4xl">
                    {/*  <!-- Image --> */}
                    <div className="coba absolute">
                        <img src={close} className="h-8 p-1 rounded-xl m-2 hover:bg-red-600 hover:scale-105 " alt="" />
                    </div>
                    <div className="w-full xl:w-2/4">
                        <div className="banner w-full h-20 bg-blue-500 flex items-center justify-center">
                            <img src={medal} className="h-8" alt="" />
                            <p className="text-white text-center">Most Populer</p>
                        </div>
                        <div className="text-center items-center justify-center text-blue-500 flex-row">
                            <img src={game} className="h-2/4" alt="" />
                        </div>
                        <div className="banner w-full h-24 bg-blue-500 flex items-center justify-center">
                            <p className="text-white text-center">Valid until April 20th, 2023</p>
                        </div>
                    </div>
                    {/*  <!-- Body--> */}
                    <div className="flex-1 mx-6 mt-10 xl:mt-0 sm:px-0">
                        <header className="flex gap-4 mb-4">
                            <p className="text-2xl pt-2 font-medium text-gray-800">Type</p>
                            <div>
                                <h3 className="text-xl font-medium text-blue-500">
                                    Unlimited
                                </h3>
                                <p className="text-sm text-slate-400"> Buy Sun, jun 7 2024</p>
                            </div>
                        </header>
                        <div>
                            <h3 className="text-xl font-medium text-gray-800">Description</h3>
                            <span>✔️</span>
                            <span>30 GB of premium data</span>
                        </div>
                        <div className="mt-2">
                            <span>✔️</span>
                            <span>Unlimited mobile hotspot</span>
                        </div>
                        <div className="mt-2">
                            <span>✔️</span>
                            <span>SD video streaming</span>
                        </div>
                        <div className="mt-2">
                            <span>✔️</span>
                            <span>Unlimited talk and text</span>
                        </div>
                        <div className="mt-2">
                            <span>✔️</span>
                            <span>Roaming</span>
                        </div>

                        <div className="flex space-x-2 mt-5">
                            <p className="pt-1 text-xl">Coupon : </p>
                            <input type="text" id="address" name="address" placeholder="Code Coupon"
                                className="shadow appearance-none border rounded h-10 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
                        </div>
                        <hr className="mb-2 mt-2" />
                        <div className="mt-1 flex space-x-2 mb-10">
                            <p className="text-xl pt-1 text-gray-800 font-medium">Subtotal : </p>
                            <p className="pt-1 text-xl text-blue-500">$. 40</p>
                        </div>
                        <button className="inline-flex mb-10 h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded hover:scale-105  bg-gray-400 px-5 text-xl font-medium tracking-wide text-white transition duration-300 hover:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                            <span>Shop</span>
                        </button>
                    </div>
                </div>
            </div>
            <hr className="w-11/12 border-gray-300 mx-auto mb-18" />
            <div className="flex items-center w-full justify-center bg-cover bg-center">
                <div className="cover w-11/12 sm:w-3/4 bg-white bg-opacity-75 rounded-lg">
                    <div className="flex-row">
                        <div className="p-5 mt-5 mx-auto">
                            <h1 className="text-xl xl:text-3xl mb-6 text-left">Recomended</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-full justify-center mb-28 bg-cover bg-center">
                <div className="cover w-11/12 sm:w-3/4 items-center justify-center flex bg-white bg-opacity-75 rounded-lg">
                    <Carouselcard />
                </div>
            </div>

            <Footer />
        </>
    )
}
