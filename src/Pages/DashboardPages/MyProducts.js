import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../Shared/Loading/Loading";

const MyProducts = () => {
  const { User } = useContext(AuthContext);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/SellerProducts/?email=${User?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(products);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Posted on</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <th>{product._id}</th>
              <td>{product.BookName}</td>
              <td>
                {product?.Time.split("T")[1].split(":")[0]}.
                {product?.Time.split("T")[1].split(":")[1]} ({" "}
                {product?.Time.split("T")[0]})
              </td>
              <td>
                <button className="btn">Advertise</button>
              </td>
              <td>
                <button className="btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
