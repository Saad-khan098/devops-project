"use client";
import { useContext, useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Menu from "./menu";
import { ScrollContext } from "@/context/ScrollContext";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { signMessage } from "@wagmi/core";

const Navbar = () => {
  const preSaleCardRef = useContext(ScrollContext);
  const { isConnected, address } = useAccount();
  const [wasConnected, setWasConnected] = useState(isConnected);
  const [showServices, setShowServices] = useState(false);
  const servicesMenuRef = useRef(null);

  // Function to open the dropdown
  const openServicesMenu = () => {
    setShowServices(true);
  };

  // Function to close the dropdown
  const closeServicesMenu = () => {
    setShowServices(false);
  };

  const scrollToPreSaleCard = () => {
    if (preSaleCardRef && preSaleCardRef.current) {
      preSaleCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="bg-[#66646411] backdrop-blur-md p-3 md:p-4 fixed w-full"
      style={{ zIndex: 5 }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="lg:hidden">
            <Menu />
          </div>
          <Link href="/">
            <img
              src="/images/navlogo.png"
              className="md:w-[250px] w-[180px] transform -translate-x-2"
              alt="VoxaLink Pro"
            />
          </Link>
          <div className="hidden lg:flex space-x-8 ml-10 text-md">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link
              href="https://docsend.com/view/yq4t74w553fhkqg6"
              className="text-white hover:text-gray-300"
              target="_blank"
            >
              Whitepaper
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
            <div
              className="relative text-white"
              onMouseEnter={openServicesMenu}
              onMouseLeave={closeServicesMenu}
            >
              <button className="text-white focus:outline-none hover:text-gray-300">
                Services
              </button>
              {showServices && (
                <div
                  className="absolute left-0 w-48 bg-[#81818185] rounded-md shadow-lg z-50 backdrop-blur-md"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={closeServicesMenu}
                  ref={servicesMenuRef}
                >
                  <Link
                    href="/aitranscriber"
                    className="block px-4 py-2 text-sm text-white hover:bg-[#42424285] rounded-md"
                  >
                    AI Transcriber
                  </Link>
                  {/* ... other service links */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-6 lg:gap-6">
          <ConnectKitButton />
          <button
            className="bg-[#7d4daf] hover:bg-[#513074] text-md hidden md:block text-white px-5 py-[0.1rem] md:py-[0.09rem] rounded-xl mr-4 h-10"
            onClick={scrollToPreSaleCard}
          >
            Buy $VXLP
          </button>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-[1px]"
        style={{
          background:
            "linear-gradient(to right, transparent, #87879b, transparent)",
        }}
      />
    </nav>
  );
};

export default Navbar;
