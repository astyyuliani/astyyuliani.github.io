import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { publicationDetails } from "../Details";
import { Calendar } from "lucide-react"; // Hapus FileText

function Publication() {
  const titleRef = useRef();
  const pubTitleRef = useRef();
  const pubInfoRef = useRef();
  const yearRef = useRef();
  const descRef = useRef();
  const buttonRef = useRef();

  const { title, publisher, year, link, description } = publicationDetails;

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 });
    tl.from(
      [titleRef.current, pubTitleRef.current, pubInfoRef.current, yearRef.current, descRef.current],
      {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.from(buttonRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.2,
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center text-center min-h-[85vh] px-5 -mt-10">
      <h1
        ref={titleRef}
        className="text-3xl md:text-4xl font-bold text-dark-heading dark:text-light-heading mb-6"
      >
        Publication
      </h1>

      <h2
        ref={pubTitleRef}
        className="text-xl md:text-2xl font-semibold text-dark-heading dark:text-light-heading max-w-2xl leading-snug"
      >
        {title}
      </h2>

      <p
        ref={pubInfoRef}
        className="text-gray-600 dark:text-gray-300 mt-4 text-sm md:text-base"
      >
        {publisher}
      </p>

      <p
        ref={yearRef}
        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base mt-1"
      >
        <Calendar size={18} /> Published: {year}
      </p>

      <button
        ref={buttonRef}
        className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
        onClick={() => window.open(link, "_blank")}
      >
        View Publication
      </button>

      <p
        ref={descRef}
        className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl text-sm md:text-base leading-relaxed"
      >
        {description}
      </p>
    </main>
  );
}

export default Publication;
