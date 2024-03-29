import React from "react";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            radius: "50%",
            bottom: "50px",
            right: "50px",
            background: "",
            opacity: 0.8,
            height: "50px",
            width: "50px",
            fontSize: "50px",
          }}
          onClick={scrollUp}
        >
          <MdOutlineKeyboardArrowUp size="4.5rem" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
