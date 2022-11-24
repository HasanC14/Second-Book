import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Shared/Loading/Loading";

const AllSellers = () => {
  const { data: Users, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/AllSeller");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Seller ID</th>
            <th>Seller Name</th>
            <th>Seller Email</th>
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
                <button className="btn">Delete Seller</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllSellers;
