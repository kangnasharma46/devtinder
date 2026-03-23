import React from "react";

export const UserCard = (userData) => {
  //http://localhost:7777/request/send/intersted/69956c6b4978858bc7b5f298
  return (
    <div className="p-4 items-center flex justify-center ">
      <div className="card w-96 shadow-sm bg-indigo-100">
        <figure className="px-10 pt-10">
          <img
            src={userData?.user?.profilePic}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{userData?.user?.firstName}</h2>
          <p>{userData?.user?.bio}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Intersted</button>
            <button className="btn btn-secondary">Ignore</button>
          </div>
        </div>
      </div>
    </div>
  );
};
