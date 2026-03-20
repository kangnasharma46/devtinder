import axios from "axios";
import { useState } from "react";

export const Login = () => {
  const [emailId, setEmailId] = useState("kangna@gmail.com");
  const [password, setPassword] = useState("Kangna@123");
  const btnLogin = () => {
    try {
      axios.post(
        "http://localhost:7777/login",
        { emailId, password },
        { withCredentials: true },
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="card bg-slate-200 w-96 shadow-sm">
        <div className="card-body w-full">
          <h2 className="card-title justify-center text-black">Login Card</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-black">
                Enter EmailId
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-black">
                Enter Password
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn bg-sky-600 w-40 text-white"
              onClick={btnLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
