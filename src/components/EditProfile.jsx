import React, { useState } from "react";
import { UserCard } from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utlis/Constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/userSlice";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

export const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [profilePic, setProfilePic] = useState(user?.profilePic);
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [about, setAbout] = useState(user?.About || "");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          About: about,
        },
        { withCredentials: true },
      );

      dispatch(addUser(res?.data.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex flex-1 justify-center items-center">
        <div className="card bg-slate-200 w-96 shadow-sm">
          <div className="card-body w-full">
            <h2 className="card-title justify-center text-black">
              Edit Profile
            </h2>
            <div>
              {/* First Name */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-black">
                  First Name
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type here"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </fieldset>

              {/* Last Name */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-black">
                  Last Name
                </legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type here"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </fieldset>

              {/* Age*/}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-black"> Age</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type here"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </fieldset>

              {/* Profile Pic*/}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-black">PhotoUrl</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type here"
                  value={profilePic}
                  onChange={(e) => setProfilePic(e.target.value)}
                />
              </fieldset>

              {/* Gender*/}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-black">Gender</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type here"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </fieldset>

              {/* About*/}
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-black">About</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Type here"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </fieldset>
            </div>
            <p className="text-red-500">{error}</p>
            <div className="card-actions justify-center">
              <button
                className="btn bg-sky-600 w-40 text-white"
                onClick={saveProfile}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <UserCard user={user} />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};
