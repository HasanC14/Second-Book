import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

const ProductCard = ({ book }) => {
  const [product, setProduct] = useState({});
  return (
    <div className="p-10">
      <div className=" w-full lg:max-w-full lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${book.ProductImage})` }}
          title="ProductImage"
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {book.BookName}
            </div>
            <div className="text-gray-900 mb-2 font-semibold">
              by {book.AuthorName}
            </div>
            <p className="text-gray-700 text-base">{book.Description}</p>
            <p className="text-gray-700 text-base font-semibold">
              Original Price: {book.OriginalPrice}৳
            </p>
            <p className="text-gray-700 text-base font-semibold">
              Resell Price: {book.ResellPrice}৳
            </p>
            <p className="text-gray-700 text-base font-semibold">
              Purchase Date: {book.PurchaseDate}
            </p>
          </div>
          <div className="flex justify-between">
            <div className="text-sm">
              <p className="text-gray-900 text-xl leading-none font-semibold">
                Seller Details
              </p>
              <p className="text-gray-900 text-lg leading-none">
                {book.SellerName}
              </p>
              <p className="text-gray-900 leading-none">{book.Location}</p>
              <p className="text-gray-900 leading-none">{book.Phone}</p>
              <p className="text-gray-600">
                Posted on {book?.Time.split("T")[1].split(":")[0]}.
                {book?.Time.split("T")[1].split(":")[1]} ({" "}
                {book?.Time.split("T")[0]})
              </p>
            </div>
            <div>
              {book.Booked === "true" ? (
                <button className="btn" disabled>
                  Already Booked
                </button>
              ) : (
                <label
                  htmlFor="my-modal-3"
                  className="btn "
                  onClick={() => setProduct(book)}
                >
                  Book Now
                </label>
              )}

              <BookingModal product={product}></BookingModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
