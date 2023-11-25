import { useEffect, useState } from "react";

import CloudPng from "./assets/Cloud1.png";
import CloudBigPng from "./assets/Cloud2.png";
import SkillboxPng from "./assets/skillbox.jpeg";

import "./Parallax.css";
import Image from "next/image";

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={"parallax-root"}>
      <Image
        loading="lazy"
        src={CloudBigPng}
        alt="cloud image"
        className={"parallax-cloud1"}
      />

      <Image
        loading="lazy"
        src={CloudPng}
        alt="cloud image"
        className={"parallax-cloud2"}
      />

      <Image
        loading="lazy"
        src={CloudBigPng}
        alt="cloud image"
        className={"parallax-cloud3"}
      />

      <Image
        loading="lazy"
        src={CloudPng}
        alt="cloud image"
        className={"parallax-cloud4"}
      />

      <Image
        loading="lazy"
        src={CloudPng}
        alt="cloud image"
        className={"parallax-cloud5"}
      />

      <Image
        loading="lazy"
        src={CloudBigPng}
        alt="cloud image"
        className={"parallax-cloud6"}
      />

      <Image
        loading="lazy"
        src={SkillboxPng}
        alt="skillbox image"
        className={"parallax-skillbox"}
        style={{
          transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)`,
        }}
      />
    </div>
  );
};

export default Parallax;
