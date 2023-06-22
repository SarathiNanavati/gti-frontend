import { BiBell } from "react-icons/bi";
import HeaderSearchBox from "./ui/HeaderSearchBox";

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return (
    <div className='flex w-full h-[100px]'>
      <div className='basis-1/4 m-4'>
        <div className='bg-white flex items-center justify-center w-full h-full rounded-lg'>
          Logo
        </div>
      </div>
      <div className='basis-3/4 mr-4 my-4'>
        <div className='bg-white flex items-center justify-between w-full h-full rounded-lg'>
          <div className='flex flex-col ml-4'>
            <div className='text-lg font-bold'>Welcome Back,</div>
            <div className='text-xs'>
              You have <span className='text-red-500'>9 orders</span> to complete
            </div>
          </div>
          <div className='flex flex-row mr-4 items-center h-full'>
            <HeaderSearchBox />
            <p className='text-lg px-4'>
              <BiBell />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
