import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utlis/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utlis/RequestSlice";
import { removeConnection } from "../utlis/ConnectionSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requestData = useSelector((store) => store.request);

  const getRequest = async () => {
    const res = await axios.get(BASE_URL + "user/requests/received", {
      withCredentials: true,
    });
    dispatch(addRequest(res?.data?.data));
    console.log(res.data.data);
  };

  useEffect(() => {
    getRequest();
  }, []);
  //
  const reviewRequest = async (status, id) => {
    try {
      const res = await axios.post(
        BASE_URL + "request/review/" + status + "/" + id,
        {
          withCredentials: true,
        },
      );
      console.log(res.data);
      dispatch(removeConnection(id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className="mx-10">
      <h1 className="flex justify-center text-xl text-blue-600 my-4">
        Request Received
      </h1>
      {requestData?.map((connection) => {
        const { _id, firstName, lastName, profilePic, age, gender, About } =
          connection.fromUserId;
        return (
          <div className="flex m-4 p-4 rounded-lg bg-base-200 w-1/2 mx-auto">
            <img
              src={profilePic}
              className="w-20 h-20 rounded-full object-cover"
              alt="profilepic"
            />
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{About}</p>
              <div>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => reviewRequest("rejected", connection?._id)}
                >
                  Reject
                </button>
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => reviewRequest("accepted", connection?._id)}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
