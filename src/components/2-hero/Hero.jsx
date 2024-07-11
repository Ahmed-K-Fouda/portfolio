/* eslint-disable react/no-unescaped-entities */
import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import devAnimation from "../../animation/dev.json";
import "./hero.css";

const Hero = () => {
  const lottieRef = useRef();
  const [displayText, setDisplayText] = useState("");
  const text = "React, Front-End Developer";

  useEffect(() => {
    let index = 0;
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting && index <= text.length) {
        setDisplayText(text.substring(0, index));
        index++;
      } else {
        setDisplayText(text.substring(0, index));
        index--;

        if (index < 0) {
          isDeleting = false;
          index = 0;
        } else {
          isDeleting = true;
        }
      }

      if (index === text.length) {
        isDeleting = true;
      }
    }, 100); // Adjust the typing/deleting speed

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.jpg"
            className="avatar"
            alt=""
          />
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          {displayText}
          <span className="cursor" /> {/* Cursor element */}
        </motion.h1>

        <p className="sub-title">
          I'm Ahmed Khaled, Experienced React Developer with a strong background
          in frontend technologies. Skilled in HTML, JavaScript, and React.
          Proven track record of delivering high-quality projects both
          independently and collaboratively{" "}
        </p>

        <div className="all-icons flex">
          <div className="icon icon-github">
            <a className="arr" href="https://www.linkedin.com/feed/">
              &rarr;
            </a>
          </div>
          <div className="icon icon-linkedin">
            <a
              className="arr"
              href="https://github.com/Ahmed-K-Fouda?tab=repositories"
            >
              &rarr;
            </a>
          </div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
