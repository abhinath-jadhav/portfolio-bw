import React from "react";
import { Link } from "react-scroll";
import { CgMenuRight } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { changeShowNavbar } from "../redux/navBarSlice";

const NavBar = () => {
  // To connect with redux
  const dispatch = useDispatch();

  const showMobileManu = useSelector((store) => store.navbar);

  return (
    <div className="max-w-[1440px] mx-auto px-4 fixed flex items-center top-0 left-0 right-0 justify-between text-lightColor h-[60px]">
      <div className="z-20">
        <p className="text-3xl">Abhinath Jadhav</p>
      </div>
      <div>
        <ul className="hidden md:flex gap-10 text-xl">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about"> About</Link>
          </li>
          <li>
            <Link to="skill">Skills</Link>
          </li>
          <li>
            <Link to="experiance">Experience</Link>
          </li>
          <li>
            <Link to="project">Project</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
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
              to="home"
              onClick={() => dispatch(changeShowNavbar())}
              className=" cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              onClick={() => dispatch(changeShowNavbar())}
              className=" cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              onClick={() => dispatch(changeShowNavbar())}
              className="   cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="experiance"
              onClick={() => dispatch(changeShowNavbar())}
              className="cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="project"
              onClick={() => dispatch(changeShowNavbar())}
              className="cursor-pointer"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
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
