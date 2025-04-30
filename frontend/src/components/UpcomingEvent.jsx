import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { deleteUpcomingEvent, setUpcomingEvent } from "../store/AddEventSlice";
import axios from "axios";

const UpcomingEvent = ({ onClose }) => {
  const { upcomingEvent } = useSelector((state) => state.upcomingEvent);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          "https://innovixus-backend.onrender.com/get-event-info"
        );
        console.log("API response:", response.data);

        if (
          response.data.success &&
          response.data.eventData &&
          response.data.eventData.length > 0
        ) {
          const firstEvent = response.data.eventData[0];
          dispatch(setUpcomingEvent(firstEvent));
        }
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    fetchEvent();
  }, [dispatch]);

  const handleClickRegister = () => {
    navigate("/registration-form");
  };

  const deleteHandlerClick = async (id) => {
    if (!id) {
      console.error("No ID provided for deletion.");
      return;
    }

    try {
      const response = await axios.delete(
        `https://innovixus-backend.onrender.com/deleteUpcomingEvent/${id}`
      );

      if (response.data.success) {
        dispatch(deleteUpcomingEvent()); // Correct: clear from Redux
        console.log("Event deleted successfully.");
      } else {
        console.error("Failed to delete event");
      }
    } catch (error) {
      console.error("Error deleting event", error);
    }
  };

  const hasEvent = upcomingEvent?.title || upcomingEvent?.description;
  const admin = localStorage.getItem("isAdmin") === "true";

  return (
    <div className="relative top-0 right-0 flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.5,
        }}
        className="bg-gradient-to-br from-[#1f1f1f] to-[#2b2b2b] border border-purple-600 rounded-3xl p-8 sm:p-10 text-center shadow-2xl w-[90%] sm:w-[450px] relative"
      >
        <div className="relative top-0 right-0">
          {admin && hasEvent && upcomingEvent?._id && (
            <MdDelete
              onClick={() => deleteHandlerClick(upcomingEvent._id)}
              className="bg-white absolute right-3 top-3 size-5 cursor-pointer z-50"
            />
          )}

          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 font-poppins animate-pulse">
            {upcomingEvent?.title
              ? `${upcomingEvent.title} 🚀`
              : "🚀 Event Coming Soon!"}
          </h1>

          <p className="text-sm sm:text-base text-gray-300 mb-8 font-inter leading-relaxed">
            {upcomingEvent?.description
              ? upcomingEvent.description
              : "Stay tuned for our upcoming tech event! It’s going to be packed with innovation, coding, and creativity."}
          </p>

          {hasEvent ? (
            <button
              onClick={handleClickRegister}
              className="bg-purple-600 hover:bg-transparent hover:border-purple-400 hover:text-purple-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 border-2 border-transparent hover:shadow-purple-500/30 font-poppins"
            >
              Register
            </button>
          ) : (
            isMobile &&
            onClose && (
              <button
                onClick={onClose}
                className="bg-purple-600 hover:bg-transparent hover:border-purple-400 hover:text-purple-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 border-2 border-transparent hover:shadow-purple-500/30 font-poppins"
              >
                Close
              </button>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default UpcomingEvent;
