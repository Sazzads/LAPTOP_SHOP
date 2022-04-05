import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-stone-600'>
            <div className='text-center text-white'>
                <h1 className='text-center text-9xl font-bold text-red-400'>404</h1>
                <h3 className='py-3 text-4xl font-bold opacity-25'>Path is not found</h3>
            </div>
        </div>
    );
};

export default NotFound;