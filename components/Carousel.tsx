import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images: string[] = [
    "/images/assests/nextjs.svg",
    "/images/assests/tailwind.svg",
    "/images/assests/react.svg",
    "/images/assests/framer-motion.svg",
    "/images/assests/nodejs.svg",
    "/images/assests/express.svg",
    "/images/assests/mongo.svg",
    "/images/assests/postgresql.svg",
    "/images/assests/postman.svg",
    "/images/assests/python.svg",
    "/images/assests/c.svg",
    "/images/assests/grafana-icon.svg",
    "/images/assests/graphql.svg",
    "/images/assests/git.svg",
    "/images/assests/azure.svg",
    "/images/assests/docker.svg",
];

const Carousel: React.FC = () => {
  return (
    <div className="relative w-full h-32 overflow-hidden max-w-7xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r z-10" />
      <div className="flex animate-scroll">
        {[...images, ...images, ...images, ...images, ...images].map(
          (src, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <Image
                src={src}
                alt={`Logo ${index + 1}`}
                width={80}
                height={80}
                className="object-contain w-10 h-20 filter dark:invert"
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Carousel;