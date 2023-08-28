import React from "react";
import { Link } from "react-scroll";
import { CgMenuRight } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { changeShowNavbar } from "../redux/navBarSlice";
import Logo from "../assets/logo1.png";

const NavBar = () => {
  // To connect with redux
  const dispatch = useDispatch();

  const showMobileManu = useSelector((store) => store.navbar);

  return (
    <div className="max-w-[1440px] bg-darkColor2 mx-auto px-4 fixed flex items-center top-0 left-0 right-0 justify-end text-lightColor h-[60px]">
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
      {/* Mobile menu */}
      <div
        className={"md:hidden cursor-pointer z-10"}
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
            : "absolute bg-darkColor2 flex md:hidden h-screen w-full justify-center items-center top-0"
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
