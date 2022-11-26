import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseCard from "../AdvertiseCard/AdvertiseCard";

import Loading from "../Shared/Loading/Loading";

const Advertisement = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertisement");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (products.length !== null) {
    return (
      <div className="flex justify-center mb-10">
        <AdvertiseCard products={products}></AdvertiseCard>
      </div>
    );
  } else {
    return "";
  }
};

export default Advertisement;
