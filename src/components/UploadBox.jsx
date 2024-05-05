import { motion } from 'framer-motion';
import Customerloader from "@/components/Customerloader";
import { Box, Grid } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DownloadBtns from './PdfDownload';

function UploadBox({ status, transcribedText, fileInputRef, handleFileChange, handleUploadClick }) {
    const MotionGrid = motion(Grid);
    return (
        <div>
            <Grid item xs={12} padding='10px' borderRadius={'20px'} height={'200px'} className={`bg-gray-600 bg-opacity-25 flex items-center justify-center backdrop-filter backdrop-blur-lg`} >
                {status === "idle" && <Box width={'100%'} height={'100px'} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        multiple={false}
                    />
                    <a href="#" onClick={handleUploadClick} style={{ color: 'white', fontSize: '1.5rem', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                        <CloudUploadIcon sx={{ scale: '5', marginBottom: "40px" }} />

                        Upload File</a>
                </Box>}
                {status === "processing" && <Customerloader />}
                {status === "completed" && <DownloadBtns />}
            </Grid>
        </div>
    )
}

{/* <MotionGrid container xs={12} rowGap={2} initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
</MotionGrid> */}

export default UploadBox
