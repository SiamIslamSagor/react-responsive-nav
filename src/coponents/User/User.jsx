import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./user.css";
import UserPlachholder from "./UserPlachholder";

const User = () => {
  const [info, setInfo] = useState([{}]);
  useEffect(() => {
    setTimeout(() => {
      //   fetch("https://jsonplaceholder.typicode.com/comments")
      //     .then(res => res.json())
      //     .then(data => setInfo(data));
    }, 1000);
  }, []);
  return (
    <div className=" container mx-auto">
      <p className="text-3xl font-bold"> Comments:{info.length}</p>
      <UserPlachholder></UserPlachholder>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {info.map(i => (
          <div className="bg-red-100 p-4 rounded-lg" key={i.id}>
            {/* <h1>{i.name || <Skeleton className="" />}</h1>
          {i.email || <Skeleton className="" count={3} />}{" "} */}
            <h2 className="text-xl font-medium">
              Name: {i.name || <Skeleton></Skeleton>}
            </h2>
            <p>Id: {i.id || <Skeleton></Skeleton>}</p>
            <p>Email: {i.email || <Skeleton></Skeleton>}</p>
            <p>Comment: {i.body || <Skeleton></Skeleton>}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
