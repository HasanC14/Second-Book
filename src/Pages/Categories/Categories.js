import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get(`https://server-ten-theta.vercel.app/categories`).then((res) => {
      const persons = res.data;
      setCategories(persons);
    });
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <p className="text-4xl text-center font-semibold mb-5">
        Find <span className="font-black">BOOKS</span> from your favorite
        <span className="font-black ml-2">GENRES</span>
      </p>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10 md:m-24 md:mt-0 lg:m-0">
        {categories.map((category) => (
          <div
            key={category._id}
            className="card w-96 h-96 bg-base-200 shadow-xl image-full"
          >
            <figure>
              <img src={category.img} alt="Category Card Thumbnail" />
            </figure>
            <div className="card-body text-center">
              <p className="card-title text-7xl  text-white">
                {category.category}
              </p>
              <div className="card-actions justify-center">
                <Link to={`/CategoryBooks/${category._id}`}>
                  <button className="btn bg-gray-300 w-80 text-gray-800 hover:bg-white ">
                    See Books on {category.category}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
