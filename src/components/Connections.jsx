import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utlis/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utlis/ConnectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connectionData = useSelector((store) => store.connection);

  const getConnections = async () => {
    const res = await axios.get(BASE_URL + "user/connections", {
      withCredentials: true,
    });
    console.log(res?.data);
    dispatch(addConnection(res?.data?.data));
  };

  useEffect(() => {
    getConnections();
  }, []);

  return (
    <div className="mx-10">
      <h1 className="flex justify-center text-xl text-blue-600 my-4">
        Connections
      </h1>
      {connectionData?.map((connection) => {
        return (
          <div className="flex m-4 p-4 rounded-lg bg-base-200 w-1/2 mx-auto">
            <img
              src={connection?.profilePic}
              className="w-20 h-20 rounded-full object-cover"
              alt="profilepic"
            />
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {connection?.firstName + " " + connection?.lastName}
              </h2>
              {connection?.age && connection?.gender && (
                <p>{connection?.age + ", " + connection?.gender}</p>
              )}
              <p>{connection?.About}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
