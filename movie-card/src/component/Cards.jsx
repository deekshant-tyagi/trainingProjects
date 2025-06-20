import React from "react";

const Cards = ({ title, description, image, rating, subTitle }) => {
  return (
    <div className="w-[320px] bg-amber-50 md:w-80 transition transform hover:scale-108">
      <div className="">
        <div
          className="bg-white shadow-md flex flex-row overflow-hidden
            w-full md:w-80"
        >
          <img src={image} alt={title} className="h-48 object-cover w-full" />
        </div>
        <div className="ml-3">
          <h3 className="text-lg">{title}</h3>
          <h5 className="text-xs mb-1">{subTitle}</h5>
          <p className="text-xs">{description}</p>
        </div>
      </div>

      <div className="flex mt-2 shadow-xl bg-gray-50 justify-between">
        <div className=" p-3">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>
        <div className="h-5 w-8 rounded-2xl bg-blue-500 mt-3 mr-3 pl-3 pb-6 text-white">
          {rating}
        </div>
      </div>
    </div>
  );
};

export default Cards;
