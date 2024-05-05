"use client";
import { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const preSaleCardRef = useRef(null);
  const giftCardRef = useRef(null);

  return (
    <ScrollContext.Provider value={{ preSaleCardRef, giftCardRef }}>
      {children}
    </ScrollContext.Provider>
  );
};
