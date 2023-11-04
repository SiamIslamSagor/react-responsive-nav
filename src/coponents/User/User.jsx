import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./user.css";
import UserPlachholder from "./UserPlachholder";

const User = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => {
        setInfo(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className=" container mx-auto">
      <p className="text-3xl font-bold"> Comments:{info.length}</p>
      {/* <UserPlachholder></UserPlachholder> */}
      {loading && <p>loading...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {loading && <UserPlachholder howMany={50}></UserPlachholder>}
        {loading && <UserPlachholder howMany={50}></UserPlachholder>}
        {loading && <UserPlachholder howMany={50}></UserPlachholder>}
        {loading && <UserPlachholder howMany={50}></UserPlachholder>}
        {info.map(i => (
          <div className="space-y-4 bg-red-100 p-4 rounded-lg" key={i.id}>
            <h1 className="text-xl font-bold">Name: {i.name}</h1>
            <p>email: {i.email} </p>
            <p>comment: {i.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
