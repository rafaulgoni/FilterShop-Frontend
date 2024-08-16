import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://b9a12-server-side-rafaulgoni.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className='container mx-auto'>
            <div className='mb-16'>
                <div className='text-center space-y-2'>
                    <h3 className='text-[#FF3811] font-bold'>~~~ What Our Clients Say ~~~</h3>
                    <hr className='border-b-4 border-dashed w-1/6 mx-auto' />
                    <h1 className='lg:text-6xl text-3xl font-bold'>The Top Delivery Man</h1>
                    <hr className='border-b-4 border-dashed w-2/6 mx-auto' />
                </div>
                <div className='mt-5'>
                    <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}
                            >
                                <div className="card md:card-side bg-base-100 border max-w-[900px] mx-auto">
                                    <figure className='w-96 mx-auto'><img src={review.image} alt="Album" /></figure>
                                    <div className="card-body">
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                        <h2 className="card-title text-3xl">Name: {review.name}</h2>
                                        <p><span className='font-bold'>One of the best words ever written for me:</span><br />{review.details}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Review;