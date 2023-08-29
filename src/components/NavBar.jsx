import React from "react";
import { Link } from "react-scroll";
import { CgMenuRight } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaToggleOn } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { changeShowNavbar } from "../redux/navBarSlice";
import { changeTheme } from "../redux/themeReducer";
import Logo from "../assets/logo1.png";

const NavBar = () => {
  // To connect with redux
  const dispatch = useDispatch();

  const showMobileManu = useSelector((store) => store.navbar);
  const darkTheme = useSelector((store) => store.darkTheme);

  return (
    <div
      className={`${
        darkTheme
          ? "bg-darkColor text-lightColor"
          : "bg-lightColor text-darkColor"
      } max-w-[1440px] mx-auto px-4 fixed flex items-center top-0 left-0 right-0 gap-3 md:gap-8 justify-end h-[60px]`}
    >
      <div className="absolute left-4 top-3 z-20 cursor-pointer">
        <Link smooth={true} duration={700} to="home">
          <img className="w-[50px]" src={Logo} alt="" />
        </Link>
      </div>
      <div>
        <ul className="hidden md:flex gap-10 text-xl">
          <li>
            <Link
              className=" cursor-pointer"
              smooth={true}
              duration={700}
              to="home"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className=" cursor-pointer"
              smooth={true}
              duration={700}
              to="skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className=" cursor-pointer"
              smooth={true}
              duration={700}
              to="experiance"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              className=" cursor-pointer"
              smooth={true}
              duration={700}
              to="project"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              className=" cursor-pointer"
              smooth={true}
              duration={700}
              to="contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Theme toggler */}

      <div
        className={`${darkTheme ? "" : ""} cursor-pointer font-semibold z-10"`}
        onClick={() => dispatch(changeTheme())}
      >
        {darkTheme ? (
          <div className="flex items-center justify-center gap-x-2">
            <h1>Dark</h1>
            <FaToggleOn size={30} />
          </div>
        ) : (
          <div className="flex item-center justify-center gap-2">
            <div className="flex items-center">
              <h1>Light</h1>
            </div>
            <div className="rotate-180">
              <FaToggleOn size={30} />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          darkTheme
            ? "bg-darkColor text-lightColor border-lightColor"
            : "bg-lightColor text-darkColor border-darkColor"
        } md:hidden cursor-pointer z-20`}
        onClick={() => dispatch(changeShowNavbar())}
      >
        {!showMobileManu ? (
          <CgMenuRight size={30} />
        ) : (
          <IoMdCloseCircleOutline size={30} />
        )}
      </div>

      <div
        className={
          !showMobileManu
            ? "hidden"
            : `${
                darkTheme
                  ? "bg-darkColor text-lightColor"
                  : "bg-lightColor text-darkColor"
              } absolute flex md:hidden h-screen w-full justify-center items-center right-0 top-0 z-20
        `
        }
      >
        <ul className="flex flex-col gap-10 text-2xl text-center">
          <li>
            <Link
              smooth={true}
              duration={700}
              to="home"
              onClick={() => dispatch(changeShowNavbar())}
              className=" cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              duration={700}
              to="skills"
              onClick={() => dispatch(changeShowNavbar())}
              className="   cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              duration={700}
              to="experiance"
              onClick={() => dispatch(changeShowNavbar())}
              className="cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              duration={700}
              to="project"
              onClick={() => dispatch(changeShowNavbar())}
              className="cursor-pointer"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              smooth={true}
              duration={700}
              to="contact"
              onClick={() => dispatch(changeShowNavbar())}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
