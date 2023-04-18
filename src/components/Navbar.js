import React, { useEffect, useState } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { FaBars, FaPlus } from "react-icons/fa";

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);

  const boolString = localStorage.getItem("darkMode") || "true";
  const boolValue = boolString === "true" ? true : false;
  const [darkMode, setDarkMode] = useState(boolValue);
  

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode === true && root.classList.add("dark");
    darkMode === false && root.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((darkMode) => !darkMode);

  const [isDropdownOpen, setIsDropdownOpen] = useState({
    bar: false,
    sub: false,
  });

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset === 0 && setIsTop(true);
      window.pageYOffset !== 0 && setIsTop(false);
      return () => (window.onscroll = null);
    };
  });

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode === true && root.classList.add("dark");
    darkMode === false && root.classList.remove("dark");
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const Li = ({ name }) => (
    <li>
      <span
        className={` flex py-2 text-base text-grey lg:ml-8 lg:inline-flex xl:ml-12 hover:text-primary cursor-pointer ${
          isTop ? `lg:py-8` : `lg:py-6`
        }`}
      >
        {name}
      </span>
    </li>
  );
  return (
    <header
      className={`sticky z-50 w-full bg-white dark:bg-dark top-0 ${
        isTop
          ? `bg-opacity-100`
          : `bg-opacity-80 backdrop-blur-sm dark:bg-opacity-80`
      }`}
    >
      <div className=" box-screen px-4 mx-auto py-0">
        <div className=" flex items-center justify-between -mx-1 relative">
          <div className="w-[15rem] max-w-full px-4">
            <img
              src="/images/logo-white.svg"
              alt="logo"
              className="lg:py-2 py-5 w-full dark:block hidden"
            />
            <img
              src="/images/logo.svg"
              alt="logo"
              className="lg:py-2 py-5 w-full block dark:hidden"
            />
          </div>
          <div className=" flex justify-end items-center px-4 w-full">
            <div>
              <button
                className=" absolute right-4 top-1/2 -translate-y-1/2 rounded-lg px-3 py-2 focus:ring focus:ring-primary lg:hidden cursor-pointer"
                onClick={() =>
                  setIsDropdownOpen({
                    ...isDropdownOpen,
                    bar: !isDropdownOpen.bar,
                  })
                }
              >
                <FaBars
                  className={`text-2xl text-main ${
                    isDropdownOpen.bar ? `hidden` : `block`
                  }`}
                />
                <FaPlus
                  className={`text-main text-2xl rotate-45 ${
                    !isDropdownOpen.bar ? `hidden` : `block`
                  }`}
                />
              </button>
              <nav
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-4 px-6 shadow-[0_1px_3px_0__rgba(0,0,0,0.1)] lg:static lg:block lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-[0_0_#0000] dark:bg-[#07102d] dark:lg:bg-transparent ${
                  !isDropdownOpen.bar ? `hidden` : `block`
                }`}
              >
                <ul className="lg:flex lg:justify-end">
                  <Li name="Features" />
                  <Li name="About" />
                  <Li name="Pricing" />
                  <Li name="Contact" />
                  <li
                    className=" relative group text-grey"
                    onClick={() =>
                      setIsDropdownOpen({
                        ...isDropdownOpen,
                        sub: !isDropdownOpen.sub,
                      })
                    }
                  >
                    <span
                      className={`relative flex py-2 text-base lg:ml-8 lg:inline-flex xl:ml-12 hover:text-primary cursor-pointer ${
                        isTop ? `lg:py-8` : `lg:py-6`
                      } after:absolute after:right-1 after:top-1/2 after:-mt-[2px] after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-[2px] after:border-r-[2px] after:border-[#9699A6] lg:after:-right-[16px] after:hover:border-primary `}
                    >
                      Pages
                    </span>
                    <div
                      className={`${
                        isDropdownOpen.sub ? `block` : `hidden lg:block`
                      } relative top-full left-0 rounded-lg bg-white dark:bg-[#07102d] transition-[top] duration-300 lg:invisible lg:absolute lg:top-[115%] lg:w-64 lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100`}
                    >
                      <ul>
                        <li className=" block py-3 text-sm text-main lg:px-4 hover:text-primary cursor-pointer ">
                          Blog Grid Page
                        </li>
                        <li className=" block py-3 text-sm text-main lg:px-4 hover:text-primary cursor-pointer">
                          Blog Details Page
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className=" hidden sm:flex justify-end pr-16 lg:pr-0 xl:pl-20">
              <div className="btn">Download</div>
              <div className="flex justify-center items-center cursor-pointer rounded-full w-10 md:w-14 md:h-14 text-black dark:text-white">
                <BsSun
                  className="hidden dark:block text-2xl"
                  onClick={toggleDarkMode}
                />
                <BsMoonStars
                  className="dark:hidden block text-2xl"
                  onClick={toggleDarkMode}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
