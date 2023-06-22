import { BsSearch } from "react-icons/bs";

type HeaderSearchBoxProps = {};

const HeaderSearchBox = (props: HeaderSearchBoxProps) => {
  return (
    <div className='flex'>
      <label className='relative block pr-5 '>
        <span className='sr-only'>Search</span>
        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <BsSearch />
        </span>
        <input
          className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 
          rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-300 focus:ring-gray-300 
            focus:ring-1 sm:text-sm mr-5'
          placeholder='Search...'
          type='text'
          name='search'
        />
      </label>
    </div>
  );
};

export default HeaderSearchBox;
