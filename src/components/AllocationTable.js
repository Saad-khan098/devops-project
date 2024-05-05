import React from "react";
import styles from "../styles/TableBorder.module.css";

const AllocationTable = () => (
  <div className={styles.tableWrapper}>
    <div className={styles.gradientBorder}>
      <div className={`${styles.tableHeader} ${styles.roundedTop}`}>
        <table className="w-full text-white">
          <thead>
            <tr>
              <th
                className={`${styles.headerCell} ${styles.offeringTypeHeader}`}
              >
                Offering Type
              </th>
              <th className={`${styles.headerCell} ${styles.quantityHeader}`}>
                Quantity
              </th>
              <th className={`${styles.headerCell} ${styles.priceHeader}`}>
                Vesting Period
              </th>
              <th className={`${styles.headerCell} ${styles.raisedHeader}`}>
                Vesting Starts
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={`${styles.tableBody} ${styles.roundedBottom}`}>
        <table className="w-full text-white">
          <tbody>
            <tr>
              <td className={`${styles.bodyCell} ${styles.offeringTypeCell}`}>
                ICO Phase 1
              </td>
              <td className={`${styles.bodyCell} ${styles.quantityCell}`}>
                200,000,000
              </td>
              <td className={`${styles.bodyCell} ${styles.priceCell}`}>
                3 Months (Post-Launch)
              </td>
              <td className={`${styles.bodyCell} ${styles.raisedCell}`}>TBA</td>
            </tr>
            <tr>
              <td className={`${styles.bodyCell} ${styles.offeringTypeCell}`}>
                Pre-Sale Phase 2
              </td>
              <td className={`${styles.bodyCell} ${styles.quantityCell}`}>
                120,000,000
              </td>
              <td className={`${styles.bodyCell} ${styles.priceCell}`}>
                3 Months (Post-Launch)
              </td>
              <td className={`${styles.bodyCell} ${styles.raisedCell}`}>TBA</td>
            </tr>
            <tr>
              <td className={`${styles.bodyCell} ${styles.offeringTypeCell}`}>
                Pre-Sale Phase 3
              </td>
              <td className={`${styles.bodyCell} ${styles.quantityCell}`}>
                80,000,000
              </td>
              <td className={`${styles.bodyCell} ${styles.priceCell}`}>
                3 Month (Post-Launch)
              </td>
              <td className={`${styles.bodyCell} ${styles.raisedCell}`}>TBA</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default AllocationTable;
