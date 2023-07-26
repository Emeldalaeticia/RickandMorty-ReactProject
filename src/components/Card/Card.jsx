import React from 'react';
import { Link } from "react-router-dom"; // Import Link

const Card = ({ page, results }) => { // Add 'page' prop here
  if (!results || results.length === 0) {
    return <div>No Characters Found :/</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map(({ id, image, name, status, location }) => (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`} // Replace 'result' with 'id'
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div key={id} className="bg-white p-4 border border-blue-500 rounded-lg relative">
            <img className="w-full rounded-t-lg" src={image} alt="" />
            <div className="p-4">
              <div className="text-lg font-semibold mb-4">{name}</div>
              <div className="mb-2">
                <div className="text-sm font-medium">Last Location</div>
                <div className="text-lg">{location.name}</div>
              </div>
              <div className="absolute top-2 right-4">
                <div
                  className={`text-white py-1 px-2 rounded ${
                    status === 'Dead'
                      ? 'bg-red-500'
                      : status === 'Alive'
                      ? 'bg-green-500'
                      : 'bg-gray-500'
                  }`}
                >
                  {status}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
