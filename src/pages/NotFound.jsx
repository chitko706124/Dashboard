import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggle } from "../redux/sideSlice";

const NotFound = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggle());
  }, []);

  return (
    <div style={{ backgroundColor: "#f7f9fc" }}>
      <div className=" flex flex-col ">
        <Link className=" text-center mt-3 " to={"/"}>
          <button className="px-[100px] py-[20px] text-md rounded inline-flex bg-sky-500 hover:bg-sky-600 text-white ">
            Return to Website
          </button>
        </Link>
        <img className=" h-[90vh] " src={"/404.svg"} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
