import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../Shared/Loading/Loading";
import { FaTrash } from "react-icons/fa";
const MyProducts = () => {
  const { User } = useContext(AuthContext);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/SellerProducts/?email=${User?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  const HandleDelete = (id) => {
    swal({
      title: "Are you sure you want to delete the Product?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal({
                title: "Product Deleted",
                button: "OK",
              });
              refetch();
            }
          });
      } else {
        swal({
          title: "Delete Canceled",
          button: "OK",
        });
      }
    });
  };
  const HandleAdvertise = (id) => {
    swal({
      title: "Are you sure you want to Advertise this product?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willVerify) => {
      if (willVerify) {
        fetch(`http://localhost:5000/product/ad/${id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            swal({
              title: "Product Advertise",
              button: "OK",
            });
            refetch();
          });
      } else {
        swal({
          icon: "success",
          title: "Advertise Canceled",
          button: "OK",
        });
      }
    });
  };
  const HandleCancelAdvertise = (id) => {
    swal({
      title: "Are you sure you want to Cancel the Advertisement?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willVerify) => {
      if (willVerify) {
        fetch(`http://localhost:5000/product/adcancel/${id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            swal({
              icon: "success",
              title: "Advertisement Canceled",
              button: "OK",
            });
            refetch();
          });
      } else {
        swal({
          icon: "success",
          title: "Canceled",
          button: "OK",
        });
      }
    });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="overflow-x-auto">
        <p className="text-4xl font-bold mb-3">My Products</p>
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
                {product?.advertise === "true" ? (
                  <td>
                    <button
                      className="btn"
                      onClick={() => HandleCancelAdvertise(product._id)}
                    >
                      Cancel Advertise
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      className="btn"
                      onClick={() => HandleAdvertise(product._id)}
                    >
                      Advertise
                    </button>
                  </td>
                )}
                <td>
                  <button
                    className="btn"
                    onClick={() => HandleDelete(product._id)}
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
