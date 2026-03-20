import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utlis/Constants";
import { removeUser } from "../utlis/userSlice";

export const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    axios.post(BASE_URL + "logout", { withCredentials: true });
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <div class="navbar shadow-sm bg-sky-600">
      <div class="flex-1">
        <Link to="/" class="btn btn-ghost text-xl text-slate-100">
          GitMatch
        </Link>
      </div>
      {user && (
        <div class="flex gap-2">
          <p className="text-white">welcome!! {user.firstName}</p>
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.profilePic}
                />
              </div>
            </div>
            <ul
              tabindex="-1"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
