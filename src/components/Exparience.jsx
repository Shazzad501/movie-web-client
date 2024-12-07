import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Exparience = () => {
  const [items, setItems] = useState([])

  useEffect(()=>{
    fetch('./exparience.json')
    .then(res=> res.json())
    .then(data=> {
      setItems(data)
    })
  }, [])
  return (
    <div className="p-8 rounded-md">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">

      <div className="text-center lg:text-left max-w-lg">
        
        <p className='font-bold text-4xl mb-2'>Movie <span className='text-red-400'>Lover</span></p>
        <h2 className="text-3xl font-bold">
          Looking for unlimited exparience?
        </h2>
        <p className="text-gray-600 mt-4">Subscribe to Movie Lover Elements.</p>
        <ul className="mt-4 text-gray-600 space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Millions of premium
            movie
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Great value login
          </li>
        </ul>
        <Link to='/add-movie' className="btn mt-6 bg-red-400 text-white hover:bg-red-500 px-6 py-3 rounded-lg">
          Start creating now <span className="ml-2">→</span>
        </Link>
      </div>

      {/* Right Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="card border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="rounded-lg w-[150px] h-[150px] object-cover"
            />
            <p className="mt-2 text-center text-gray-700 font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Exparience;