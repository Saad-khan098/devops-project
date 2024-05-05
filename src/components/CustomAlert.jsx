import { useEffect, useRef, useState } from "react";
import styles from "../styles/CustomAlert.module.css"
import { Grid, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import VoxaLogo from "./VoxaLogo";
function CustomAlert({ visible, setVisible, errMsg }) {


    return (
        <div className={styles.customError} style={{ minHeight: "100px", borderRadius: '18px', display: visible ? 'block' : 'none', backgroundColor: 'black', borderWidth: '2px', color: 'white', padding: '20px' }}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={2} sx={{ padding: '10px', width: '100%' }}>
                    <div style={{ width: "60px" }}>
                        <VoxaLogo />
                    </div>
                </Grid>
                <Grid container xs={10} sx={{ padding: '10px', width: '100%' }}>
                    <Grid item xs={12}>
                        <p className={styles.errText}>{errMsg}</p>
                    </Grid>
                    {/* <Grid item xs={1} sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: "-20px" }}>
                        <IconButton onClick={() => setVisible(false)}><CloseIcon sx={{ color: 'white' }} /></IconButton>
                    </Grid> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default CustomAlert
