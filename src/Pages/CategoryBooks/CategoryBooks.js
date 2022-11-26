import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import ProductCard from "../ProductCard/ProductCard";
import UseSeller from "../RouteAssets/UseSeller";

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
            <ProductCard key={book._id} book={book}></ProductCard>
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
