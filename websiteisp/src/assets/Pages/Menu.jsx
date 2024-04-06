import imagesSlide from "../Images/background.png"
import Carousel from "../Component/Carousel";
import phone from "../Images/phone.png";
import arrow from "../Images/arrow.png";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <>
            <div className="flex items-center w-full justify-center bg-cover bg-center">
                <div className="cover w-11/12 sm:w-3/4 bg-white bg-opacity-75 rounded-lg">
                    <div className="flex-row">
                        <div className="p-5 mx-auto mt-5">
                            <h1 className="text-xl xl:text-3xl mb-6 text-center">Enter your address to shop the lowest prices online</h1>
                        </div>
                        <div className="p-5 flex justify-center">
                            <input type="text" id="address" name="address" placeholder="Surabaya, Indonesia"
                                className="shadow appearance-none border rounded xl:w-8/12 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
                            <button className="bg-transparent border border-black text-black h-12 hover:bg-gray-200 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline ml-4 hover:scale-105 duration-150">
                                Search
                            </button>
                        </div>
                        <div className="mx-auto items-center flex justify-center space-x-1 mb-9">
                            <Link to="/login">
                                <span className="text-sm text-gray-400 xl:text-base mb-6 text-center">Already a customer?</span>
                                <span className="text-sm text-black xl:text-base mb-6 text-center underline mx-1">Sign in</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full xl:w-full" style={{ height: "80vh", cursor: "pointer" }}>
                <img src={imagesSlide} className="object-cover h-full w-full" alt="" />
                <div className="absolute top-0 left-0 right-0 bottom-0 items-center">
                    <div className="items-center w-9/12 sm:w-full lg:w-full xl:w-1/2 mt-16 h-96 bg-black bg-opacity-50 p-4 rounded-xl shadow-2xl" style={{ height: "65vh" }}>
                        <p className="text-white ps-5 xl:ps-20 pt-5 text-lg sm:text-sm lg:text-sm xl:text-2xl font-bold">Infinity Internet</p>
                        <p className="text-white ps-5 xl:ps-20 w-11/12 pt-7 text-xl xl:text-4xl">{"Relentless Momentum Limitless Speed"}</p>
                        <div className="text-white ps-5 xl:ps-20 pt-7 flex">
                            <p className="text-4xl font-bold">$</p>
                            <p className="text-9xl ps-2 text-center flex items-center font-bold">15</p>
                            <p className="text-4xl ps-2 pt-20 font-bold">/mo</p>
                        </div>
                        <div className="text-white ps-5 xl:ps-20 pt-3 flex">
                            <p className="text-base">Bringing the world closer with every click</p>
                        </div>
                        <div className="text-white w-72 xl:w-full ps-2 xl:ps-20 xl:mx-18 mt-5 flex">
                            <p className="text-sm text-end pt-12 font-bold underline underline-offset-4 w-96">Pricing & other info</p>
                            <button className="bg-white w-96 xl:w-64 h-10 mt-10 ms-3 text-gray-500 font-bold py-2 px-4 rounded-xl hover:scale-105 duration-200" style={{ cursor: "pointer" }}>Shop</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="multiplatform mt-24 mb-44" style={{ height: "25vh" }}>
                <div className="flex justify-center items-center w-full">
                    <div className="flex justify-center items-center space-x-4">
                        <Link to="/transaction">
                            <div className="card hover:w-72 w-60 h-60 hover:shadow-2xl hover:bg-gray-100 rounded-md transition-all duration-200">
                                <div className="p-4 flex flex-col justify-center items-center">
                                    <div className="flex flex-col justify-center items-center h-56 w-44 rounded-md" style={{ cursor: "pointer" }}>
                                        <img src={phone} className="w-20" alt="" />
                                        <p className="text-base pt-2">Internet</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/transaction">
                            <div className="card hover:w-72 w-60 h-60 hover:shadow-2xl hover:bg-gray-100 rounded-md transition-all duration-200">
                                <div className="p-4 flex flex-col justify-center items-center">
                                    <div className="flex flex-col justify-center items-center h-56 w-44 rounded-md" style={{ cursor: "pointer" }}>
                                        <img src={phone} className="w-20" alt="" />
                                        <p className="text-base pt-2">Internet</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/transaction">
                            <div className="card hover:w-72 w-60 h-60 hover:shadow-2xl hover:bg-gray-100 rounded-md transition-all duration-200">
                                <div className="p-4 flex flex-col justify-center items-center">
                                    <div className="flex flex-col justify-center items-center h-56 w-44 rounded-md" style={{ cursor: "pointer" }}>
                                        <img src={phone} className="w-20" alt="" />
                                        <p className="text-base pt-2">Internet</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/transaction">
                            <div className="card hover:w-72 w-60 h-60 hover:shadow-2xl hover:bg-gray-100 rounded-md transition-all duration-200">
                                <div className="p-4 flex flex-col justify-center items-center">
                                    <div className="flex flex-col justify-center items-center h-56 w-44 rounded-md" style={{ cursor: "pointer" }}>
                                        <img src={phone} className="w-20" alt="" />
                                        <p className="text-base pt-2">Internet</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <hr className="w-11/12 mx-auto mb-28" />

            <div className="xl:flex flex-row w-full flex items-center justify-center mb-32 bg-opacity-75 rounded-lg">
                <div className="flex-row w-96 mt-1 h-16 xl:h-52 xl:w-5/12 bg-black items-center justify-center flex">
                    <div className="items-center justify-center flex">
                        <img src={arrow} className="h-18 w-18 xl:h-28 xl:w-28 items-center justify-center flex" alt="" />
                    </div>
                </div>
                <div className="flex-row w-5/12 xl:w-11/12">
                    <div className="ps-3">
                        <h1 className="text-xs xl:mb-18 font-medium text-gray-700 xl:text-4xl">Login and get attractive coupons</h1>
                    </div>
                    <Link to="/login">
                        <button className="xl:w-32 h-8 w-28 mt-1 ms-3 xl:h-10 bg-black hover:scale-105 xl:hover:w-52 duration-150">
                            <p className="text-white">Login</p>
                        </button>
                    </Link>
                </div>
            </div>

            <hr className="w-11/12 mx-auto mb-20" />

            <div className="flex items-center w-full justify-center bg-cover bg-center">
                <div className="cover w-11/12 sm:w-3/4 bg-white bg-opacity-75 rounded-lg">
                    <div className="flex-row">
                        <div className="p-5 mx-auto xl:space-x-2 items-center justify-center flex">
                            <span className="text-xl xl:text-3xl text-center">Do more with</span>
                            <span className="text-xl xl:text-3xl text-center font-semibold hover:underline">Infinity</span>
                        </div>
                        <div className="p-5 flex justify-center mb-20">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )

}