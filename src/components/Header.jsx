import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { TiArrowSortedDown } from "react-icons/ti";
import { useSelector } from "react-redux";

function Header() {
  const { userEmail } = useSelector((store) => store.todos);
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Hesabınızdan çıkış yapıldı");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Lütfen tekrar deneyiniz");
      });
  };
  return (
    <header className="py-5 header-wrapper ">
      <h1 className="logo text-3xl md:text-5xl tracking-wider font-bold">
        ToDoS
      </h1>
      <form className="bg-gray-200 rounded-md form flex justify-between max-md:mt-3">
        <input className="bg-transparent px-3 py-1 outline-none" type="text" />
        <button className="px-3 py-1 border-l border-gray-500 rounded-r-md ">
          Search
        </button>
      </form>
      <div className="profile relative group">
        <div className="flex justify-center items-center gap-1">
          <p className="text-xs">{userEmail}</p>
          <button>
            <TiArrowSortedDown />
          </button>
        </div>
        <div className="absolute invisible group-hover:visible  top-full left-0 right-0 transition-visible  pt-1 bg-white">
          <button className="border border-gray-400 w-full" onClick={logout}>
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

//  <button
// className=" bg-gray-300 hover:bg-gray-200 md:w-full rounded-md font-semibold flex items-center justify-center transition text-nowrap "
// onClick={logout}
// >
// <span className={`${!show ? "hidden" : "p-1"}`}>Log out</span>{" "}
// <LuLogOut className="p-1 text-3xl " />
// </button>
