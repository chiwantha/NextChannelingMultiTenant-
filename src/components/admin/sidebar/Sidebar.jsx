"use client";
import { RiDashboardFill } from "react-icons/ri";
import { HiDocumentText } from "react-icons/hi";
import { FaTrashAlt, FaStethoscope, FaHospitalAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { MdEventNote, MdAssessment } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { PiNetworkFill } from "react-icons/pi";
import { useSidebar } from "@/context/SidebarContext";
import { signOut } from "next-auth/react";

import SidebarItem from "./sidebarItem/SidebarItem";

const sideBar = [
  {
    title: "Pannel",
    link: "/admin/pannels",
    icon: <GoHomeFill />,
  },
  {
    title: "Dashboard",
    link: "/admin",
    icon: <RiDashboardFill />,
  },
  {
    title: "Channeling",
    submenu: [
      {
        title: "Appointments",
        link: "/admin/appointments",
        icon: <MdEventNote />,
      },
      {
        title: "Removed",
        link: "/admin/removed",
        icon: <FaTrashAlt />,
      },
      {
        title: "Doctors",
        link: "/admin/appointments",
        icon: <MdEventNote />,
      },
    ],
  },
  {
    title: "Reports",
    submenu: [
      {
        title: "Appointments",
        link: "/admin/appointments",
        icon: <MdAssessment />,
      },
      {
        title: "Financial",
        link: "/admin/appointments",
        icon: <HiDocumentText />,
      },
    ],
  },
  {
    title: "Settings",
    link: "/admin/settings",
    icon: <FiSettings />,
  },
  {
    title: "Master",
    submenu: [
      {
        title: "Assignments",
        link: "/admin/assignments",
        icon: <PiNetworkFill />,
      },
      {
        title: "Doctors",
        link: "/admin/doctors",
        icon: <FaUserDoctor />,
      },
      {
        title: "Hospitals",
        link: "/admin/hospitals",
        icon: <FaHospitalAlt />,
      },
    ],
  },
  {
    title: "Portal",
    link: "/",
    icon: <FaStethoscope />,
  },
];

const AdminSidebar = ({ name, role }) => {
  const currentUser = {
    role: role || 1,
    name: name || "Admin",
  };

  const { isSidebarOpen } = useSidebar();
  return (
    <div
      className={`${
        isSidebarOpen ? "translate-x-0" : "-translate-x-80 sm:translate-x-0"
      }
     transition-transform duration-300 overflow-x-hidden
     no-scrollbar h-[calc(100vh-105px)] overflow-y-auto
     sm:top-[77px] top-0
     rounded-lg  sm:sticky sm:bg-transparent`}
    >
      <div className={`flex flex-col gap-4 z-50 `}>
        {/* top part */}
        <div className="rounded-lg bg-[#0463DF] p-4 space-y-4 flex flex-col justify-center items-center">
          <img
            src={"/doctors/default.png"}
            className="rounded-full aspect-square"
            width={100}
            height={100}
            alt="admin.png"
          />
          <div className="flex flex-col">
            <span className="text-center uppercase text-sm text-white font-semibold">
              {currentUser ? currentUser.name : "User Name"}
            </span>
            <span className="text-center uppercase text-xs text-slate-300 ">
              {currentUser
                ? currentUser.role == 1
                  ? "Admin"
                  : "Management"
                : "User Role"}
            </span>
          </div>
        </div>
        {/* sidebarlinks */}
        <div
          className={`sm:bg-slate-100 bg-slate-200 border sm:border-none rounded-lg text-[#0463DF]
        flex flex-col overflow-hidden
        
      `}
        >
          {sideBar.map((item, index) => (
            <SidebarItem
              key={index}
              title={item.title}
              link={item.link || `/`}
              icon={item.icon}
              submenu={item.submenu}
              color={item.bg ? item.bg : false}
            />
          ))}
        </div>
        <div onClick={() => signOut({ callbackUrl: "/auth/adm-login" })}>
          <SidebarItem
            color={`bg-red-500 hover:bg-red-400 text-white rounded-lg
              cursor-default`}
            title={"Log Out"}
            icon={<BiLogOut />}
          />
        </div>
        {/* bottom part */}
        <div className="rounded-lg bg-[#0463DF] p-4 space-y-4">
          <p className="text-sm text-slate-200">
            This is a beta version of the Admin Panel for the Channeling
            Management Portal
          </p>
          <div className="flex flex-col">
            <span className="text-slate-300">Developed By</span>
            <span className="text-[#00C950] font-bold">K-Chord (Pvt) Ltd</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
