import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Shared/Loading/Loading";

const AllBuyers = () => {
  const { data: Users, isLoading } = useQuery({
    queryKey: ["Users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/AllBuyer");
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
                <button className="btn">Delete Buyer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
