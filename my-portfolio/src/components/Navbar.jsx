import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 `}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="lg:w-[100px] h-auto xs:w-[65px] object-contain"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row  lg:gap-12 md:gap-7 sm:gap-5">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-inactive"
              } hover:text-white hover:font-bold text-[18px] cursor-pointer font-medium`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          <li
            className={`${
              active === "resume" ? "text-white" : "text-inactive"
            }  text-[18px] cursor-pointer font-medium border-l border-l-white pl-8`}
            onClick={() => {
              setActive("resume");
            }}
          >
            <a
              href="#"
              className="border-secondary border py-1 px-3 rounded-md hover:text-primary hover:bg-white hover:border-white"
            >
              My Resume
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[22px] h-[22px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "translate-x-0" : "translate-x-full"
            } p-6 fixed top-20 right-0 my-2 min-w-[140px] w-full z-10 rounded-xl shadow-lg secondary-primary-gradient transition-transform duration-700 ease-in-out`}
          >
            <ul className="list-none flex flex-col justify-center text-center gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-inactive"
                  } text-[16px] cursor-pointer font-medium`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              <hr />

              <li
                className={`${
                  active === "resume" ? "text-white" : "text-inactive"
                } hover:text-white hover:font-bold text-[18px] cursor-pointer font-medium`}
                onClick={() => {
                  setActive("resume");
                }}
              >
                My Resume
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
