import { useQuery } from "@tanstack/react-query";
import React from "react";
import swal from "sweetalert";
import Loading from "../Shared/Loading/Loading";
import { FaTrash } from "react-icons/fa";
const ReportedItems = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`https://server-ten-theta.vercel.app/reported`);
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
        fetch(`https://server-ten-theta.vercel.app/product/${id}`, {
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
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="overflow-x-auto">
        <p className="text-4xl font-bold mb-3">Reported Items</p>
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
export default ReportedItems;
