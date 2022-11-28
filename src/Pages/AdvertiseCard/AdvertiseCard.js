import React from "react";
import { ImageViewer } from "react-image-viewer-dv";
import { Link } from "react-router-dom";
const AdvertiseCard = ({ product }) => {
  return (
    <div>
      {product?.Paid === "true" ? (
        ""
      ) : (
        <div>
          <div
            key={product._id}
            className="max-w-xs p-6 h-[600px] rounded-md shadow-md dark:bg-gray-800 dark:text-gray-50"
          >
            <ImageViewer>
              <img
                src={product.ProductImage}
                alt="ProductImage"
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
            </ImageViewer>
            <div className="mt-6 mb-2">
              <span className="block text-lg font-medium tracking-widest uppercase dark:text-gray-400">
                {product.ResellPrice}৳
              </span>
              <div className="absolute">
                <h2 className="text-xl font-semibold tracking-wide absolute w-64">
                  {product.BookName}
                  <span className="text-sm"> by {product.AuthorName}</span>
                </h2>
              </div>

              <div className="flex justify-center mt-10 relative  top-28">
                <Link to={`/CategoryBooks/${product.Category_id}`}>
                  <button className="btn bg-gray-300 w-64 text-gray-800 hover:bg-white ">
                    See Books
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertiseCard;
