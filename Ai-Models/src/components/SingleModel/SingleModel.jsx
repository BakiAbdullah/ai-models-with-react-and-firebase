import React from 'react';
import { Link } from 'react-router-dom';

const SingleModel = ({data}) => {
  const { id, name, image, features, published_in, description } = data;

  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure className='w-full'>
          <img className='object-cover h-[230px] w-full' src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Features</h2>
          <ol>
            {features.map((feature) => (
              <li className="ml-4 list-decimal">{feature}</li>
            ))}
          </ol>
          <hr />

          <div className="card-actions justify-between">
            <div>
              <h1>{name}</h1>
              <p>{published_in}</p>
            </div>
            <Link to={`/description/${id}`}>
              <button className="btn bg-gradient-to-r via-blue-500 to-cyan-600">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleModel;