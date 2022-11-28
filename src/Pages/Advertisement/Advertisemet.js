import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseCard from "../AdvertiseCard/AdvertiseCard";

import Loading from "../Shared/Loading/Loading";

const Advertisement = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://server-ten-theta.vercel.app/advertisement"
      );
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 lg:ml-0 ml-8">
          {products.map((product) => (
            <AdvertiseCard product={product}></AdvertiseCard>
          ))}
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default Advertisement;
