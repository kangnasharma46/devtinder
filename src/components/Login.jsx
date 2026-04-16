import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utlis/Constants";
import { addUser } from "../utlis/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [emailId, setEmailId] = useState("kangna@gmail.com");
  const [password, setPassword] = useState("Kangna@123");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

  const btnLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "login",
        { emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "signup",
        { firstName, lastName, emailId, password, age, mobileNumber },
        { withCredentials: true },
      );
      dispatch(addUser(res.data.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="card bg-slate-200 w-96 shadow-sm">
        <div className="card-body w-full">
          <h2 className="card-title justify-center text-black">
            {isLoginForm ? "Login Card" : "Signup Card"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-black">
                    Enter First Name
                  </legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Type here"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-black">
                    Enter Last Name
                  </legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Type here"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-black">
                    Enter Age
                  </legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Type here"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-black">
                    Enter mobileNumber
                  </legend>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Type here"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </fieldset>
              </>
            )}
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
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button
              className="btn bg-sky-600 w-40 text-white"
              onClick={isLoginForm ? btnLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "Signup"}
            </button>
          </div>

          <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};
