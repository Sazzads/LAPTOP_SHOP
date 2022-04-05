import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import useReview from '../../hooks/useReview';

const Review = () => {
    const [reviews, setReviews] = useReview();

    return (
        <>
            <section className="bg-stone-600 md:min-h-screen h-auto p-4 pt-16">
                <h1 className='text-center my-6 pb-6 font-bold text-5xl text-white'>CUSTOMER REVIEW</h1>
                <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center items-center gap-8 h-full">
                    {reviews.map((review) => {
                        const { id, img, name, description } = review;
                        return (
                            <div
                                key={id}
                                className=" w-73 h-[330px] pt-3 pl-4 shadow-2xl rounded text-white border-2"
                            >
                                <div className="flex items-center mb-5">
                                    <img className="w-14 h-14 mr-3" src={img} alt="" />
                                    <h1 className="text-2xl font-bold mb-3">{name}</h1>
                                </div>
                                <p>Ratings:
                                    <FontAwesomeIcon className='text-cyan-600' icon={faStar} />
                                    <FontAwesomeIcon className='text-cyan-600' icon={faStar} />
                                    <FontAwesomeIcon className='text-cyan-600' icon={faStar} />
                                    <FontAwesomeIcon className='text-cyan-400' icon={faStarHalfStroke} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                </p>
                                <p>{description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Review;
