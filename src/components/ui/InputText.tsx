import { Switch } from "@headlessui/react";
import React, { ChangeEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

type InputTextProps = {
  label: string;
  value: string;
  placeholder?: string;
  errorMessage?: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const defaultProps = {
  placeholder: "",
  errorMessage: "Please provide Input",
};

const InputText = ({
  label,
  value,
  placeholder,
  errorMessage,
  onChangeHandler,
}: InputTextProps) => {
  return (
    <div className='flex flex-1 items-stretch m-1 w-full pr-8'>
      <label className='block w-full'>
        <span className='block text-sm font-medium text-slate-700 p-2'>{label}</span>
        <input
          type='text'
          className='placeholder:text-slate-400 block bg-gray-200 w-full border border-slate-300 
          rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-300 focus:ring-gray-300 
            focus:ring-1 text-sm m-1'
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChangeHandler(e)}
        />
        {errorMessage && (
          <p className='mt-1 invisible peer-invalid:visible text-red-600 text-sm'>{errorMessage}</p>
        )}
      </label>
    </div>
  );
};

InputText.defaultProps = defaultProps;

export default InputText;
