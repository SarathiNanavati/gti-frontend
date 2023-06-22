import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { BsDashLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useRouter } from "../hooks/useRouter";

type LeftSideBarProps = {};

const LeftSideBar = (props: LeftSideBarProps) => {
  const [links, setLinks] = useState([
    { id: 0, title: "Dashboard", iconName: "", link: "/" },
    { id: 1, title: "Orders", iconName: "", link: "/under-construction" },
    { id: 2, title: "Tables", iconName: "", link: "/under-construction" },
    { id: 3, title: "Reservation", iconName: "", link: "/under-construction" },
    { id: 4, title: "Waiting", iconName: "", link: "/under-construction" },
    { id: 5, title: "Cashier", iconName: "", link: "/under-construction" },
    { id: 6, title: "Refund", iconName: "", link: "/under-construction" },
    { id: 7, title: "Kitchen", iconName: "", link: "/under-construction" },
    { id: 8, title: "Reports", iconName: "", link: "/under-construction" },
    { id: 9, title: "Comments", iconName: "", link: "/under-construction" },
    { id: 10, title: "Feedback", iconName: "", link: "/under-construction" },
    { id: 11, title: "Coupons & promotions", iconName: "", link: "/under-construction" },
    { id: 12, title: "Menu", iconName: "", link: "/under-construction" },
    { id: 13, title: "Employees", iconName: "", link: "/under-construction" },
    { id: 14, title: "QR's", iconName: "", link: "/under-construction" },
    { id: 15, title: "Settings", iconName: "", link: "/under-construction" },
    { id: 16, title: "Generals", iconName: "", link: "/under-construction", subMenu: true },
    { id: 17, title: "Branches", iconName: "", link: "/branches", subMenu: true },
    { id: 18, title: "Payments & Integration", iconName: "", link: "/payments", subMenu: true },
    { id: 19, title: "Design", iconName: "", link: "/under-construction", subMenu: true },
    { id: 20, title: "Sign out", iconName: "", link: "/under-construction" },
  ]);

  const router = useRouter();

  return (
    <div className='bg-white flex items-start justify-center w-full h-full rounded-lg'>
      <div className='flex flex-col my-3 w-full'>
        {links.map((link) => {
          return (
            <Link key={link.id} to={link.link}>
              <div
                className={`text-sm text-gray-500 flex flex-row items-center justify-start w-full p-1 ml-7
                ${link.link == router.pathname ? `text-red-500` : ""}
                `}>
                {link.subMenu ? <BsDashLg /> : <FiSettings />}
                <div className='inline-block ml-3'>{link.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSideBar;
