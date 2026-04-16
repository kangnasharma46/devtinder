import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utlis/Constants";
import { UserCard } from "./UserCard";
import { addFeed } from "../utlis/FeedSlice";
import { useDispatch, useSelector } from "react-redux";

export const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "user/feed?limit=10&page=1", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.users));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (feedData?.length <= 0)
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;

  return (
    feedData && (
      <div className="flex justify-center my-10">
        <UserCard user={feedData[1]} />
      </div>
    )
  );
};
