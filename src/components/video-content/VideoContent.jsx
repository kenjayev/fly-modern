import "./videoContent.css";
import { useEffect, useRef } from "react";

export default function VideoContent() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="video__content">
      <video autoPlay loop muted playsInline className="w-full h-auto">
        <source src="/video/highway-loop.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
