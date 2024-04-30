import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/LLLL.jpg";
import { Context } from "../utils/context";
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();
  const { registerUser, setSelected } = useContext(Context);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  useEffect(() => {
    const isJWT = localStorage.getItem("jwt") ? true : false;
    if (isJWT) {
      navigate("/");
    }
  }, []);

  const createAnAccount = (e) => {
    e.preventDefault();

    registerUser(userName, userEmail, userPass).then(
      (res) => {
        console.log(res.data.user);
        console.log(res.data.jwt);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("jwt", res.data.jwt);
        toast("Your Account Created Succussfully");
        navigate("/");
        setSelected(null);
      },
      (e) => {
        toast("Error while creating account.");
        setUserName("");
        setUserEmail("");
        setUserPass("");
      }
    );
  };

  return (
    <div className="w-full h-full z-40 bg-white top-0 left-0 fixed flex items-center justify-center  ">
      <div className="flex flex-col gap-1 items-center justify-center px-10 py-6  rounded-xl sm:bg-gray-200 bg-white">
        <img src={logo} className=" w-[150px] h-[150px] rounded-lg" />
        <p className=" text-2xl text-black font-semibold">Create An Account</p>
        <p className=" text-black max-[400px]:text-center">
          Enter your Email and Password to Join us
        </p>

        <form
          onSubmit={createAnAccount}
          className="flex flex-col my-6 gap-4 w-full"
        >
          <input
            type="text"
            value={userName}
            className=" outline-none text-black border border-black/30 p-2 rounded-lg"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="text"
            value={userEmail}
            className=" outline-none text-black border border-black/30 p-2 rounded-lg"
            placeholder="name@example.com"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="password"
            value={userPass}
            className=" outline-none text-black p-2 rounded-lg border border-black/30 "
            placeholder="Password"
            onChange={(e) => setUserPass(e.target.value)}
          />
          <button
            onClick={(e) => createAnAccount(e)}
            disabled={!(userName && userEmail && userPass)}
            className="   p-2 rounded-lg disabled:bg-blue-300 bg-blue-800 text-white font-semibold text-lg"
          >
            Sign Up
          </button>
        </form>

        <span className="text-black">
          Already have an account?
          <Link
            to={"/sign-in"}
            className=" text-brandBlue font-semibold pl-2 max-[500px]:block max-[500px]:pl-0"
          >
            Click here to Sign In
          </Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default SignUp;
