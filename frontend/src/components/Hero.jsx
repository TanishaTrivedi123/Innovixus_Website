import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import UpcomingEvent from "./UpcomingEvent";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import HeroBackgroundDots from "./HeroBackgroundDots";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleOpenOnclick = () => {
    setOpen(true);
  };

  useGSAP(() => {
    gsap.from(".hero-main-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.from(".hero-sub-line", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(3)",
      delay: 0.6,
    });

    gsap.from(".hero-subtitle", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.9,
    });

    gsap.to(".hero-button:nth-child(1)", {
      y: -12,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-button:nth-child(2)", {
      y: -12,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.3,
    });
  }, []);

  return (
    <>
      <div className="font-sans top-0 left-0 w-full h-screen overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[url('/src/assets/Background2.png')] bg-cover bg-center bg-no-repeat">
          <HeroBackgroundDots />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4 text-white pt-16">
          {/* Main Title */}
          <h1 className="text-center px-4 mb-10 sm:mb-12 md:mb-20">
            <span
              className="
              hero-main-title block
              text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl
              font-bold
              bg-gradient-to-r from-blue-400 to-purple-600
              bg-clip-text text-transparent
              font-poppins
              "
              style={{ letterSpacing: "0.04em" }}
            >
              Your Tech Journey Starts Here
            </span>

            <span
              className="
              hero-sub-line block
              mt-5 sm:mt-7 md:mt-10
              text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl
              font-medium
              text-gray-300
              animate-pulse
              font-inter
              "
              style={{ letterSpacing: "0.03em" }}
            >
              - Are You Ready? -
            </span>
          </h1>

          <h2
            className="
            hero-subtitle
            mb-10 sm:mb-12 md:mb-20
            text-lg sm:text-xl md:text-2xl lg:text-2xl
            text-center
            text-gray-300
            max-w-3xl
            mx-auto
            px-4
            leading-relaxed
            font-inter
            "
            style={{ letterSpacing: "0.02em" }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold hover:from-blue-500 hover:to-purple-600 transition-all duration-300">
              Join a community
            </span>{" "}
            of tech enthusiasts and{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 relative group">
              build the future
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </span>{" "}
            of technology!
          </h2>

          {/* Button Group */}
          <div className="flex flex-row gap-8 sm:flex-row sm:gap-10 pt-14">
            <Link to="/events">
              <button className="hero-button transform rounded-full bg-purple-500 text-white px-8 py-3 text-lg font-semibold shadow-lg transition-transform duration-75 ease-in-out hover:scale-105 active:bg-purple-500 active:shadow-none border-2 border-transparent hover:border-purple-400 hover:bg-transparent focus:outline-2 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 sm:px-10 hover:shadow-purple-200 hover:shadow-lg font-poppins">
                View Events
              </button>
            </Link>

            <button
              className="hero-button transform rounded-full bg-purple-500 text-white px-8 py-3 text-lg font-semibold shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 active:bg-purple-500 active:shadow-none border-2 border-transparent hover:border-purple-400 hover:bg-transparent focus:outline-2 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 sm:px-10 hover:shadow-purple-200 hover:shadow-lg font-poppins"
              onClick={handleOpenOnclick}
            >
              Event Ahead
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
          >
            <UpcomingEvent onClose={() => setOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
