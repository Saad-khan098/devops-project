"use client";
import React from "react";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { ScrollProvider } from "@/context/ScrollContext";
import { mainnet, sepolia } from "wagmi/chains";
// import config from '../../pages/api/config'

const chains = [mainnet];

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    infuraId: process.env.NEXT_PUBLIC_INFURA_ID, // or infuraId
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_PROJECT,
    chains,
    // Required
    appName: "VoxaLink Pro",

    // Optional
    appDescription: "Ethereum's First AI Voice  Application",
    appUrl: "https://www.voxalinkpro.io/", // your app's url
    appIcon:
      "https://images-ext-2.discordapp.net/external/ef2gA4guKuTWx83V-l-eRq0pYN9D-M7IwBM1VhRl5u8/https/www.voxalinkpro.io/images/VoxaLinkCover.png?format=webp&quality=lossless&width=963&height=506", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

export default function ClientLayout({ children }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <ScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </ScrollProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
