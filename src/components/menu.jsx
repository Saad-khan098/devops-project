import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServicesClick = () => {
    // Toggle the services submenu
    setServicesOpen(!servicesOpen);
  };

  // Determine the rotation and margin for the icon
  const iconStyle = {
    transform: servicesOpen ? "rotate(0deg)" : "rotate(-90deg)",
    marginLeft: "8px", // Adjust the gap size as needed,
  };

  return (
    <>
      <div className="relative z-50">
        <Hamburger
          toggled={open}
          toggle={setOpen}
          size={25}
          duration={0.5}
          color="#fff"
        />
      </div>

      {open && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black backdrop-blur-lg font-semibold text-white text-center flex items-center justify-center text-2xl z-40">
          <div className="flex flex-col h-full w-full justify-center gap-8">
            <Link href="/">
              <span
                className="text-white cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Home
              </span>
            </Link>
            <Link
              href="https://docsend.com/view/yq4t74w553fhkqg6"
              className="text-white"
              onClick={() => setOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </Link>
            <div>
              <span
                className="text-white cursor-pointer flex justify-center items-center ml-6"
                onClick={handleServicesClick}
              >
                Services
                <ArrowDropDownIcon style={iconStyle} />
              </span>
              {/* Submenu for Services */}
              {servicesOpen && (
                <div className="flex flex-col mt-2">
                  <Link href="/aitranscriber">
                    <span
                      className="text-white cursor-pointer font-thin text-[20px]"
                      onClick={() => setOpen(false)}
                    >
                      AI Transcriber
                    </span>
                  </Link>
                  {/* ... other service links */}
                </div>
              )}
            </div>
            <Link href="/contact">
              <span
                className="text-white cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
