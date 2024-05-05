import { useEffect, useRef, useState } from "react";
import styles from "../styles/VoxaLogo.module.css"

function VoxaLogo() {
    const lineRef = useRef(null);
    const vRef = useRef(null);
    const [isPaused, setPaused] = useState(false);

    useEffect(() => {
        const handleAnimationIteration = () => {
            setPaused(true);

            // Wait for a brief moment before restarting the animation
            setTimeout(() => {
                setPaused(false);
            }, 2000); // Adjust the duration to your needs
        };

        const drawStrokeElement = lineRef.current;
        console.log('Total Length: ', drawStrokeElement.getTotalLength())
        drawStrokeElement.addEventListener('animationiteration', handleAnimationIteration);

        // Cleanup event listener on component unmount
        return () => {
            drawStrokeElement.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, [lineRef.current]);
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.2 153.32">
                <defs>
                    <linearGradient id="New_Gradient_Swatch" data-name="New Gradient Swatch" x1="24.37" y1="53.53" x2="138.61" y2="53.53" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#ed1c8f" />
                        <stop offset="1" stop-color="#ed2224" />
                    </linearGradient>
                </defs>
                <g id="Layer_1" data-name="Layer 1">
                    <path ref={lineRef} className={`${styles.cls2} ${isPaused ? styles.paused : ''}`} d="M24.37,56.21H62.54V30.3s-.17-7.05,7.23-6.53c0,0,6.68-.46,6.75,5.87V94.85s.35,8.57,9.04,7.65c0,0,6.25-1.38,6.12-8.7V10.98s-.73-6.86,7.12-6.46c0,0,6.88-.53,6.8,7.12V60.79h33" />
                </g>
                <g id="Layer_2" data-name="Layer 2">
                    <path ref={vRef} className={`${styles.cls1} ${isPaused ? styles.paused : ''}`} d="M6.89,18.27l10.6,18.52,8.32,14.14,8.73,15.14,10.58,18.32,16.42,28.44,18.2,31.52s2.89,6.69,6.75,0l8.9-15.4,10.02-17.36,17.24-29.86,22.53-39.02,3.1-5.26,8.37-13.52,5.86-10.26" />
                </g>
            </svg>
        </div>
    )
}

export default VoxaLogo
