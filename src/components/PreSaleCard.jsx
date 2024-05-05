import React, { useState, useEffect } from "react";
import LockIcon from "@mui/icons-material/Lock";
import Countdown from "react-countdown";

export default function PreSaleCard() {
  // Hardcode the target date and time in Pakistan Time Zone (PKT, UTC+5)
  const targetDate = "2023/12/27 18:00:00"; // PKT: YYYY/MM/DD HH:MM:SS format

  // Convert the PKT time to UTC time
  const utcTargetDate = new Date(targetDate + " GMT+0500");
  return (
    <div className="bg-[#6664643f] p-8 rounded-xl backdrop-blur-lg shadow-xl w-full lg:w-[35rem] h-[30rem] mx-auto mt-10 text-center flex flex-col">
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
        $VXLP ICO Sale
      </h1>
      <div className="flex text-white justify-center items-center h-full text-[2rem]">
        <Countdown date={utcTargetDate} />
        {/* <LockIcon className="text-white text-[3rem]" /> */}
      </div>
    </div>
  );
}
