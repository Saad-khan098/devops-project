import React from "react";
import styles from "../styles/TableBorder.module.css";

const RoadmapTable = () => (
  <div className={`${styles.gradientBorderWrapper} overflow-hidden rounded-xl`}>
    <div className={`${styles.innerWrapper} overflow-x-auto`}>
      <table className="min-w-full">
        <thead className="bg-gradient-to-r from-purple-400 to-pink-500">
          <tr className="text-white">
            <th className="p-3 rounded-tl-xl">Icon</th>
            <th className="p-3 text-left min-w-[140px]">Offering Type</th>
            <th className="p-3 text-left min-w-[100px]">Quantity</th>
            <th className="p-3 text-left min-w-[100px]">Price</th>
            <th className="p-3 text-left min-w-[100px]">Raise</th>
            <th className="p-3 text-left rounded-tr-xl">Marketcap</th>
          </tr>
        </thead>
        <tbody className="text-white bg-slate-800">
          {/* Wrap each row in a div that applies the innerWrapper style */}
          <tr>
            <td className="p-3 text-center">🔥</td>
            <td className="p-3 text-left">Roadmap</td>
            <td className="p-3 text-left">1,000</td>
            <td className="p-3 text-left">$0.10</td>
            <td className="p-3 text-left">$100,000</td>
            <td className="p-3 text-left"> - </td>
          </tr>
          {/* Repeat the above tr for each row, changing the content as necessary */}
          <tr>
            <td className="p-3 text-center">✨</td>
            <td className="p-3 text-left">Series A</td>
            <td className="p-3 text-left">500</td>
            <td className="p-3 text-left">$1.00</td>
            <td className="p-3 text-left">$500,000</td>
            <td className="p-3 text-left"> - </td>
          </tr>
          {/* Add as many rows as needed */}
        </tbody>
      </table>
    </div>
  </div>
);

export default RoadmapTable;
