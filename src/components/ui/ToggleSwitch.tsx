import { Switch } from "@headlessui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

type ToggleSwitchProps = {
  initialState: boolean;
  onChangeHandler: () => void;
};

const ToggleSwitch = ({ initialState, onChangeHandler }: ToggleSwitchProps) => {
  return (
    <div className='flex'>
      <Switch
        checked={initialState}
        onChange={onChangeHandler}
        className={`${initialState ? "bg-[#e4faf0]" : "bg-[#dddbda]"}
          relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer 
          rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out 
          focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
        <span className='sr-only'>Use setting</span>
        <span
          aria-hidden='true'
          className={`${initialState ? "translate-x-7" : "translate-x-0"}
            pointer-events-none inline-block h-[26px] w-[26px] transform rounded-full ${
              initialState ? "bg-[#77e6b6]" : "bg-[#eeedec]"
            } shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default ToggleSwitch;
