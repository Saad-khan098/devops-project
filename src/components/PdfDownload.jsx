
import { Badge, Tooltip } from "@mui/material";
import styles from "../styles/PdfDownload.module.css"
import { useEffect, useRef, useState } from "react";
import DoneIcon from '@mui/icons-material/Done';
import { lightGreen } from '@mui/material/colors';

function PdfDownload({ selected, setSelected }) {
    const [isHovered, setHovered] = useState(false);


    return (
        <>
            <Tooltip title='Select PDF format' placement="bottom" arrow>
                <Badge invisible={selected === 'pdf' ? false : true} badgeContent={<DoneIcon sx={{ color: lightGreen['A400'] }} />} >
                    <div style={{ cursor: "pointer" }} onClick={() => setSelected('pdf')}>
                        <svg onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className={styles.Layer1} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }} viewBox="0 0 354.72 466.09">
                            <defs>
                                <linearGradient id="New_Gradient_Swatch" data-name="New Gradient Swatch" x1="0" y1="233.05" x2="354.72" y2="233.05" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#c51d6e" />
                                    <stop offset="1" stop-color="#eb2fb2" />
                                </linearGradient>
                                <linearGradient id="New_Gradient_Swatch-2" data-name="New Gradient Swatch" x1="108.63" y1="199.57" x2="243.7" y2="199.57" />
                            </defs>
                            <path className={`${styles.cls3} ${isHovered && styles.animated}`} d="M8.5,30.4V438.29s.88,15.79,17.54,19.3H329.55s14.91-3.51,16.67-19.3V105.84s-.17-5.56-6.5-12.28L261.39,15.62s-7.12-7.12-18.4-7.12H29.17s-20.67,.35-20.67,17.46v4.44Z" />
                            <path className={styles.cls2} d="M141.52,195.23v-55.38s-.86-9.1,9.76-8.51l56.6-.03s6.92-1.36,6.82,7.74v56.18h24.53s4.65-.89,4.45,3.96-2.27,6.82-2.27,6.82l-56.97,57.36s-7.71,10.19-12.56,0l-55.19-55.88s-18.16-13.32,0-12.79,24.82,.53,24.82,.53Z" />
                            <text className={styles.cls1} transform="translate(67.91 434.57) scale(1.16 1)"><tspan x="0" y="-40">PDF</tspan></text>
                        </svg>
                    </div>
                </Badge>
            </Tooltip>
        </>
    )
}

export default PdfDownload
