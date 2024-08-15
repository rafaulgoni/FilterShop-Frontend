const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/5LX9X3M/download-one.webp'} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] t-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 lg:pl-12 lg:w-1/3'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Cleaner Servicing</h1>
                            <p>Redefining Sustainability, One Innovation at a Time. Join us in our mission to revolutionize environmental stewardship, fostering a cleaner, healthier planet for generations to come.</p>
                            <div>
                                <button className="btn btn-active bg-[#c81717] border-none text-white font-bold mr-5">Discover More</button>
                                <button className="btn btn-outline outline-white text-white font-bold">Latest Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5 border-[#c81717]">❮</a>
                        <a href="#slide2" className="btn btn-circle border-[#c81717]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/vsV0RVS/R.jpg'} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] t-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 lg:pl-12 lg:w-1/3'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Electrician Servicing</h1>
                            <p>Illuminating the Path to a Cleaner Energy Future. Our project harnesses the power of electricity to drive sustainable change, empowering communities with renewable energy solutions.</p>
                            <div>
                                <button className="btn btn-active bg-[#c81717] border-none text-white font-bold mr-5">Discover More</button>
                                <button className="btn btn-outline outline-white text-white font-bold">Latest Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5 border-[#c81717]">❮</a>
                        <a href="#slide3" className="btn btn-circle border-[#c81717]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/cNCn3wF/Samsung.webp'} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] t-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 lg:pl-12 lg:w-1/3'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Mechanic Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-active bg-[#c81717] border-none text-white font-bold mr-5">Discover More</button>
                                <button className="btn btn-outline outline-white text-white font-bold">Latest Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5 border-[#c81717]">❮</a>
                        <a href="#slide4" className="btn btn-circle border-[#c81717]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/MVRq31Z/i-Phone-15-jpg.webp'} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] t-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 lg:pl-12 lg:w-1/3'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Nurse Servicing</h1>
                            <p> Healing the Environment, One Step at a Time. Our project tends to the wounds of our planet, administering care through eco-friendly initiatives and sustainable practices.</p>
                            <div>
                                <button className="btn btn-active bg-[#c81717] border-none text-white font-bold mr-5">Discover More</button>
                                <button className="btn btn-outline outline-white text-white font-bold">Latest Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5 border-[#c81717]">❮</a>
                        <a href="#slide1" className="btn btn-circle border-[#c81717]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner