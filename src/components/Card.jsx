// import React from 'react'

// eslint-disable-next-line react/prop-types
const Card = ({ image, date, title }) => {
  return (
    <>
      <div className="rounded-lg shadow-lg bg-white w-full md:w-[260px] lg:w-[300px]">
        <div className="card-container overflow-hidden">
          <div id="display-card">
          <img src={image} alt="tes image" className="w-full rounded-t-lg hover:opacity-60 ease-in-out duration-200"/>

          </div>
          <div id="text-card" className="p-5">
          <h1 className="font-manrope text-sm font-normal text-slate-500">{date}</h1>
          <h1 className="font-philosopher text-xl md:text-2xl font-bold text-indigo-950 my-3 leading-tight">{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
