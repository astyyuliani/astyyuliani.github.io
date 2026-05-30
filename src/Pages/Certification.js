import React from "react";
import { certificates } from "../Details";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Certification = () => {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
     
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Certification
        </h1>
      </section>

     
      <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-3 w-full mt-6">
        {certificates.map((certificate, id) => (
          <div key={id} className="flex justify-center items-center">
            <div className="w-full h-64 flex justify-center items-center border border-slate-300 rounded-lg bg-white overflow-hidden shadow-sm">
              <Zoom>
                <img
                  src={certificate.image}
                  alt={certificate.title || ""}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </Zoom>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Certification;
