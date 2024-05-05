import { React, useContext } from "react";
import { ScrollContext } from "@/context/ScrollContext";
import Image from "next/image";

const Giveawaycard = ({ preSaleCardRef }) => {
  const scrollToPreSaleCard = () => {
    if (preSaleCardRef && preSaleCardRef.current) {
      preSaleCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full lg:w-[90%] xl:w-[60%] rounded-xl bg-[#FEC5A3] h-[40rem] lg:h-[25rem] transform translate-y-[-172px] justify-between md:py-[4rem] py-[2rem] md:px-10 px-6 relative overflow-hidden">
      {/* text */}
      <div className="flex flex-col gap-9 md:w-2/3">
        <h1 className="text-4xl font-bold">$100k and Corvette Giveaway!</h1>
        <p>
          The more $VXLP you purchase and the more you participate in Gleam, the
          more tickets you earn, and the higher your chances of walking away
          with these extraordinary prizes!
        </p>
        <button
          className="p-4 text-white bg-black w-[200px] rounded-lg"
          onClick={scrollToPreSaleCard}
        >
          Join the Giveaway
        </button>
      </div>
      {/* image */}
      <div className="w-1/2 md:w-1/3">
        <Image
          src="/images/corvette.png"
          width={600}
          height={600}
          className="pointer-events-none absolute 2xl:-right-[150px] 2xl:-top-[100px] xl:-top-[100px] xl:-right-[230px] xl:scale-90 lg:-top-[100px] lg:-right-[200px] scale-125 bottom-[-40px] right-[-60px]"
        />
      </div>
    </div>
  );
};

export default Giveawaycard;
