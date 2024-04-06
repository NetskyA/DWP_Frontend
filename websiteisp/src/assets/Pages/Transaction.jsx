import { Link } from "react-router-dom";
import medal from "../Images/medal.png"
import Footer from "../Component/Footer";
import imagesSlide from "../Images/background.png"

export default function Transaction() {
    return (
        <>
            <div className="flex items-center w-full justify-center bg-cover bg-center">
                <div className="cover w-11/12 sm:w-3/4 bg-white bg-opacity-75 rounded-lg">
                    <div className="flex-row">
                        <div className="p-5 mt-5 mx-auto">
                            <h1 className="text-xl xl:text-3xl mb-6 text-center">Find deals on fast, reliable internet and mobile near you</h1>
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
                        <div className="p-5 mx-auto">
                            <h1 className="text-xl xl:text-2xl mb-4 text-center font-medium">Infinity Internet</h1>
                            <h1 className="text-2xl xl:text-3xl mb-6 text-center">See how to get more value by adding more lines</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:flex grid m-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-2 items-center justify-center">
                <div className="overflow-hidden rounded w-full xl:w-1/4 bg-white text-slate-500 shadow-2xl shadow-gray-400 hover:scale-110 duration-150" style={{ height: "65vh" }}>
                    <div className="banner w-full h-10 bg-gray-700 flex items-center justify-center">
                        <img src={medal} className="h-8" alt="" />
                        <p className="text-white text-center">Best Seller</p>
                    </div>
                    <div className="text-center items-center justify-center text-gray-300 pt-7 flex">
                        <p className="text-xl text-center text-blue-500 flex items-center font-medium">Super Speed</p>
                    </div>
                    <div className="text-center items-center justify-center text-gray-300 flex">
                        <p className="text-xs text-center w-4/5 text-gray-400 flex items-center font-medium">The data you’re looking for with access to Infinity WiFi hotspots in millions of locations nationwide</p>
                    </div>
                    <div className="text-center items-center justify-center text-blue-500 pt-7 flex">
                        <p className="text-4xl font-bold">$</p>
                        <p className="text-9xl text-center flex items-center font-bold">20</p>
                        <p className="text-4xl pt-16 font-bold">/mo</p>
                    </div>
                    <div className="p-6">
                        <header className="mb-4">
                            <h3 className="text-xl font-medium text-slate-700">
                                With 2 Unlimited lines $20/mo total</h3>
                        </header>
                        <p className="text-sm">Benefit: 15 GB of premium data + Unlimited mobile hotspot.</p>
                    </div>
                    <Link to="/payment">
                        <div className="flex justify-end p-6 pt-0">
                            <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-400 px-5 text-xl font-medium tracking-wide text-white transition duration-300 hover:bg-gray-700  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                <span>Shop</span>
                            </button>
                        </div>
                    </Link>
                </div>
                <div className="overflow-hidden rounded w-full xl:w-1/4 bg-white text-slate-500 shadow-2xl shadow-gray-400 hover:scale-110 duration-150">
                    <div className="banner w-full h-10 bg-gray-700 flex items-center justify-center">
                        <img src={medal} className="h-8" alt="" />
                        <p className="text-white text-center">Most Populer</p>
                    </div>
                    <div className="text-center items-center justify-center text-gray-300 pt-7 flex">
                        <p className="text-xl text-center text-blue-500 flex items-center font-medium">Unlimited</p>
                    </div>
                    <div className="text-center items-center justify-center text-gray-300 flex">
                        <p className="text-xs text-center w-4/5 text-gray-400 flex items-center font-medium">The data you re looking for with access to Infinity WiFi hotspots in millions of locations nationwide</p>
                    </div>
                    <div className="text-center items-center justify-center text-blue-500 pt-7 flex">
                        <p className="text-4xl font-bold">$</p>
                        <p className="text-9xl text-center flex items-center font-bold">40</p>
                        <p className="text-4xl pt-16 font-bold">/mo</p>
                    </div>
                    <div className="p-6">
                        <header className="mb-4">
                            <h3 className="text-xl font-medium text-slate-700">
                                With 2 Unlimited lines $40/mo total</h3>
                        </header>
                        <p className="text-sm">Benefit: 30 GB of premium data + Unlimited mobile hotspot + SD video streaming + Unlimited talk and text + Roaming.</p>
                    </div>
                    <Link to="/payment">
                        <div className="flex justify-end p-6 pt-0">
                            <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-400 px-5 text-xl font-medium tracking-wide text-white transition duration-300 hover:bg-gray-700  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                <span>Shop</span>
                            </button>
                        </div>
                    </Link>
                    <div className="banner w-full h-10 bg-gray-700 flex items-center justify-center">
                        <p className="text-blue-500 text-center">valid until April 20th, 2023</p>
                    </div>
                </div>
                <div className="overflow-hidden rounded w-full xl:w-1/4 bg-white text-slate-500 shadow-2xl shadow-gray-400 hover:scale-110 duration-150" style={{ height: "65vh" }}>
                    <div className="banner w-full h-10 bg-gray-700 flex items-center justify-center">
                        <img src={medal} className="h-8" alt="" />
                        <p className="text-white text-center">Best Seller</p>
                    </div>
                    <div className="text-center items-center justify-center text-gray-300 pt-7 flex">
                        <p className="text-xl text-center text-blue-500 flex items-center font-medium">Super Speed</p>
                    </div>
                    <div className="text-center items-center justify-center text-gray-300 flex">
                        <p className="text-xs text-center w-4/5 text-gray-400 flex items-center font-medium">The data you’re looking for with access to Infinity WiFi hotspots in millions of locations nationwide</p>
                    </div>
                    <div className="text-center items-center justify-center text-blue-500 pt-7 flex">
                        <p className="text-4xl font-bold">$</p>
                        <p className="text-9xl text-center flex items-center font-bold">15</p>
                        <p className="text-4xl pt-16 font-bold">/mo</p>
                    </div>
                    <div className="p-6">
                        <header className="mb-4">
                            <h3 className="text-xl font-medium text-slate-700">
                                With 2 Unlimited lines $20/mo total</h3>
                        </header>
                        <p className="text-sm">Benefit: 10 GB of premium data + Unlimited mobile hotspot.</p>
                    </div>
                    <Link to="/payment">
                        <div className="flex justify-end p-6 pt-0">
                            <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-400 px-5 text-xl font-medium tracking-wide text-white transition duration-300 hover:bg-gray-700  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                <span>Shop</span>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="relative w-full xl:w-full mt-32" style={{ height: "80vh", cursor: "pointer" }}>
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

            <div className="flex items-center bg-gray-300 w-full h-20 shadow-xl justify-center bg-cover bg-center">
                <div className="cover w-11/12 sm:w-3/4 bg-opacity-75 rounded-lg">
                    <div className="flex-row">
                        <div className="p-5 mx-auto">
                            <h1 className="text-xs text-gray-600 xl:text-sm mb-6 mt-6">Restrictions apply. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim nec dolor in tristique. Etiam eleifend eu nulla sit amet rutrum. Quisque enim nisl, sodales venenatis massa et, gravida tincidunt nulla. Nulla facilisi.</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )

}