import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import DomainManager from "views/admin/domainManager";
import Profile from "views/admin/profile";
import Developer from "views/admin/developer";
import Home from "views/home/Home.jsx";
// import Home from "./layouts/home/index.jsx";

// Auth Imports
// import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdPerson,
  // MdLock,
  MdDomain,
  MdPeopleAlt 
} from "react-icons/md";
// import { layout } from "@chakra-ui/system";

const routes = [
  {
    layout:"/home",
    path:"home",
    component: <Home/>
  },
  
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
 
  {
    name: " Domain & Manager",
    layout: "/admin",
    path: "domain-manager",
    icon: <MdDomain  className="h-6 w-6" />,
    component: <DomainManager />,
    secondary: true,
  },
  {
    name: "Developers",
    layout: "/admin",
    icon: <MdPeopleAlt  className="h-6 w-6" />,
    path: "developer",
    component: <Developer />,
  },
  
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },

  
  
];
export default routes;
