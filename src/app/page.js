"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import PreSaleCard from "../components/PreSaleCard copy";
import LogoSlider from "@/components/Slider";
import Cards from "@/components/Cards";
import Typewriter from "typewriter-effect";
import SalesTable from "@/components/SalesTable";
import AllocationTable from "@/components/AllocationTable";
import RoadmapTable from "@/components/RoadmapTable";
import PressReleaseCard from "@/components/PressReleaseCard";
import PressData from "../PressReleaseData.json";
import VideoPlayer from "@/components/VideoPlayer";
import dynamic from "next/dynamic";
import Faq from "@/components/Faq";
import TokenContract from "@/components/TokenContract";
import Roadmap from "@/components/Roadmap";
import { ScrollContext } from "@/context/ScrollContext";
import Giveawaycard from "@/components/Giveawaycard";
import "./globals.css";
import Tokenomics from "@/components/Chart";
import ExchangePartner from "@/components/ExchangePartner";

const DynamicGlobe = dynamic(() => import("@/components/Globe"), {
  ssr: false,
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [selectedTable, setSelectedTable] = useState("sales");
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const preSaleCardRef = useContext(ScrollContext);

  // Social media links
  const twitterLink = "https://twitter.com/VXLPOfficial";
  const telegramLink = "https://t.me/voxalinkproofficial";
  const discordLink = "https://discord.gg/3zuyweZubh";
  const instagramLink = "https://www.instagram.com/voxalinkpro/";
  const linkedinLink = "https://www.linkedin.com/company/voxalinkpro";

  useEffect(() => {
    setIsClient(true);

    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderTable = () => {
    switch (selectedTable) {
      case "sales":
        return <SalesTable />;
      case "allocation":
        return <AllocationTable />;
      default:
        return null;
    }
  };

  const shouldRenderGlobeSection = () => {
    return isClient && windowSize.width > 1024;
  };

  return (
    <>
      <main className="pt-[8rem] bg-[#17181d] z-0 relative overflow-hidden">
        <div className="relative">
          {/* Purple Circle - hidden on screens smaller than md */}
          <div className="hidden md:block absolute w-[50rem] h-[50rem] opacity-70 bg-[#b63fc9] rounded-full blur-[20rem] top-[-18rem] left-[-30rem]"></div>
          <div className="absolute md:top-[-10rem] md:scale-100 scale-125 right-0 top-[5rem] rotate-[135deg]">
            <Image
              src="/images/logo2.png"
              alt="Logo - Voxalink Pro"
              width={800}
              height={800}
              priority
            />
          </div>
        </div>
        {/* Content */}
        <div className="flex lg:flex-row flex-col gap-6 justify-between items-center z-10 relative mt-10 mx-5 lg:mr-[12rem] lg:ml-[8rem]">
          <div className="md:w-[40%] w-full">
            <h1 className="text-white text-[1rem] lg:text-[2.5rem] font-bold font-monument lg:text-left text-center">
              Igniting Blockchain Infused Innovation Through Speech-AI
            </h1>
            <p className="text-white text-[1rem] lg:text-[1rem] font-light lg:text-left text-center mt-4">
              Transcending Verbal Limits: Navigating Real-World Constraints by
              Interweaving Blockchain Technology With Speech AI
            </p>
            {/* Whitepaper button and social icons */}
            <div className="mt-4 flex flex-col items-center lg:items-start">
              {/* Whitepaper button with hover effect */}
              <a
                href="https://docsend.com/view/yq4t74w553fhkqg6"
                className="mb-4 inline-block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whitepaper
              </a>
              {/* Larger social icons with hover effect */}
              <div className="flex items-center space-x-4">
                <a
                  href={twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition transform duration-300"
                >
                  <Image
                    src="/Icons/x.svg"
                    alt="Twitter"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition transform duration-300"
                >
                  <Image
                    src="/Icons/telegram.svg"
                    alt="Telegram"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href={discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition transform duration-300"
                >
                  <Image
                    src="/Icons/discord.svg"
                    alt="Discord"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition transform duration-300"
                >
                  <Image
                    src="/Icons/linkedin.svg"
                    alt="Linkedin"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition transform duration-300"
                >
                  <Image
                    src="/Icons/instagram.svg"
                    alt="Instagram"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>
          <div ref={preSaleCardRef}>
            <PreSaleCard />
          </div>
        </div>
        <div className="relative">
          {/* Red Circle - hidden on screens smaller than md */}
          <div className="hidden md:block absolute w-[25rem] h-[25rem] opacity-50 bg-[#068bf8] rounded-full blur-[20rem] top-[50rem] right-0"></div>
        </div>
        {/*For the Logos Slider like binance, cointelegraph etc */}
        <div className="mt-[10rem]">
          <h2 className="text-white text-2xl font-bold text-center mb-[5rem]">
            Featured On
          </h2>
          <LogoSlider />
        </div>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-white text-3xl font-semibold mt-[10rem] mb-10">
            Our AI services
          </h1>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-[2px] rounded-3xl">
            <div className="bg-[#17181d] p-10 rounded-3xl text-left">
              <Cards />
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row flex-wrap justify-center items-center my-[5rem]">
          <div class="md:w-1/2 flex justify-center">
            <div class="md:scale-60 scale-75">
              <VideoPlayer />
            </div>
          </div>
          <div class="md:w-1/2 flex flex-col">
            <h1 class="text-white text-[30px] lg:text-[40px] text-center md:text-left">
              Here at <b>VoxaLink Pro</b> we thrive for your
            </h1>
            <div class="text-center md:text-left">
              <h1 class="font-bold py-5 text-[30px] md:text-[40px] lg:text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-[#E23E57] to-[#A91079]">
                <Typewriter
                  options={{
                    strings: ["Satisfaction", "Security", "Ease"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Light Purplish Circle - hidden on screens smaller than md */}
          <div className="hidden md:block absolute w-[25rem] h-[25rem] opacity-90 bg-[#b63fc9] rounded-full blur-[20rem] top-[10rem] right-1"></div>
          {/* Blue Circle - hidden on screens smaller than md */}
          <div className="hidden md:block absolute w-[25rem] h-[25rem] opacity-60 bg-[#4752b6] rounded-full blur-[20rem] top-[50rem] leftt-0"></div>
        </div>

        <div className="mb-[10rem]">
          <ExchangePartner />
        </div>

        <div className="flex flex-col justify-center items-center text-center my-12">
          <div className="p-8 md:p-20 rounded-2xl bg-[#333] bg-opacity-10 backdrop-blur-md flex flex-col justify-center items-center z-10 shadow-lg w-full max-w-6xl mx-auto relative overflow-hidden">
            {/* Gradient overlay for a glossy effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#555] via-[#444] to-[#333] opacity-5"></div>
            <h1 className="text-white text-2xl md:text-4xl font-bold relative">
              Tokenomics
            </h1>
            <p className="text-gray-300 relative">
              VoxaLink Pro is an ERC-20 token deployed on Ethereum mainnet. The
              total supply of $VXLP tokens is 1 billion (1,000,000,000).
            </p>
            <div className="mt-10 w-full relative">
              {isClient && (
                <div
                  className={`svg-container ${
                    windowSize.width < 768 ? "small-svg-container" : ""
                  }`}
                  style={{ width: "100%", height: "auto" }}
                >
                  <Tokenomics />
                </div>
              )}
            </div>
          </div>
        </div>

        <div id="roadmap">
          <div
            id="svgContainer"
            className="svg-container overflow-hidden mt-[8rem]"
          >
            <Roadmap />
          </div>
        </div>

        {/* Buttons and Table */}
        {/* Buttons */}
        <div className="mt-[10rem] mb-[10rem] mx-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                className={`bttn flex-shrink-0 px-6 py-2 text-white border border-purple-600 ${
                  selectedTable === "sales" ? "bg-purple-600" : "bg-transparent"
                } rounded-full mx-2 transition-all duration-500 ease-in-out relative overflow-hidden shadow-lg`}
                onClick={() => setSelectedTable("sales")}
                style={{ minWidth: "140px" }}
              >
                Sales Details
              </button>
              <button
                className={`bttn flex-shrink-0 px-6 py-2 text-white border border-purple-600 ${
                  selectedTable === "allocation"
                    ? "bg-purple-600"
                    : "bg-transparent"
                } rounded-full mx-2 transition-all duration-500 ease-in-out relative overflow-hidden shadow-lg`}
                onClick={() => setSelectedTable("allocation")}
                style={{ minWidth: "140px" }}
              >
                Allocation and Vesting
              </button>
            </div>
            <div className="w-full lg:w-[70%] mt-10">{renderTable()}</div>
          </div>
        </div>
        <div className="md:mt-[10rem] mt-[5-rem]">
          <h1 className="text-white font-bold text-4xl text-center mb-4">
            Press Release
          </h1>
          <p className="text-gray-400 text-center mb-7 mx-6">
            Latest articles and updates about VoxaLink Pro.
          </p>
          <PressReleaseCard data={PressData} />
        </div>
        {/* Section where the ICO Token Contract card is located */}
        <div className="relative pb-[15rem] pt-[5rem] md:py-[15rem] flex justify-center items-center w-full">
          <div className="bg-black/20 backdrop-blur-sm p-8 md:p-20 rounded-2xl shadow-xl max-w-6xl mx-auto relative">
            {/* Gradient overlay for a glossy effect, if needed */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20 rounded-2xl"></div>
            <TokenContract />
          </div>
        </div>

        {/* Globe Section */}
        {shouldRenderGlobeSection() && (
          <div className="mt-[2rem] p-2 flex-col items-center flex">
            {/* Light Purplish Circle - right of the Globe */}
            <div className="hidden lg:block absolute w-[20rem] h-[45rem] opacity-30 bg-[#b63fc9] rounded-full blur-[15rem] right-[-10rem]"></div>
            {/* Light bluish Circle - left of the Globe */}
            <div className="hidden lg:block absolute w-[20rem] h-[45rem] opacity-30 bg-[#4752b6] rounded-full blur-[15rem] left-[-10rem]"></div>
            <h1 className="text-2xl lg:text-[50px] p-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-center text-wrap mx-20 md:mx-0">
              Bringing The World Together
            </h1>
            <DynamicGlobe />
          </div>
        )}

        <div className="bg-[#17181D] flex flex-col justify-center items-center text-left px-10 pb-[10rem]">
          {/* Content here */}
          {/* <Giveawaycard preSaleCardRef={preSaleCardRef} /> */}
          <div className="w-full md:w-[60%] mt-[2rem]">
            <Faq />
          </div>
        </div>
      </main>
    </>
  );
}
