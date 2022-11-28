import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../Shared/Loading/Loading";

const MyOrders = () => {
  const { User } = useContext(AuthContext);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/BuyerOrders/?email=${User?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="overflow-x-auto">
        <p className="text-4xl font-bold mb-3">My Orders</p>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Booked on</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product?._id}>
                <th>{product?._id}</th>
                <td>{product?.ProductName}</td>
                <td>{product?.date}</td>
                <td>
                  {product?.Paid === "true" ? (
                    <button className="btn" disabled>
                      Paid
                    </button>
                  ) : (
                    <Link to={`/Dashboard/Payment/${product?._id}`}>
                      <button className="btn">Pay now</button>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
