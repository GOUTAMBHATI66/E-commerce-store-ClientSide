import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/LLLL.jpg";
import { Context } from "@/utils/context";
import { toast } from "sonner";

const SignIn = () => {
  const navigate = useNavigate();
  const { onSingIn, setSelected } = useContext(Context);
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const handleOnsingIn = (e) => {
    e.preventDefault();
    onSingIn(userEmail, userPass).then(
      (res) => {
        console.log(res.data.user);
        console.log(res.data.jwt);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("jwt", res.data.jwt);
        toast("Welcome! in our store");
        navigate("/");
        setSelected(null);
      },
      (e) => {
        toast("Invalid Username or Password");
        setUserEmail("");
        setUserPass("");
      }
    );
  };

  // handling that if user exists than he can not access the signIn or signUp page
  useEffect(() => {
    const isJWT = localStorage.getItem("jwt") ? true : false;
    // console.log(isJWT);
    if (isJWT) {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-full h-full z-40 bg-white top-0 left-0 fixed flex items-center justify-center  ">
      <div className="flex flex-col gap-1 items-center justify-center px-10 py-6  rounded-xl sm:bg-gray-200 bg-white">
        <img src={logo} className=" w-[150px] h-[150px] rounded-lg" />
        <p className=" text-2xl font-semibold text-black">Sign In to Account</p>
        <p className=" text-black max-[400px]:text-center">
          Enter your Email and Password to Sign In
        </p>

        <form
          onSubmit={handleOnsingIn}
          className="flex flex-col my-8 gap-5 w-full"
        >
          <input
            type="text"
            value={userEmail}
            className=" outline-none text-black border border-black/30 p-2 rounded-lg"
            placeholder="Email or Username"
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
            onClick={(e) => handleOnsingIn(e)}
            disabled={!(userEmail && userPass)}
            className=" disabled:bg-blue-300 bg-blue-800 p-2 rounded-lg text-white font-semibold text-lg"
          >
            Sign In
          </button>
        </form>

        <span className="text-black">
          Don't have an account?
          <Link
            to={"/sign-up"}
            className=" text-brandBlue font-semibold pl-2 max-[500px]:block max-[500px]:pl-0"
          >
            Click here to create a new account
          </Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default SignIn;
