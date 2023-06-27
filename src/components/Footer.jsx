import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [key, setKey] = useState();
  const authToken = useSelector((state) => state.authSlice.token);
  const sideSelector = useSelector((state) => state.side.side);
  const { pathReaction } = useSelector((state) => state.forPath);

  const token = Cookies.get("token");
  const path = useLocation();

  useEffect(() => {
    setKey(authToken);
    console.log(key);
  }, [authToken]);

  return (
    <div
      className={`${
        token &&
        path.pathname !== "/signin" &&
        pathReaction === false &&
        path.pathname !== "/signup"
          ? `footer ${ sideSelector ? " duration-500 sm:ml-[200px]" : " duration-500 ml-0" }  text-[13px] lg:text-[15px] h-[80px] max-h-[80px] z-10 md:max-h-[50.45px] mt-auto left-auto bottom-0 bg-white text-slate-400 shadow`
          : " hidden"
      } ${
        path.pathname === "/signin" || (path.pathname === "/signup" && "hidden")
      }`}
    >
      <div className=" flex flex-row items-center justify-between">
        <div>
          <ul className=" list-none flex flex-row flex-wrap items-center gap-3">
            <li>Support</li>
            <li>Help Center</li>
            <li>Privacy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="w-20"></div>
        <div>@2023 - AppStack</div>
      </div>
    </div>
  );
};

export default Footer;
