import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Clients from "../pages/Clients";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import RouteGuard from "./RouteGuard";
import NotFound from "../pages/NotFound";
import Profiles from "../pages/Profiles";
import Setting from "../pages/Settings/Setting";
import Invoice from "../pages/Invoice/Invoice";
import Price from "../pages/Price/Price";
import Message from "../pages/Message/Message";
import List from "../pages/Projectlist/List";
import Task from "../pages/Tasks/Task";
import Detail from "../pages/Detail/Detail";
import Form from "../pages/Form";
import Data from "../pages/Data";
import Analytics from "../pages/Analytics";
import Social from "../pages/Social";
import { useSelector } from "react-redux";

const Path = () => {
  const sideSelector = useSelector((state) => state.side.side);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RouteGuard>
            <div
              className={`${
                sideSelector
                  ? " duration-500 sm:ml-[200px]"
                  : " duration-500 ml-0"
              }`}
            >
              <Dashboard />
            </div>
          </RouteGuard>
        }
      />
      {/* sm:ml-[200px] */}
      <Route
        path="/clients"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Clients />
          </div>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path={"*"} element={<NotFound />} />
      <Route
        path="/profiles"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Profiles />
          </div>
        }
      />
      <Route
        path="/social"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Social />
          </div>
        }
      />
      <Route
        path="/setting"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Setting />
          </div>
        }
      />
      <Route
        path="/invoice"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Invoice />
          </div>
        }
      />
      <Route
        path="/pricing"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Price />
          </div>
        }
      />
      <Route
        path="/task"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Task />
          </div>
        }
      />
      <Route
        path="/chat"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Message />
          </div>
        }
      />
      <Route
        path="/list"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <List />
          </div>
        }
      />
      <Route
        path="/detail"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Detail />
          </div>
        }
      />
      <Route
        path="/dataTable"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Data />
          </div>
        }
      />
      <Route
        path="/form"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Form />
          </div>
        }
      />
      <Route
        path="/analytics"
        element={
          <div
            className={`${
              sideSelector
                ? " duration-500 sm:ml-[200px]"
                : " duration-500 ml-0"
            }`}
          >
            <Analytics />
          </div>
        }
      />
    </Routes>
  );
};

export default Path;
