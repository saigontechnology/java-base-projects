import { Avatar, Box, Stack, Typography, IconButton } from "@mui/material";
import React from "react";
import StyledBadge from "../components/settings/StyledBadge"
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from "phosphor-react";

const CallLogElement = ({online, incoming, missed, img, name, date}) => {
    return (
        <Box sx={{ width: "100%", borderRadius: 1, backgroundColor: (theme) => theme.palette.mode === "light" ? "#fff" : theme.palette.background.default}} p={3}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" >
                <Stack direction="row" alignItems="center" spacing={2}>
                    { online ? 
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar src={img}/>
                        </StyledBadge>
                        : <Avatar src={img}/> 
                    }
                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{name}</Typography>
                        <Stack direction={"row"} alignItems={"center"} spacing={1}>
                            {incoming ? <ArrowDownLeft color={missed ? "red" : "green"} /> : <ArrowUpRight color={missed ? "red" : "green"} />}
                            <Typography variant="caption">{date}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <IconButton >
                    <Phone color="green"/>
                </IconButton>
            </Stack>
        </Box>
    )
}

const CallElement = ({online, img, name}) => {
    return (
        <Box sx={{ width: "100%", borderRadius: 1, backgroundColor: (theme) => theme.palette.mode === "light" ? "#fff" : theme.palette.background.default}} p={3}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" >
                <Stack direction="row" alignItems="center" spacing={2}>
                    { online ? 
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar src={img}/>
                        </StyledBadge>
                        : <Avatar src={img}/> 
                    }
                    <Stack spacing={0.3}>
                        <Typography variant="subtitle2">{name}</Typography>
                    </Stack>
                </Stack>
                <Stack direction={"row"} justifyItems={"center"} justifyContent={"space-between"}>
                    <IconButton>
                        <Phone color="green"/>
                    </IconButton>
                    <IconButton >
                        <VideoCamera color="green"/>
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    )
}

export {CallLogElement, CallElement};