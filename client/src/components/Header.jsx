import { useState } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import brandLogo from "../assets/stellarblogger-logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const path = useLocation().pathname;
  return (
    <Navbar className="max-w-screen-xl mx-auto">
      <Link to="/" className="self-center whitespace-nowrap">
        <img
          className="h-[30px] sm:h-[40px]"
          src={brandLogo}
          alt="StellarBlogger logo"
        />
      </Link>

      <form action="">
        <TextInput
          type="text"
          placeholder="Search Blogs"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray">
        <AiOutlineSearch className="text-lg" />
      </Button>

      <div className="flex gap-2 md:gap-4 md:order-2">
        <DarkModeSwitch
          className="self-center hidden sm:inline"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
        />

        <Link to="/log-in">
          <Button outline gradientDuoTone="pinkToOrange">
            Log In
          </Button>
        </Link>

        <Link to="/sign-up" className="hidden md:inline">
          <Button gradientDuoTone="pinkToOrange">Sign Up</Button>
        </Link>

        <Navbar.Toggle></Navbar.Toggle>
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
