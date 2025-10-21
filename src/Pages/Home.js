import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const titleRef = useRef();
  const subtitleRef = useRef();
  const descRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.from(imageRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(
        [titleRef.current, subtitleRef.current, descRef.current, buttonRef.current],
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen px-5">
      {/* Gambar profil */}
      <img
        ref={imageRef}
        src={img}
        alt={name}
        className="w-32 h-32 rounded-full mb-6 object-cover shadow-lg"
      />

      {/* Nama */}
      <h1
        ref={titleRef}
        className="text-2xl font-semibold text-dark-heading dark:text-light-heading md:text-3xl"
      >
        Hi I'm {name}
      </h1>

      {/* Tagline / Judul besar */}
      <h2
        ref={subtitleRef}
        className="text-3xl md:text-5xl font-bold text-dark-heading dark:text-light-heading leading-tight mt-3"
      >
        {tagline}
      </h2>

      {/* Deskripsi singkat */}
      <p
        ref={descRef}
        className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl text-sm md:text-base"
      >
        A Frontend Developer and Visual Designer with experience in web design, brand identity, and product design.
      </p>

      {/* Tombol Resume */}
      <button
        ref={buttonRef}
        className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
        onClick={() => window.open("/resume.pdf", "_blank")}
      >
        View Resume
      </button>
    </main>
  );
}

export default Home;
