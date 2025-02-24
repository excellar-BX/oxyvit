import React, { ReactNode } from 'react';

type InputProps = {
    label: string,
    type: 'text' | 'email' | 'button' | 'password' | 'checkbox' | 'radio',
    icon?: ReactNode,
    placeholder:string,
    required?: boolean,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>),
}

const Input = ({label,type, icon, placeholder, required, value, onChange}:InputProps) => {
  return (
    <div className='max-md:mx-0 mx-5 my-3 ' >
      <label htmlFor="firstname" className="font-semibold " >{label}</label>
              <div className="flex border-b-[3px] px-2 text-lg border-emerald-800 rounded-full items-center ">
                <span className="text-3xl text-emerald-950 ">
                  {icon}
                </span>
                <input
                  className="bg-transparent w-full placeholder:text-black placeholder:text-opacity-30 my-2  outline-none border-none h-12 px-2 "
                  type={type}
                  id={label}
                onChange={onChange}
                  value={value}
                  required={required}
                  placeholder={placeholder}
                />
              </div>
    </div>
  );
}

export default Input;
