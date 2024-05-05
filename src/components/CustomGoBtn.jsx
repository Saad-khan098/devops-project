import { Tooltip } from "@mui/material";
import styles from "../styles/CustomGo.module.css";
function CustomGoBtn({ startTranscribe }) {
  return (
    <div>
      <Tooltip title="Start transcribing" placement="bottom" arrow>
        <button
          onClick={startTranscribe}
          className={styles.glowingbtn}
        >
          <span class={styles.glowingtxt}>
            V<span class={styles.faultyletter}>O</span>XA
          </span>
        </button>
      </Tooltip>
    </div>
  );
}

export default CustomGoBtn;
