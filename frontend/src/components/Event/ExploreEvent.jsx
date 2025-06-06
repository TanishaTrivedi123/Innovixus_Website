import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../Event/ExploreEvent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, getEvent } from "../../store/EventSlice";
import { RxCross2 } from "react-icons/rx";
import { FaCalendarAlt, FaMicrochip, FaCode } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../../utils/api";

const ExploreEvent = () => {
  const { events } = useSelector((state) => state.event);
  const dispatch = useDispatch();
  const eventHeadRef = useRef(null);
  const cardsRef = useRef([]);
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const techIcons = [<FaMicrochip />, <FaCode />, <FaCalendarAlt />];

  const handleDelete = (id, index) => {
    const cardToRemove = cardsRef.current[index];

    gsap.to(cardToRemove, {
      scale: 0.5,
      opacity: 0,
      y: 30,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: async () => {
        try {
          // Send DELETE request to the backend
          const response = await axios.delete(`${API_URL}/deleteEvent/${id}`);

          if (response.data.success) {
            // Dispatch the delete action from Redux if the deletion was successful
            dispatch(deleteEvent(id));
          } else {
            console.log("Event deletion failed:", response.data.message);
          }
        } catch (error) {
          console.error("Error deleting event:", error);
        }
      },
    });
  };
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${API_URL}/getEvent`);
        if (response.data.success) {
          dispatch(getEvent(response.data.events));
        }
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, [dispatch]);

  useEffect(() => {
    gsap.from(eventHeadRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          scale: 0.8,
          opacity: 0,
          y: 30,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
        }
      );
    });
  }, [events]);

  return (
    <>
      <div className={styles.wrapall}>
        <div className={styles.Event_Head} ref={eventHeadRef}>
          <h1>Innovate, Compete & Connect!</h1>
          <p>
            Welcome to Innovixus Events, where tech enthusiasts learn, compete,
            and grow! From hackathons to workshops, dive into opportunities that
            ignite innovation and collaboration. Join us & be part of the
            future!
          </p>
        </div>

        <div className={styles.container}>
          {events.length > 0 ? (
            [...events].map((item, index) => (
              <div
                className={styles.card}
                key={item._id}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div className={styles.card_glow}></div>
                <div className={styles.img}>
                  {item.image?.url ? (
                    <img src={item.image.url} alt="event" />
                  ) : (
                    <div className={styles.no_event_img}>
                      {techIcons[index % techIcons.length]}
                    </div>
                  )}
                </div>

                <div className={styles.TopText}>
                  <div className={styles.EventName}>{item.title}</div>
                  <div className={styles.eventDate}>
                    <FaCalendarAlt className={styles.calendarIcon} />
                    {new Date(item.date).toLocaleDateString("en-GB")}
                  </div>
                </div>

                <div className={styles.bottomText}>
                  <div className={styles.desc}>{item.description}</div>
                </div>

                {isAdmin && (
                  <RxCross2
                    className={styles.deleteIcon}
                    onClick={() => handleDelete(item._id, index)}
                  />
                )}
              </div>
            ))
          ) : (
            <div className={styles.no_event}>
              <div className={styles.no_event_content}>
                <FaMicrochip className={styles.no_event_icon} />
                <p>No Events Found</p>
                <small>Stay tuned for upcoming tech events!</small>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExploreEvent;
