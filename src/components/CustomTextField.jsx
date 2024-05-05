import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import styles from "../styles/customText.module.scss"
import FolderIcon from '@mui/icons-material/Folder';

function CustomInput({ filename, setStatus, abortController }) {
    if (filename.length > 42) {
        filename = filename.substring(0, 42) + '...';
    }

    return (

        <>
            <div class={styles.inputgroup}>
                <label class={`${styles.inputgroup__label}`} for="myInput">File name</label>
                <div type="text" id="myInput" className={styles.inputgroup__input}>
                    <Grid container>
                        <Grid item xs={11}>
                            <p>{filename}</p>
                        </Grid>
                        <Grid item xs={1} style={{ marginTop: "-10px" }}>
                            <Tooltip title="Change file" placement="right" arrow>
                                <IconButton onClick={() => {
                                    abortController.abort({ reason: 'Change file button clicked' });
                                    setStatus('idle');
                                }}>
                                    <FolderIcon sx={{ color: 'white', fontSize: { xs: '20px', sm: '20px', md: '25px' } }} />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>

                </div>
            </div>
        </>
    )
}

export default CustomInput
