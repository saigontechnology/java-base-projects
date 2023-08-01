import React, { useState } from "react";
import { Box, Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import { useTheme} from "@mui/material/styles"
import { MagnifyingGlass, Plus } from "phosphor-react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import CreateGroup from "../../sections/main/CreateGroup";

const Group = () => {
    const theme = useTheme()

    const [openCreateGroupDialog, setOpenCreateGroupDialog] = useState(false)

    const handleOpenCreateGroupDialog = () => {
        setOpenCreateGroupDialog(true);
      }
  
      const handleCloseCreateGroupDialog = () => {
        setOpenCreateGroupDialog(false);
      }

    return (
        <>
        <Stack direction={"row"} sx={{width: "100%"}}>
            {/* Left side */}
            <Box sx={{overflowY: "scroll", height: "100vh", width: 320, backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background, boxShadow: "0px 0px 2xp rgba(0, 0, 0, 0.25 )"}}>
            <Stack p={3} spacing={2} sx={{maxHeight: "100vh"}}>
                    {/* Header */}
                    <Stack>
                        <Typography variant="h5">Groups</Typography>
                    </Stack>
                    <Stack sx={{width: "100%"}}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color="#709CE6" />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search..." inputProps={{"aria-label": "search"}} />
                        </Search>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant="subtitle2" component={Link}>Create new group</Typography>
                        <IconButton onClick={handleOpenCreateGroupDialog}>
                            <Plus style={{color: (them) => theme.palette.primary.main}} />
                        </IconButton>
                    </Stack>
                    <Divider />
                    {/* Chat list */}
                    <Stack spacing={2} direction="column" sx={{flexGrow: 1, overflowY: "scroll", height: "100%"}}>
                        <SimpleBarStyle timeout={500} clickOnTrack={false}>
                            <Stack spacing={2.4}>
                                <Typography variant="subtitle2" sx={{color: "#6767676"}}>Pinned</Typography>
                                {ChatList.filter((el) => el.pinned).map((el) => {
                                    return <ChatElement {...el} />
                                })}
                            </Stack>
                            <Stack spacing={2.4}>
                                <Typography variant="subtitle2" sx={{color: "#6767676"}}>All Groups</Typography>
                                {ChatList.filter((el) => !el.pinned).map((el) => {
                                    return <ChatElement {...el} />
                                })}
                            </Stack>
                        </SimpleBarStyle>
                    </Stack>
                    
                    {/* Option */}
                    
                </Stack>
            </Box>

            {/* Right side */}

        </Stack>
        {openCreateGroupDialog && <CreateGroup open={openCreateGroupDialog} handleClose={handleCloseCreateGroupDialog} />}
        </>
    )
}

export default Group;