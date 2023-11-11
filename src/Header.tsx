
import { useNavigate } from "react-router-dom";
import React from "react";

interface HeaderProps {
  destination: string
  button_text: string
}

const Header: React.FC<HeaderProps> = ({destination, button_text}: HeaderProps) =>
{
  const navigate = useNavigate()

  return (
    <div className="w-full grid grid-cols-2 content-center ">
      <div>
        <h1 className="text-5xl py-2.5">NTT data Challenge</h1>
      </div>
      <div className="flex justify-end items-center">
        <button className="p-1 px-5 border border-green-300 rounded text-green-300 items-center justify-center" onClick={()=>navigate(destination)}>
          {button_text}
        </button>
      </div>
    </div>
  )
}

export default Header
