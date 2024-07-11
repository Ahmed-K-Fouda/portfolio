import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    if (buttonCategory === "all") {
      setArr(myProjects);
    } else {
      const newArr = myProjects.filter((item) => {
        return item.category.includes(buttonCategory);
      });
      setArr(newArr);
    }
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => handleClick("all")}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => handleClick("css")}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => handleClick("js")}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleClick("bootstrap")}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          Bootstrap5
        </button>
        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.prejectDescription}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="i">
                        <a href={item.link}>github</a>
                      </div>
                    </div>

                    <a className="link flex">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
