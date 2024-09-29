import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [pasword, setPasword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      createUserWithEmailAndPassword(auth, email, pasword)
        .then(() => {
          toast.success("Başarı ile kayıt olundu");
          navigate("/home");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, pasword)
        .then(() => {
          toast.success("Hesaba başarı ile girildi");
          navigate("/home");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      navigate("/home");
      toast.success("Hesaba giriş yaptınız");
    });
  };

  return (
    <section className=" grid place-items-center min-h-screen bg-black">
      <div className="bg-gray-800 text-white p-10 rounded-lg w-[90vw] max-w-[500px]">
        <div className="flex justify-center">
          <h2 className="text-center text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block  text-transparent bg-clip-text">
            ToDoS
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label htmlFor="email">Email</label>
          <input
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-2 outline-none text-black rounded-md"
            type="email"
          />
          <label htmlFor="password">Password</label>
          <input
            defaultValue={pasword}
            onChange={(e) => setPasword(e.target.value)}
            className="py-3 px-2 outline-none text-black rounded-md"
            type="password"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-12 py-3 rounded-md hover:bg-blue-500 mt-2"
          >
            {isLogin ? "Log in" : "Sign Up"}
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="flex -my-1"
          >
            <span className=" text-blue-500 me-2">
              {isLogin ? "Sign up" : "Log in"}
            </span>
            <p className="">or continue with Google</p>
          </button>
        </form>

        <button
          onClick={handleGoogle}
          className="flex gap-4 items-center  rounded border border-gray-700 bg-white px-12 py-2 shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform text-xl text-black mt-4 w-full justify-center"
        >
          <FcGoogle className="text-2xl" />
          Goggle
        </button>
      </div>
    </section>
  );
};

export default Auth;
