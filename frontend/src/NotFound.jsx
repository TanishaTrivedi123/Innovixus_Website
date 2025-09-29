import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NotFound = () => {
  useGSAP(() => {
    gsap.from(".notfound-main-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.from(".notfound-subtitle", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.6,
    });
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center px-4 text-white bg-[url('/src/assets/Background2.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center">
        <h1
          className="
            notfound-main-title
            text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            font-bold
            bg-gradient-to-r from-blue-400 to-purple-600
            bg-clip-text text-transparent
            font-poppins
            mb-8 p-4
          "
          style={{ letterSpacing: "0.04em" }}
        >
          404 - Page Not Found
        </h1>
        <p
          className="
            notfound-subtitle
            text-lg sm:text-xl md:text-2xl
            text-gray-300
            max-w-xl
            mx-auto
            leading-relaxed
            font-inter
            mb-8
          "
          style={{ letterSpacing: "0.02em" }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
            Oops! It looks like you're lost
          </span>{" "}
          in the tech universe. Let's navigate back to the{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold relative group">
            future of technology
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
          </span>
          !
        </p>
        <a
          href="/"
          className="
            mt-10 inline-block
            transform rounded-full bg-purple-500 text-white px-8 py-3 text-lg font-semibold
            shadow-lg transition-transform duration-200 ease-in-out
            hover:scale-105 active:bg-purple-500 active:shadow-none
            border-2 border-transparent hover:border-purple-400 hover:bg-transparent
            focus:outline-2 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
            hover:shadow-purple-200 hover:shadow-lg font-poppins
          "
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
