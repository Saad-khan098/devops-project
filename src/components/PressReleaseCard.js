import React from "react";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import { motion } from "framer-motion";
import Link from "next/link";

const PressReleaseCard = ({ data }) => {
  const variants = {
    hidden: { opacity: 0, x: 40 }, // Start with opacity 0 and 50px below
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ScrollContainer
      hideScrollbars={false}
      className="scrollbar-thin flex overflow-auto py-4 px-6"
    >
      {data.map((item, index) => (
        <Link href={item.link} key={index} target="_blank">
          <motion.div
            className="snap-center shrink-0 first:pl-4 last:pr-4"
            variants={variants} // Pass the animation variants
            initial="hidden" // Initial state before animation
            whileInView="visible" // Animate to the visible state when in view
            viewport={{ once: true, amount: 0.2 }} // Animate when 80% of the element is in the viewport
            transition={{ duration: 0.5, delay: index * 0.1 }} // Apply a staggered delay based on the card's index
          >
            <div className="md:w-[22rem] md:h-[30rem] w-[20rem] h-[25rem] md:pb-0 pb-16 bg-[#26272C] rounded-lg shadow-md overflow-hidden">
              {" "}
              {/* Adjust w-80 and h-96 to your desired dimensions */}
              <div className="h-2/3 w-full relative">
                {" "}
                {/* Adjust the height ratio as per your design */}
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover" // This will cover the image area, ensuring no empty spaces
                />
              </div>
              <div className="p-3 md:p-5 h-1/3">
                {" "}
                {/* Adjust the height ratio as per your design */}
                <h2 className="text-lg font-semibold tracking-tight text-white">
                  {item.title}
                </h2>
                <h3 className="font-normal text-gray-400">
                  {item.description}
                </h3>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </ScrollContainer>
  );
};

export default PressReleaseCard;
