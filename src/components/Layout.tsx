import React from "react";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <div className='container mx-auto bg-[#f4f4f4] max-w-7xl'>
      <div className='flex flex-row items-center justify-center flex-wrap w-full '>
        <Header />
        <div className='flex w-full h-screen'>
          <div className='basis-1/4 mx-4 mb-4'>
            <LeftSideBar />
          </div>
          <div className='basis-3/4 mr-4 mb-4'>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
