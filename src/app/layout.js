import "./globals.css";
import React from "react";
import ServerLayout from "./ServerLayout"; // Importing ServerLayout
import ClientLayout from "./ClientLayout"; // Importing ClientLayout

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default:
      "VoxaLink Pro - Igniting Blockchain Infused Innovation Through Speech-AI",
    template: "%s",
  },
  description: {
    default:
      "Navigating Real-World Constraints by Interweaving Blockchain Technology With Speech AI",
    template: "%s",
  },
  openGraph: {
    title:
      "VoxaLink Pro - Igniting Blockchain Infused Innovation Through Speech-AI",
    description:
      "Navigating Real-World Constraints by Interweaving Blockchain Technology With Speech AI",
    url: "https://voxalinkpro.io",
    siteName: "VoxaLink Pro",
    images: [
      {
        url: "https://images-ext-2.discordapp.net/external/ef2gA4guKuTWx83V-l-eRq0pYN9D-M7IwBM1VhRl5u8/https/www.voxalinkpro.io/images/VoxaLinkCover.png?format=webp&quality=lossless&width=963&height=506",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Layout({ children, title }) {
  return (
    <ServerLayout>
      <ClientLayout>{children}</ClientLayout>
    </ServerLayout>
  );
}
