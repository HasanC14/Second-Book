import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import swal from "sweetalert";
import Loading from "../Shared/Loading/Loading";
import { FaTrash } from "react-icons/fa";
const AllBuyers = () => {
  const [users, setusers] = useState([]);
  const {
    data: Users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Users"],
    queryFn: async () => {
      const res = await fetch("https://server-ten-theta.vercel.app/AllBuyer");
      const data = await res.json();
      setusers(data);
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  const HandleDelete = (id) => {
    swal({
      title: "Are you sure you want to delete the Buyer?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://server-ten-theta.vercel.app/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal({
                title: "Buyer Deleted",
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
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="overflow-x-auto">
        <p className="text-4xl font-bold mb-3">All Buyer</p>
        <table className="table w-full ">
          <thead>
            <tr>
              <th>Buyer ID</th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
