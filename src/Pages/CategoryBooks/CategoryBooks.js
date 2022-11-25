import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useLoaderData } from "react-router-dom";

const CategoryBooks = () => {
  const Books = useLoaderData();
  // const { User } = useContext(AuthContext);
  // const [Seller, setSeller] = useState({});
  // useEffect(() => {
  //   fetch(`http://localhost:5000/seller/?email=${User?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setSeller(data));
  // }, []);

  return (
    <div className="flex justify-center max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 gap-4 m-10">
        {Books.map((book) => (
          <>
            <div class="p-10">
              <div class=" w-full lg:max-w-full lg:flex">
                <div
                  class="h-48 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{ backgroundImage: `url(${book.ProductImage})` }}
                  title="ProductImage"
                ></div>
                <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="mb-8">
                    <div class="text-gray-900 font-bold text-xl mb-2">
                      {book.BookName}
                    </div>
                    <div class="text-gray-900 mb-2 font-semibold">
                      by {book.AuthorName}
                    </div>
                    <p class="text-gray-700 text-base">{book.Description}</p>
                    <p class="text-gray-700 text-base font-semibold">
                      Original Price: {book.OriginalPrice}৳
                    </p>
                    <p class="text-gray-700 text-base font-semibold">
                      Resell Price: {book.ResellPrice}৳
                    </p>
                    <p class="text-gray-700 text-base font-semibold">
                      Purchase Date: {book.PurchaseDate}
                    </p>
                  </div>
                  <div class="flex justify-between">
                    <div class="text-sm">
                      <p class="text-gray-900 text-xl leading-none font-semibold">
                        Seller Details
                      </p>
                      <p class="text-gray-900 text-lg leading-none">
                        {book.SellerName}
                      </p>
                      <p class="text-gray-900 leading-none">{book.Location}</p>
                      <p class="text-gray-900 leading-none">{book.Phone}</p>
                      <p class="text-gray-600">
                        Posted on {book?.Time.split("T")[1].split(":")[0]}.
                        {book?.Time.split("T")[1].split(":")[1]} ({" "}
                        {book?.Time.split("T")[0]})
                      </p>
                    </div>
                    <div>
                      <button className="btn">Book now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-5">
              <div className="cardImage col-span-1 border-r border-b border-l border-gray-400 lg:border-r-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 ">
                <img src={book.ProductImage} alt="ProductImage" />
              </div>
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 col-span-4">
                <div class="mb-8">
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    {book.BookName}
                  </div>
                  <div class="text-gray-900 mb-2 font-semibold">
                    by {book.AuthorName}
                  </div>
                  <p class="text-gray-700 text-base">{book.Description}</p>
                  <p class="text-gray-700 text-base font-semibold">
                    Original Price: {book.OriginalPrice}৳
                  </p>
                  <p class="text-gray-700 text-base font-semibold">
                    Resell Price: {book.ResellPrice}৳
                  </p>
                  <p class="text-gray-700 text-base font-semibold">
                    Purchase Date: {book.PurchaseDate}
                  </p>
                </div>
                <div class="flex justify-between">
                  <div class="text-sm">
                    <p class="text-gray-900 text-xl leading-none font-semibold">
                      Seller Details
                    </p>
                    <p class="text-gray-900 text-lg leading-none">
                      {book.SellerName}
                    </p>
                    <p class="text-gray-900 leading-none">{book.Location}</p>
                    <p class="text-gray-900 leading-none">{book.Phone}</p>
                    <p class="text-gray-600">
                      Posted on {book?.Time.split("T")[1].split(":")[0]}.
                      {book?.Time.split("T")[1].split(":")[1]} ({" "}
                      {book?.Time.split("T")[0]})
                    </p>
                  </div>
                  <div>
                    <button className="btn">Book now</button>
                  </div>
                </div>
              </div>
            </div> */}
          </>
        ))}
        <div className="grid grid-cols-5">
          <div className="cardImage col-span-4"></div>
          <div className="card details col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBooks;
