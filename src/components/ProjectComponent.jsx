import React, { useState, useEffect, useRef } from "react";
import "../index.css";

const ProjectComponent = ({ techStack, title, description, projectUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Capture the current value of ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`max-w-md bg-white px-4 pt-1 pb-5 overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-in-out ${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      <div className="px-6 py-4 text-left">
        <div className="text-black text-s mb-2">{techStack}</div>
        <div className="font-bold text-black text-xl mb-2">{title}</div>
        <p className="text-black text-xs">{description}</p>
      </div>
      <div className="flex justify-center w-full">
        <a
          href={projectUrl}
          className="bg-white text-background text-center text-s font-bold py-2 px-4 w-3/8 outline outline-1 outline-background hover:opacity-50 transition-opacity duration-300"
        >
          View Demo
        </a>
        <a
          href={projectUrl}
          className="bg-white text-background text-center text-s font-bold py-2 px-4 w-3/8 outline outline-1 outline-background hover:opacity-50 transition-opacity duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectComponent;