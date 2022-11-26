import React, { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider";

const BookingModal = ({ product }) => {
  const { User } = useContext(AuthContext);
  const date = String(new Date());

  const HandleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const location = form.location.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const Order = {
      BuyerName: User?.displayName,
      BuyerEmail: User?.email,
      ProductName: product.BookName,
      price: product.ResellPrice,
      Address: location,
      phone,
      date,
      SellerEmail: product.SellerEmail,
    };
    fetch("http://localhost:5000/placeorder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal({
            icon: "success",
            title: "Order Confirmed",
            button: "OK",
          });
          fetch(`http://localhost:5000/product/booked/${product._id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
          }).then((res) => res.json());
          form.reset();
        } else {
          swal({
            title: `${data.message}`,
            button: "OK",
          });
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{product.BookName}</h3>
          <h3 className="text-md font-semibold">
            Price- {product.ResellPrice}৳
          </h3>
          <form
            className="grid grid-cols-1 gap-4 mt-5 "
            onSubmit={HandleSubmit}
          >
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              defaultValue={User?.displayName}
              readOnly
            />
            <input
              type="text"
              name="email"
              className="input input-bordered w-full"
              defaultValue={User?.email}
              readOnly
            />
            <input
              type="text"
              name="date"
              className="input input-bordered w-full"
              defaultValue={date.substring(0, 16)}
              readOnly
            />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full"
              name="phone"
            />
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered w-full"
              name="location"
            />
            <button type="submit" className="btn ">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
