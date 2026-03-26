import React from "react";

export const UserCard = ({ user }) => {
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
            <button className="btn btn-primary">Intersted</button>
            <button className="btn btn-secondary">Ignore</button>
          </div>
        </div>
      </div>
    </div>
  );
};
