import { useState } from 'react';
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(''); // '' | 'success' | 'failure'

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submit action
    setSubmissionStatus(''); // Reset status on new submission
    try {
      const response = await fetch('https://api.voxalinkpro.io/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setEmail(''); // Optionally clear the input on success
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      setSubmissionStatus('failure');
    }
  };

  // Determine button class based on submission status
  const buttonClass = `mt-2 w-full sm:w-auto font-bold py-2 px-4 rounded-full transition-colors duration-300 ${submissionStatus === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'} ${submissionStatus === 'failure' ? 'bg-red-600 hover:bg-red-700 text-white' : ''}`;

  return (
    <>
      <footer className="bg-black text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col text-center items-center">
          {/* Navigation links */}
          <nav className="mb-4">
            <ul className="flex flex-wrap justify-center gap-4 font-semibold">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="https://docsend.com/view/yq4t74w553fhkqg6" target="_blank">Whitepaper</Link>
              </li>
              <li>
                <Link href="https://docsend.com/view/sqayi93w7egrec6x" target="_blank">Privacy Policy</Link>
              </li>
              <li>
                <Link href="https://docsend.com/view/rpydwt3ih4452igc" target="_blank">ToS</Link>
              </li>
              <li>
                <Link href="https://www.voxalinkpro.com/" target="_blank">Academy</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Disclaimer */}
          <div className="text-center my-4">
            <p className="text-xs">
              Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may fluctuate. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
            </p>
          </div>

          {/* Divider */}
          <hr className="border-gray-600 w-full my-4" />

          {/* Newsletter subscription form */}
          <div className="mt-8 w-full max-w-md px-4 py-6 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-center mb-4">Subscribe to Our Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={buttonClass}>{submissionStatus === 'success' ? 'Subscribed!' : 'Subscribe'}</button>
            </form>
          </div>

          {/* Copyright and contact info */}
          <div>
            <p className="mb-4">
              {currentYear} © VoxaLinkPro | All Rights Reserved
            </p>
            <a href="mailto:info@voxalinkpro.io">
              <p>info@voxalinkpro.io</p>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://twitter.com/VXLPOfficial" className="hover:text-white transition-colors" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://t.me/voxalinkpro" className="hover:text-white transition-colors" target="_blank">
              <TelegramIcon />
            </a>
            <a href="https://discord.gg/3zuyweZubh" className="hover:text-white transition-colors" target="_blank">
              <Image src="/Icons/discord.png" alt="Discord" width={25} height={25} className="filter grayscale-[50%] hover:grayscale-0 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/voxalinkpro" className="hover:text-white transition-colors" target="_blank">
              <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/voxalinkpro/" className="hover:text-white transition-colors" target="_blank">
              <InstagramIcon />
            </a>
            {/* ... other icons */}
          </div>
        </div>
      </footer>
    </>
  );
}
