import React from "react";
import styles from "../styles/TokenContract.module.css"; // Ensure this points to the correct CSS file

export default function TokenContract() {
  const contractDetails = {
    address: "0xA7b9D58896Fccb5B56C680547D4Db74f3Aa3C6d5",
    decimal: "18",
    network: "ETH-Chain",
    tokenSymbol: "$wVXLP",
  };

  const contractDetails2 = {
    address: "TBA",
    decimal: "18",
    network: "ETH-Chain",
    tokenSymbol: "$VXLP",
  };

  return (
    <div className={styles.neonGlow}>
      {/* The cardStyle object from earlier has been moved into the CSS module */}
      <div className={`${styles.tokenCard}`}>
        <h2 className="text-2xl font-semibold mb-4">ICO Token Contract</h2>
        <p className="text-sm mb-6">
          Use the contract information below to add the{" "}
          {contractDetails.tokenSymbol} token to your wallet.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="break-all">{contractDetails.address}</p>
          </div>
          <div>
            <h3 className="font-semibold">Decimal</h3>
            <p>{contractDetails.decimal}</p>
          </div>
          <div>
            <h3 className="font-semibold">Network</h3>
            <p>{contractDetails.network}</p>
          </div>
          <div>
            <h3 className="font-semibold">Token Symbol</h3>
            <p>{contractDetails.tokenSymbol}</p>
          </div>
        </div>
        <p className="text-xs text-red-500 mt-4">
          Please note that you should not send any tokens to this address, as
          doing so may result in the permanent loss of the tokens.
        </p>
      </div>
    </div>
  );
}