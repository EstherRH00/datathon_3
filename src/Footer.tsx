import git from "./images/git_icon.png"
import React from "react";

const Footer: React.FC = () =>
{

  return (
    <>
      <hr className="h-px my-8 border-0 bg-green-300"/>
      <p className="text-xl pb-2.5">
        Credit:
      </p>
      <ul className="pt-2 pl-2 list-none marker:text-green-600">
        <li>
          <div className="flex">
            <a href="https://github.com/MiquelAlberti2" target="_blank" rel="noreferrer">
              <img className="rounded bg-green-300 h-5 mr-2" src={git} alt="Coding Beauty logo"></img>
            </a>
            Miquel Alberti
          </div>
        </li>
        <li>
          <div className="flex">
            <a href="https://github.com/pbaldisa" target="_blank" rel="noreferrer">
              <img className="rounded bg-green-300 h-5 mr-2" src={git} alt="Coding Beauty logo"></img>
            </a>
            Pau Baldillou
          </div>
        </li>
        <li>
          <div className="flex">
            <a href="https://github.com/EstherRH00" target="_blank" rel="noreferrer">
              <img className="rounded bg-green-300 h-5 mr-2" src={git} alt="Coding Beauty logo"></img>
            </a>
            Esther Ruano
          </div>
        </li>
        <li>
          <div className="flex">
            <a href="https://github.com/ntorqulu" target="_blank" rel="noreferrer">
              <img className="rounded bg-green-300 h-5 mr-2" src={git} alt="Coding Beauty logo"></img>
            </a>
            Núria Torquet
          </div>
        </li>
      </ul>
      </>

  )
}

export default Footer
