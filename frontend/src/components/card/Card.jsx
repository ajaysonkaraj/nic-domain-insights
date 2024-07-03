import React from "react";
import CardImg from './card_news.jpg'
function Card() {
  return (
    <>
      <div className="card w-82 bg-base-100 shadow-md hover:scale-105 duration-200 ease-in dark:bg-navy-700">
        <figure>
          <img
            src={CardImg}
            alt="News"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            News!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nulla quo!</p>
          <div className="card-actions justify-center">
            {/* <div className="badge badge-outline">Products</div> */}
            <button className="py-1 px-3 bg-blueSecondary text-white rounded-full hover:scale-105 hover:bg-blue-400">Read more...</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
