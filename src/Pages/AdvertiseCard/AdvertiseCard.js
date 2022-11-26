import React, { useState } from "react";
import { ImageViewer } from "react-image-viewer-dv";
import BookingModal from "../BookingModal/BookingModal";
const AdvertiseCard = ({ products }) => {
  const [order, setOrder] = useState({});
  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <p className="text-4xl text-center font-black">Advertised Products</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 lg:ml-0 ml-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-800 dark:text-gray-50"
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
              <h2 className="text-xl font-semibold tracking-wide">
                {product.BookName}
                <span className="text-sm"> by {product.AuthorName}</span>
              </h2>
            </div>

            {/* <div>
              {product.Booked === "true" ? (
                <button className="btn" disabled>
                  Already Booked
                </button>
              ) : (
                <label
                  htmlFor="my-modal-3"
                  className="btn "
                  onClick={() => setOrder(product)}
                >
                  Book Now
                </label>
              )}
              <BookingModal order={order}></BookingModal>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertiseCard;
