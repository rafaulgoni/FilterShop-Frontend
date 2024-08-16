import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Product = () => {
    const [six, setSix] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setSix(data)
            })
    }, [])
    const data = six.slice(0, 6)

    return (
        <div className=" container mx-auto mt-10">
            <div className='border-l-4 border-[#FF3811] mb-4'>
                <div className='ml-2 space-y-2'>
                    <p className='text-[#FF3811] font-bold'>Products</p>
                    <h1 className='text-4xl font-bold'>Why Choose our Product</h1>
                    <p className='max-w-[600px]'>In the quiet town of Ravens wood, a single thread unravels the lives of its unsuspecting residents.</p>
                </div>
            </div>
            <div >
                <div className="grid md:grid-cols-2 gap-8 mt-5">
                    {
                        data.map(six => <div key={six._id} className="card lg:card-side bg-base-100 shadow-xl">
                            <figure>
                                <img className="w-96 h-96"
                                    src={six.image}
                                    alt="Album" />
                            </figure>
                            <div className="card-body">
                                <div className="flex justify-between gap-3">
                                    <p className="border-2 border-[#ff1111] rounded-xl text-center bg-red-200"><span className="font-bold">Rating:</span> {six.ratings}</p>
                                    <p className="border-2 border-[#ff1111] rounded-xl text-center bg-red-200"><span className="font-bold">price:</span> {six.price}</p>
                                </div>
                                <hr />
                                <h2 className="text-2xl font-bold">Name: {six.name}</h2>
                                <p><span className="font-bold">Description:</span> {six.description}</p>
                                <p><span className="font-bold">Category:</span> {six.category}</p>
                                <div className="card-actions">
                                    <Link to="/allCard" className="btn w-full btn-sm bg-[#ff1111]"><FaArrowRightLong/></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="text-center mt-5">
                <Link to='/allCard' className="btn bg-[#ff1111]">See More <FaArrowRightLong/></Link>
            </div>
        </div>
    );
};

export default Product;