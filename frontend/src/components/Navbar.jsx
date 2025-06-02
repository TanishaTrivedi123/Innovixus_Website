import React, { useRef, useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // GSAP Refs
  const logoRef = useRef();
  const desktopMenuRef = useRef();
  const mobileMenuButtonRef = useRef();
  const mobileMenuRef = useRef();

  // GSAP Animations
  useGSAP(() => {
    gsap.from(logoRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.from(desktopMenuRef.current.children, {
      y: -30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out",
      delay: 0.4,
    });

    gsap.from(mobileMenuButtonRef.current, {
      x: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.6,
    });
  });

  useGSAP(() => {
    if (isOpen) {
      gsap.from(mobileMenuRef.current.children, {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <nav
        className={`transition-transform duration-300 bg-transparent fixed w-full top-0 left-0 z-50 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="flex items-center justify-between h-20">
            <div
              ref={logoRef}
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/circular_icon.png"
                alt="Logo"
                className="h-16 w-16 sm:h-16 sm:w-16 lg:h-18 lg:w-18 xl:h-20 xl:w-20"
              />
              <span className="ml-2 text-white text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold block font-poppins">
                Innovixus
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div
                ref={desktopMenuRef}
                className="ml-10 flex items-center space-x-4 lg:space-x-6 xl:space-x-8 font-inter font-semibold"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-base lg:text-lg xl:text-xl font-medium ${
                      isActive
                        ? "text-blue-500"
                        : "text-white hover:text-cyan-200"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/team-members"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-base lg:text-lg xl:text-xl font-medium ${
                      isActive
                        ? "text-blue-500"
                        : "text-white hover:text-cyan-200"
                    }`
                  }
                >
                  Core Members
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-base lg:text-lg xl:text-xl font-medium ${
                      isActive
                        ? "text-blue-500"
                        : "text-white hover:text-cyan-200"
                    }`
                  }
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-base lg:text-lg xl:text-xl font-medium ${
                      isActive
                        ? "text-blue-500"
                        : "text-white hover:text-cyan-200"
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div
              ref={mobileMenuButtonRef}
              className="lg:hidden flex items-center pr-4 sm:pr-6"
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-md text-white focus:outline-none"
              >
                {isOpen ? (
                  <IoMdClose className="block h-9 w-9" /> // larger icon
                ) : (
                  <IoMdMenu className="block h-9 w-9" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden font-inter font-semibold bg-very-dark-blue transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-5 space-y-3 sm:px-5">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-5 py-4 rounded-md text-2xl font-semibold w-full ${
                  isActive ? "text-blue-500" : "text-white hover:text-cyan-200"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/team-members"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-5 py-4 rounded-md text-2xl font-semibold w-full ${
                  isActive ? "text-blue-500" : "text-white hover:text-cyan-200"
                }`
              }
            >
              Core Members
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-5 py-4 rounded-md text-2xl font-semibold w-full ${
                  isActive ? "text-blue-500" : "text-white hover:text-cyan-200"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-5 py-4 rounded-md text-2xl font-semibold w-full ${
                  isActive ? "text-blue-500" : "text-white hover:text-cyan-200"
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
