import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import DomainManager from "views/admin/domainManager";
import Profile from "views/admin/profile";
import Developer from "views/admin/developer";
import Home from "views/home/Home.jsx";


// Icon Imports
import {
  MdHome,
  MdPerson,
  // MdDashboard,
  MdDomain,
  MdPeopleAlt 
} from "react-icons/md";

const routes = [
  {
    layout:"/home",
    path:"home",
    component: <Home/>
  },
 

  
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "home",
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
 
 
 
  
  
];
export default routes;
