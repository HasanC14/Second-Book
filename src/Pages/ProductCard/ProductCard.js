import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BookingModal from "../BookingModal/BookingModal";
import { FaCheckCircle } from "react-icons/fa";
import swal from "sweetalert";
import UseSeller from "../RouteAssets/UseSeller";
const ProductCard = ({ book }) => {
  const [product, setProduct] = useState({});
  const [Seller, setSeller] = useState([]);
  const { User } = useContext(AuthContext);
  const [isSeller] = UseSeller(User?.email);
  useEffect(() => {
    fetch(`http://localhost:5000/seller/?email=${book?.SellerEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setSeller(data);
      });
  }, [book?.SellerEmail]);
  const HandleReport = (id) => {
    swal({
      title: "Are you sure you want to Report this product?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willVerify) => {
      if (willVerify) {
        fetch(`http://localhost:5000/product/Report/${id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            swal({
              title: "Product Reported",
              button: "OK",
            });
          });
      } else {
        swal({
          icon: "success",
          title: "Report Canceled",
          button: "OK",
        });
      }
    });
  };
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
              <p className="text-gray-900 text-xl leading-none font-bold">
                Seller Details
              </p>
              <p className="text-gray-900 text-lg leading-none font-semibold">
                {book.SellerName}
              </p>
              {Seller?.Verify === "true" ? (
                <p className="text-md">
                  Verified Seller
                  <FaCheckCircle></FaCheckCircle>
                </p>
              ) : (
                ""
              )}
              <p className="text-gray-900 leading-none">{book.Location}</p>
              <p className="text-gray-900 leading-none">{book.Phone}</p>
              <p className="text-gray-600">
                Posted on {book?.Time.split("T")[1].split(":")[0]}.
                {book?.Time.split("T")[1].split(":")[1]} ({" "}
                {book?.Time.split("T")[0]})
              </p>
            </div>
            {isSeller ? (
              ""
            ) : (
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
                <div className="mt-3">
                  <button
                    className="btn"
                    onClick={() => HandleReport(book._id)}
                  >
                    Report to admin
                  </button>
                </div>

                <BookingModal product={product}></BookingModal>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
