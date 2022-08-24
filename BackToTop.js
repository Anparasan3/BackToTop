import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./backToTop.css";

function BackToTop(props) {
  const { scrollId } = props;
  const [backToTopBtn, setBackToTopBtn] = useState(false);

  useEffect(() => {
    if (scrollId) {
      const scroller = document.querySelector(`#${scrollId}`);
      scroller.addEventListener("scroll", () => {
        if (scroller.scrollTop > 100) {
          setBackToTopBtn(true);
        } else {
          setBackToTopBtn(false);
        }
      });
    } else {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setBackToTopBtn(true);
        } else {
          setBackToTopBtn(false);
        }
      });
    }
  }, [scrollId]);

  const scrollUp = () => {
    if (scrollId) {
      const scroller = document.querySelector("#importSummay");
      scroller.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {backToTopBtn && (
        <div id="progress" onClick={() => scrollUp()}>
          <span id="progress-value">&#x1F815;</span>
        </div>
      )}
    </div>
  );
}

BackToTop.propTypes = {
  scrollId: PropTypes.string,
};

export default BackToTop;
