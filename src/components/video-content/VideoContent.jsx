import "./videoContent.css";
import { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoContent() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="video__content">
      <div className="video__link-box">
        <a href="http://youtube.com" target="_blank">
          <FaPlay />
        </a>
      </div>
      <video autoPlay loop muted playsInline className="w-full h-auto">
        <source src="/video/highway-loop.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
