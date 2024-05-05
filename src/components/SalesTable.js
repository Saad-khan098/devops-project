import React from "react";
import styles from "../styles/TableBorder.module.css";

const SalesTable = () => (
  <div className={styles.tableWrapper}>
    <div className={styles.gradientBorder}>
      <div className={`${styles.tableHeader} ${styles.roundedTop}`}>
        <table className="w-full">
          <thead>
            <tr>
              <th className={`${styles.headerCell} ${styles.offeringTypeHeader} ${styles.leftAligned}`}>Offering Type</th>
              <th className={`${styles.headerCell} ${styles.quantityHeader} ${styles.centerAligned}`}>Quantity</th>
              <th className={`${styles.headerCell} ${styles.priceHeader} ${styles.rightAligned}`}>Price</th>
              <th className={`${styles.headerCell} ${styles.raisedHeader} ${styles.centerAligned}`}>Raised</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={`${styles.tableBody} ${styles.roundedBottom}`}>
        <table className="w-full">
          <tbody>
            <tr>
              <td className={`${styles.bodyCell} ${styles.offeringTypeCell} ${styles.leftAligned}`}>ICO</td>
              <td className={`${styles.bodyCell} ${styles.quantityCell} ${styles.centerAligned}`}>200,000,000</td>
              <td className={`${styles.bodyCell} ${styles.priceCell} ${styles.rightAligned}`}>$0.05</td>
              <td className={`${styles.bodyCell} ${styles.raisedCell} ${styles.centerAligned}`}>-</td>
            </tr>
            <tr>
              <td className={`${styles.bodyCell} ${styles.offeringTypeCell} ${styles.leftAligned}`}>Pre-Sale 1</td>
              <td className={`${styles.bodyCell} ${styles.quantityCell} ${styles.centerAligned}`}>120,000,000</td>
              <td className={`${styles.bodyCell} ${styles.priceCell} ${styles.rightAligned}`}>$0.065</td>
              <td className={`${styles.bodyCell} ${styles.raisedCell} ${styles.centerAligned}`}>-</td>
            </tr>
            <tr>
              <td className={`${styles.bodyCell} ${styles.offeringTypeCell} ${styles.leftAligned}`}>Pre-Sale 2</td>
              <td className={`${styles.bodyCell} ${styles.quantityCell} ${styles.centerAligned}`}>80,000,000</td>
              <td className={`${styles.bodyCell} ${styles.priceCell} ${styles.rightAligned}`}>$0.08</td>
              <td className={`${styles.bodyCell} ${styles.raisedCell} ${styles.centerAligned}`}>-</td>
            </tr>
            <tr>
              <td className={`${styles.bodyCell} ${styles.offeringTypeCell} ${styles.leftAligned}`}>Listing Price</td>
              <td className={`${styles.bodyCell} ${styles.quantityCell} ${styles.centerAligned}`}>-</td>
              <td className={`${styles.bodyCell} ${styles.priceCell} ${styles.rightAligned}`}>$0.095</td>
              <td className={`${styles.bodyCell} ${styles.raisedCell} ${styles.centerAligned}`}>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default SalesTable;



