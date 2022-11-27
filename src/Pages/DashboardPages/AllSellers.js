import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { FaTrash } from "react-icons/fa";
import Loading from "../Shared/Loading/Loading";

const AllSellers = () => {
  const [users, setusers] = useState([]);

  const {
    data: Users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/AllSeller");
      const data = await res.json();
      setusers(data);
      return data;
    },
  });
  const HandleDelete = (id) => {
    swal({
      title: "Are you sure you want to delete the Seller?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal({
                title: "Seller Deleted",
                button: "OK",
              });
              const RemainingUser = users.filter((user) => user._id !== id);
              setusers(RemainingUser);
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
  const HandleVerify = (id) => {
    swal({
      title: "Are you sure you want to Verify this Seller?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willVerify) => {
      if (willVerify) {
        fetch(`http://localhost:5000/seller/verify/${id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            swal({
              title: "Seller Verified",
              button: "OK",
            });
            refetch();
          });
      } else {
        swal({
          icon: "success",
          title: "Verification Canceled",
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
        <p className="text-4xl font-bold mb-3">All Sellers</p>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Seller ID</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user) => (
              <tr>
                <th>{user._id}</th>
                <td>{user.Username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => HandleDelete(user._id)}
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
                {user?.Verify ? (
                  <td>
                    <button
                      className="btn"
                      disabled
                      onClick={() => HandleVerify(user._id)}
                    >
                      Seller Already Verified
                    </button>
                  </td>
                ) : (
                  <td>
                    <button
                      className="btn"
                      onClick={() => HandleVerify(user._id)}
                    >
                      Verify Seller
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllSellers;
