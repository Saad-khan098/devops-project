import React from "react";
import Image from "next/image";
import Link from "next/link";
import LockIcon from "@mui/icons-material/Lock";

const ExchangePartner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#94949425] h-auto px-10 lg:py-[4rem] py-[5rem] w-full lg:w-[72rem] rounded-lg">
        <h1 className="text-white font-bold text-3xl text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E23E57] to-[#A91079]">
            Official
          </span>
          &nbsp;Exchange Partners
        </h1>
        <div className="mt-16 flex relative lg:flex-row flex-wrap flex-col items-center lg:justify-between mx-10 lg:space-y-0 space-y-16">
          <Link href="https://p2pb2b.com/token-sale/VXLP-624/" target="_blank">
            <div className="bg-[#00000054] transition backdrop-blur-lg w-[15rem] h-[20rem] rounded-xl hover:scale-105">
              <div className="flex items-center justify-center w-full h-2/3">
                <Image
                  src="/logos/P2PB2B.png"
                  layout="fixed"
                  width={150}
                  height={100}
                />
              </div>
              <div className="bg-green-900 w-full h-1/3 flex items-center justify-center rounded-b-xl">
                <h1 className="text-white font-bold text-3xl">P2PB2B</h1>
              </div>
            </div>
          </Link>

          <Link href="#">
            <div className="relative bg-[#00000054] transition w-[15rem] h-[20rem] rounded-xl hover:scale-105">
              {/* LockIcon centered within the card */}
              <div className="absolute inset-0 flex justify-center items-center">
                <LockIcon className="text-white text-[3rem]" />
              </div>
              <div className="flex items-center justify-center w-full h-2/3">
                <Image
                  src="/logos/kucoin.png"
                  className="opacity-10 blur-md select-none"
                  layout="fixed"
                  width={150}
                  height={100}
                />
              </div>
              <div className="bg-[#6b0d39] w-full h-1/3 flex items-center justify-center rounded-b-xl">
                <h1 className="text-white font-bold text-3xl blur-md">
                  UPCOMING
                </h1>
              </div>
            </div>
          </Link>

          <Link href="#">
            <div className="relative bg-[#00000054] transition w-[15rem] h-[20rem] rounded-xl hover:scale-105">
              {/* LockIcon centered within the card */}
              <div className="absolute inset-0 flex justify-center items-center">
                <LockIcon className="text-white text-[3rem]" />
              </div>
              <div className="flex items-center justify-center w-full h-2/3">
                <Image
                  src="/logos/mexc.png"
                  className="opacity-10 blur-md"
                  layout="fixed"
                  width={150}
                  height={100}
                />
              </div>
              <div className="bg-[#411466] w-full h-1/3 flex items-center justify-center rounded-b-xl">
                <h1 className="text-white font-bold text-3xl blur-md">
                  UPCOMING
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExchangePartner;
