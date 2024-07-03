import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "routes";


function index() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/home") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <div className=" relative float-right h-full min-h-screen w-full bg-lightPrimary dark:!bg-navy-900">
        <div className=" ">
          <Routes>
            {getRoutes(routes)}
            <Route path="/" element={<Navigate to="/home/home" replace />} />
          </Routes>
        </div>
        
      </div>
      
    </>
  );
}

export default index;
