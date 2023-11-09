import { useState, useEffect } from "react";

function WindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update window width
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Add a listener for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
}

export default WindowWidth;
