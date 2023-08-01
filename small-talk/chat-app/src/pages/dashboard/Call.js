import React, { useState } from "react";
import { Box, Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import { useTheme} from "@mui/material/styles"
import {MagnifyingGlass, Phone, Plus} from "phosphor-react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import {CallElement, CallLogElement} from "../../components/CallElement";
import {CallLogs, MembersList} from "../../data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {

    const theme = useTheme()

    const [openStartCallDialog, setOpenStartCallDialogsetOpDialog] = useState(false)

    const handleOpenStartCallDialog = () => {
        setOpenStartCallDialogsetOpDialog(true);
    }
  
    const handleCloseStartCallDialog = () => {
        setOpenStartCallDialogsetOpDialog(false);
    }

    return (
        <>
        <Stack direction={"row"} sx={{width: "100%"}}>
            {/* Left side */}
            <Box sx={{overflowY: "scroll", height: "100vh", width: 320, backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background, boxShadow: "0px 0px 2xp rgba(0, 0, 0, 0.25 )"}}>
            <Stack p={3} spacing={2} sx={{maxHeight: "100vh"}}>
                    {/* Header */}
                    <Stack>
                        <Typography variant="h5">Call Logs</Typography>
                    </Stack>
                    <Stack sx={{width: "100%"}}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color="#709CE6" />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search..." inputProps={{"aria-label": "search"}} />
                        </Search>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography variant="subtitle2" component={Link}>Start new conversation</Typography>
                        <IconButton onClick={handleOpenStartCallDialog}>
                            <Plus size={20} style={{color: (them) => theme.palette.primary.main}} />
                        </IconButton>
                    </Stack>
                    <Divider />
                    {/* Call log */}
                    {CallLogs.map((el) => <CallLogElement {...el} />)}

                    
                    {/* Option */}
                    
                </Stack>
            </Box>

            {/* Right side */}

        </Stack>

        {openStartCallDialog && <StartCall open={openStartCallDialog} handleClose={handleCloseStartCallDialog} /> }
        </>
    )
}

export default Call;