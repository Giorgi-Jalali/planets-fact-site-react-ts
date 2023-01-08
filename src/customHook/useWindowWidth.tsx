import { useState, useEffect } from "react";

function useWindowWidth() {
  const [deviceWidth, setDeviceWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    function handleResize() {
      setDeviceWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceWidth;
}

export default useWindowWidth;
