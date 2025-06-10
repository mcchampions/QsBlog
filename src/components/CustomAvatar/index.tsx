import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import styles from './styles.module.css'
import React from "react";

const CustomAvatar = (props) => {
    return (
        <Box sx={{display: 'flex'}}>
            <Box m="auto">
                <div
                    className={styles.avatarArea}
                >
                    <Avatar
                        alt={props.alt}
                        src={props.src}
                        sx={props.sx}
                    />
                </div>
            </Box>
        </Box>
    );
}

export default CustomAvatar;