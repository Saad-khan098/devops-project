import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Countdown from "react-countdown";
import styles from "../styles/Input.module.css";
import { ConnectKitButton } from "connectkit";
import { ethers } from "ethers";
import { parseEther } from "viem";
import CircularProgress from "@mui/material/CircularProgress";
import TokenModal from "@/components/TokenModal";
import { toast } from "sonner";

import abi from "../../constants/abi";

const contractAddress =
  "0x30f5226edDdd3487EF824F2a814E1573E0C643E4"; /* Your Contract Address */

import { prepareWriteContract, writeContract, readContract } from "@wagmi/core";

import { useAccount, useBalance } from "wagmi";

export default function PreSaleCard() {
  //Loading bar constants
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const phaseStartDates = ["2023-12-20", "2024-02-06", "2024-03-08"]; // Array of phase start dates
  const phaseEndDates = ["2024-02-05", "2024-03-07", "2024-03-28"]; // Array of phase end dates
  const [progress, setProgress] = useState(0);

  const { address, isConnected } = useAccount();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const phaseStartDate = new Date(phaseStartDates[currentPhaseIndex]);
      const phaseEndDate = new Date(phaseEndDates[currentPhaseIndex]);
      const totalDuration = phaseEndDate - phaseStartDate;
      const timePassed = now - phaseStartDate;

      let newProgress = (timePassed / totalDuration) * 100;
      newProgress = Math.min(Math.max(newProgress, 0), 100); // Clamp between 0 and 100

      setProgress(newProgress);

      if (now >= phaseEndDate) {
        const nextIndex = currentPhaseIndex + 1;
        if (nextIndex < phaseEndDates.length) {
          setCurrentPhaseIndex(nextIndex);
          // Reset progress bar for the next phase
          setProgress(0);
        } else {
          // If it's the last phase, stop the interval
          clearInterval(interval);
        }
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [currentPhaseIndex, phaseStartDates, phaseEndDates]);

  const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span>Phase ended</span>;
    } else {
      // Render a countdown
      return (
        <span className="space-x-1 md:space-x-3 md:text-md text-sm">
          <span className="text-xl md:text-2xl font-bold mx-1">{days}</span>{" "}
          DAYS
          <span className="text-xl md:text-2xl font-bold mx-1">
            {hours}
          </span>{" "}
          HOURS
          <span className="text-xl md:text-2xl font-bold mx-1">
            {minutes}
          </span>{" "}
          MINUTES
          <span className="text-xl md:text-2xl font-bold mx-1">
            {seconds}
          </span>{" "}
          SECONDS
        </span>
      );
    }
  };

  const [selectedOption, setSelectedOption] = useState("USDT");
  const [currentTokenPriceUSD, setCurrentTokenPriceUSD] = useState(0.05); // Default token price in USD
  const [usdToPay, setUsdToPay] = useState("");
  const [ETHPriceUSD, setETHPriceUSD] = useState("");
  const [tokensToReceive, setTokensToReceive] = useState("");
  const [ethToPay, setEthToPay] = useState("");
  const [fundsRaised, setFundsRaised] = useState("");
  const [isFundsRaisedLoading, setIsFundsRaisedLoading] = useState(true); // New state for loading status
  const [errorMessage, setErrorMessage] = useState("");

  const [transactionStatus, setTransactionStatus] = useState("idle"); // idle, loading, success

  const [isModalShown, setIsModalShown] = useState(false);

  useEffect(() => {
    // Check if the wallet is connected and the modal has not been shown before
    if (isConnected && !localStorage.getItem("modalShown")) {
      setIsModalShown(true);
      // Set a flag in localStorage
      localStorage.setItem("modalShown", "true");
    }
  }, [isConnected]);

  // Call this function when you want to close the modal
  const handleCloseModal = () => {
    setIsModalShown(false);
  };

  useEffect(() => {
    // Fetch ETH price when the component mounts
    const fetchETHPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
        );
        const data = await response.json();
        setETHPriceUSD(data.ethereum.usd);
      } catch (error) {
        console.error("Error fetching ETH price:", error);
      }
    };

    fetchETHPrice();

    // Other existing useEffect code
    // ...
  }, []); // Add dependencies as needed

  const calculateEquivalent = (inputValue, inputType) => {
    let usdAmount, ethAmount, tokenAmount;

    switch (inputType) {
      case "usd":
        usdAmount = parseFloat(inputValue);
        tokenAmount = usdAmount / currentTokenPriceUSD;
        ethAmount = usdAmount / ETHPriceUSD;
        break;
      case "eth":
        ethAmount = parseFloat(inputValue);
        usdAmount = ethAmount * ETHPriceUSD;
        tokenAmount = usdAmount / currentTokenPriceUSD;
        break;
      case "token":
        tokenAmount = parseFloat(inputValue);
        usdAmount = tokenAmount * currentTokenPriceUSD;
        ethAmount = usdAmount / ETHPriceUSD;
        break;
      default:
        return;
    }

    setUsdToPay(usdAmount);
    setTokensToReceive(tokenAmount);
    setEthToPay(ethAmount);
    // Add a new state variable for ETH amount if needed
  };

  useEffect(() => {
    const fundsRaisedWei = async () => {
      try {
        setIsFundsRaisedLoading(true); // Set loading to true

        const fundsRaised = await readContract({
          address: contractAddress,
          abi: abi,
          functionName: "getFundsRaisedByPhase",
        });

        // Convert wei to ether
        const fundsRaisedEther = Number(ethers.utils.formatEther(fundsRaised[0]));
        
        console.log(fundsRaisedEther);

        // Convert ether to USD
        const ethPrice = parseFloat(ETHPriceUSD); // Convert string to number
        const fundsRaisedUSD =
          ethPrice > 0 ? Number(fundsRaisedEther * ethPrice) : 0;

        setFundsRaised(fundsRaisedUSD.toFixed(2));
      } catch (error) {
        console.error("Error fetching token balance:", error);
        setFundsRaised("Error");
      } finally {
        setIsFundsRaisedLoading(false); // Set loading to false in both success and error scenarios
      }
    };

    // Parse ETHPriceUSD to float and check if it's greater than zero
    if (ETHPriceUSD && parseFloat(ETHPriceUSD) > 0) {
      fundsRaisedWei();
    }
  }, [ETHPriceUSD]); // Ensure useEffect runs whenever ETHPriceUSD changes

  const balance = useBalance({
    address: "0x1579CbB942a94f439a8b81924d13069799572ac0",
    formatUnits: "ether",
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (selectedOption === "USDT") {
      calculateEquivalent(value, "usd");
    } else if (selectedOption === "ETH") {
      calculateEquivalent(value, "eth");
    }
  };

  const handleTokenChange = (event) => {
    calculateEquivalent(event.target.value, "token");
  };

  const [tokenBalance, setTokenBalance] = useState(null);

  useEffect(() => {
    const fetchTokenBalance = async () => {
      try {
        const balance = await readContract({
          address: contractAddress,
          abi: abi,
          functionName: "getTokenBalance",
          args: [address],
        });

        // Assuming the balance is returned as a BigNumber, convert it to a string
        setTokenBalance(ethers.utils.formatEther(balance));
      } catch (error) {
        console.error("Error fetching token balance:", error);
        setTokenBalance("Error");
      }
    };

    if (isConnected) {
      fetchTokenBalance();
    }
  }, [isConnected]); // Add other dependencies as required

  const stringEthToPay = ethToPay.toString();
  console.log(stringEthToPay);

  const handleBuyClick = async () => {
    try {
      // Check if the USD amount to pay is less than $10
      if (parseFloat(usdToPay) < 10) {
        // setErrorMessage("Minimum buy is $10");
        toast.error("Minimum buy is $10");
        return; // Exit the function early
      }

      setTransactionStatus("loading"); // Set status to loading when the transaction starts
      // Prepare the contract write operation
      const config = await prepareWriteContract({
        address: contractAddress,
        abi: abi,
        functionName: "buyTokens",
        value: parseEther(stringEthToPay),
        onSuccess(data) {
          setTransactionStatus("success");
          console.log("Transaction successful:", data);
          refetchTokenBalance(); // Refetch token balance after successful purchase
        },
        onError(error) {
          setTransactionStatus("idle");
          console.error("Transaction error:", error);
        },
      });

      // Execute the contract write operation
      const { hash } = await writeContract(config);
      setTransactionStatus("success");

      setTimeout(() => {
        setTransactionStatus("idle");
      }, 2000); // 2000 milliseconds = 2 seconds

      // Handle the successful transaction here
      // e.g., show a success message, update the state, etc.
    } catch (error) {
      // Handle any errors that occur during the transaction
      setTransactionStatus("idle");
      console.error("Error during the contract transaction:", error);
      if (error.message.includes("insufficient funds")) {
        // setErrorMessage("Insufficient funds for the transaction.");
        toast.error("Insufficient funds for the transaction.");
      } else {
        console.error("Error during the contract transaction:", error);
      }
    }
  };

  // useEffect(() => {
  //   if (errorMessage) {
  //     const timer = setTimeout(() => {
  //       setErrorMessage("");
  //     }, 5000); // 5000 milliseconds = 5 seconds

  //     return () => clearTimeout(timer); // Clear the timeout if the component unmounts
  //   }
  // }, [errorMessage]); // Dependency array with errorMessage

  console.log("Token Balance:", tokenBalance);

  console.log(address);

  return (
    <div className="bg-[#6664643f] p-8 rounded-xl backdrop-blur-lg shadow-xl w-full lg:w-[35rem] mx-auto mt-10 text-center">
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
        $VXLP Pre-Sale
      </h1>
      <div className="text-white mt-10">
        <Countdown
          date={new Date(phaseEndDates[currentPhaseIndex])}
          renderer={CountdownRenderer}
        />
      </div>
      <div className="my-4 md:my-8 relative w-full">
        <ProgressBar
          baseBgColor="#A8A1A1" // Light grey background for the progress bar
          height="28px" // Set the height of the progress bar
          width="100%" // Set the width to 100% of the container
          transitionDuration="0.2s" // Transition duration for the loading bar animation
          transitionTimingFunction="ease-in-out" // Transition timing function
          borderRadius="50px" // Rounded borders
          animateOnRender // Animates the progress bar when it first renders
          completed={progress}
          isLabelVisible={false} // No label visible
          bgColor="#E03D59"
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-sm lg:text-lg font-bold">
          Until Next Price $0.065
        </h2>
      </div>
      {/* <div className="text-white text-md md:text-lg mb-4">
        USD Raised: 9520.25
      </div> */}
      <div className="text-white text-md md:text-lg mb-4">
        USD Raised:{" "}
        {isFundsRaisedLoading
          ? "Loading..."
          : fundsRaised !== "0.00"
          ? fundsRaised
          : "Error"}
      </div>
      <div className="text-white text-sm md:text-md  mb-4">
        Listing price: $0.095
      </div>
      <TokenModal isOpen={isModalShown} onClose={handleCloseModal} />
      <div className="text-white text-lg md:text-xl mb-4">
        1 $VXLP = ${currentTokenPriceUSD}
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {/* ETH Button */}
        <button
          onClick={() => setSelectedOption("ETH")}
          className={`p-2 rounded ${
            selectedOption === "ETH"
              ? "bg-[#778af3] text-white border-none"
              : "bg-transparent text-white border border-white"
          } hover:${selectedOption !== "ETH" ? "bg-[#778af3]" : ""}`}
        >
          ETH
        </button>

        {/* USDT Button */}
        <button
          onClick={() => setSelectedOption("USDT")}
          className={`p-2 rounded ${
            selectedOption === "USDT"
              ? "bg-[#26A17B] text-white border-none"
              : "bg-transparent text-white border border-white"
          } hover:${selectedOption !== "USDT" ? "bg-[#26A17B]" : ""}`}
        >
          USDT
        </button>
      </div>
      <div className="mb-4 text-white">
        Amount in {selectedOption} You Pay in ETH:
        <input
          className={`${styles.numberToText} bg-white text-slate-800 pl-2 py-1 md:p-2 rounded w-full mt-2`}
          type="number"
          value={selectedOption === "USDT" ? usdToPay : usdToPay / ETHPriceUSD}
          onChange={handleInputChange}
          step="0.01"
          inputmode="numeric"
        />
      </div>
      <div className="mb-4 text-white">
        Amount in VXLP You Receive:
        <input
          className={`${styles.numberToText} bg-white text-slate-800 pl-2 py-1 md:p-2 rounded w-full mt-2`}
          type="number"
          value={tokensToReceive}
          onChange={handleTokenChange}
          step="0.01"
          inputmode="numeric"
        />
      </div>
      {/* Conditional rendering based on wallet connection */}
      {isConnected ? (
        <>
          <button
            className="bg-pink-500 hover:bg-pink-800 text-white w-full px-4 py-2 rounded shadow-md mb-2 flex justify-center items-center"
            onClick={handleBuyClick}
            disabled={transactionStatus === "loading"}
          >
            {transactionStatus === "idle" && "Buy VXLP"}
            {transactionStatus === "loading" && (
              <>
                <span className="ml-2">Approve from Wallet</span>
                <CircularProgress
                  size={22}
                  color="inherit"
                  style={{ marginLeft: "10px" }}
                />
              </>
            )}
            {transactionStatus === "success" && "Transaction Successful"}
          </button>
          <p className="text-white mt-2">
            You have{" "}
            <span className="text-cyan-300">
              {tokenBalance
                ? parseFloat(tokenBalance).toFixed(2)
                : "Loading..."}
            </span>{" "}
            $wVXLP
          </p>
          <p className="mt-2 text-red-500">{errorMessage}</p>
        </>
      ) : (
        <ConnectKitButton /> // Component to connect the wallet
      )}
    </div>
  );
}
