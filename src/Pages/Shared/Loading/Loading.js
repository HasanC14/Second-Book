import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin dark:border-gray-800"></div>
      </div>
    </div>
  );
};

export default Loading;
