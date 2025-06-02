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
      {/* <div className="video__link-box">
        <a href="http://youtube.com" target="_blank">
          <FaPlay />
        </a>
      </div> */}
      {/* <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/BapSQFJPMM0?autoplay=1&mute=1&loop=1&playlist=BapSQFJPMM0&controls=0&modestbranding=1&rel=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer"
      ></iframe> */}

      <video autoPlay loop muted playsInline className="w-full h-auto">
        <source src="/video/highway-loop.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
