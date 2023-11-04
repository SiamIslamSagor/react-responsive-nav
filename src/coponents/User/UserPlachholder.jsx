import React from "react";
import Skeleton from "react-loading-skeleton";

const UserPlachholder = () => {
  return (
    <div className="max-w-sm w-full h-full p-[20px] border rounded-md flex bg-blue-100">
      <div className="mb-4 profile mr-16">
        <Skeleton
          style={{ borderRadius: "50%" }}
          className="h-12  max-w-[50px]"
        ></Skeleton>
      </div>
      <div className="flex-1">
        <Skeleton className="h-6" count={4}></Skeleton>
      </div>
    </div>
  );
};

export default UserPlachholder;
