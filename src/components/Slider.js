// components/LogoSlider.js

import Slider from "react-infinite-logo-slider";
import "tailwindcss/tailwind.css";

const LogoSlider = () => {
  return (
    <Slider
      width="250px"
      duration={20}
      pauseOnHover={false}
      blurBorders={false}
      blurBoderColor={"#fff"}
    >
      {/* <Slider.Slide>
        <img src="/logos/bloomberg.svg" alt="any" className="w-[13rem]" />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos/bitcoin_insider.svg"
          alt="any2"
          className="w-[13rem]"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/logos/buisness_news.svg" alt="any3" className="w-[13rem]" />
      </Slider.Slide> */}
      <Slider.Slide>
        <img
          src="/logos/CoinGabber.png"
          alt="Coin Gabber - VoxaLink_Pro"
          className="w-[13rem]"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos/IcoHolder.png"
          alt="Ico Holder - VoxaLink_Pro"
          className="w-[13rem]"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos/IcoHotList.png"
          alt="ICO Hot List - VoxaLink_Pro"
          className="w-[13rem]"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos/CryptoToEm.png"
          alt="CryptoToTem - VoxaLink_Pro"
          className="w-[13rem]"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos/IcoDrops.png"
          alt="Ico Drops - VoxaLink_Pro"
          className="w-[13rem]"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos/CryptoCom.png"
          alt="Crypto.com - VoxaLink_Pro"
          className="w-[13rem]"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos/Medium.png"
          alt="Medium - VoxaLink_Pro"
          className="w-[13rem]"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="/logos/binance.svg"
          alt="Binance - VoxaLink_Pro"
          className="w-[13rem]"
        />
      </Slider.Slide>
      {/* <Slider.Slide>
        <img src="/logos/crypto_daily.svg" alt="any3" className="w-[13rem]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/logos/crypto_news.svg" alt="any3" className="w-[13rem]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/logos/investing.svg" alt="any3" className="w-[13rem]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/logos/marketwatch.svg" alt="any3" className="w-[13rem]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/logos/DigitalJournal.svg" alt="any3" className="w-[13rem]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/logos/cointelegraph.svg" alt="any3" className="w-[13rem]" />
      </Slider.Slide>
      <Slider.Slide>
        <img src="/logos/techbullion.svg" alt="any3" className="w-[13rem]" />
      </Slider.Slide> */}
    </Slider>
  );
};

export default LogoSlider;
