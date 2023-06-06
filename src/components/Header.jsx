import React from "react";
// import { Context } from '../context/contextApi'
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import {FaGithub} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa"
import logo from "../images/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  console.log(pageName);
  return (
    <div className="flex justify-evenly items-center md:h-[56px] bg-[#fcaf58]  h-[65px]">
      <div className="md:w-[50px] md:h-[40px] md:mb-[10px] w-[35px] "
      >
        <Link to='/'>
          <img src={logo} alt="logo" className="w-[100%] rounded-[50%]"/>
        </Link>
        
      </div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onKeyUp={searchQueryHandler}
          className="md:w-[500px] w-[50vw] h-[40px] bg-white  outline-none p-4 rounded-[8px]"
        />
        <button onClick={()=>{searchQueryHandler("searchButton")}} className="bg-white pt-[11.1px] pb-[17px] pr-[10px] ml-[-15px] mb-[6px] mt-[6px] rounded-[8px]">
          <BiSearchAlt className="text-xl text-center"/>
        </button>
      </div>

      <div className="flex flex-row gap-[15px]">
        <a href="/">
          <FaGithub className="text-[30px] text-white"/>
        </a>

        <a href="https://www.linkedin.com/in/vijit-kumar-620101192/">
          <FaLinkedinIn className="text-[30px] text-white"/>
        </a>
      </div>
    </div>
  );
}

export default Header;
