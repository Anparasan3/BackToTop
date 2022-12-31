import { useState, useEffect } from "react";
import "./backToTop.css";

const BackToTop = (props: { scrollId?: string }) => {
  const { scrollId } = props;
  const [backToTopBtn, setBackToTopBtn] = useState<boolean>(false);


  const handleWindowScroll = () => {
    console.log(window.scrollY)
    if (window.scrollY > 100) {
      setBackToTopBtn(true);
    } else {
      setBackToTopBtn(false);
    }
  }


  const handleDivScroll = () => {
    const scroller = document.querySelector(`#${scrollId}`);
    //@ts-ignore
    if (scroller.scrollTop > 100) {
      setBackToTopBtn(true);
    } else {
      setBackToTopBtn(false);
    }
  }


  useEffect(() => {
    if (scrollId) {
      const scroller = document.querySelector(`#${scrollId}`);
      // @ts-ignore
      scroller.addEventListener("scroll", handleDivScroll);
    } else {
      window.addEventListener("scroll", handleWindowScroll);
    }
  }, [scrollId]);

  console.log("window.scrollY", window.scrollY)

  const scrollUp = () => {
    if (scrollId) {
      const scroller = document.querySelector(`#${scrollId}`);
      // @ts-ignore
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
          <span id="progress-value">&#x1F815;yess</span>
        </div>
      )}
    </div>
  );
}



export default BackToTop;