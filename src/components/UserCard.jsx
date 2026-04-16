import React from "react";
import { BASE_URL } from "../utlis/Constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utlis/FeedSlice";

export const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const handleFeedRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      console.log(res);
      dispatch(removeFeed(userId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-4 items-center flex justify-center ">
      <div className="card w-96 shadow-sm bg-indigo-100">
        <figure className="px-10 pt-10">
          <img src={user?.profilePic} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.firstName}</h2>
          <p>{user?.emailId}</p>
          <div className="card-actions">
            <button
              className="btn btn-primary"
              onClick={() => handleFeedRequest("intersted", user?._id)}
            >
              Intersted
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleFeedRequest("ignored", user?._id)}
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
