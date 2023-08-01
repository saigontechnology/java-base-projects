import { Box, IconButton, Stack, Typography, Avatar, Divider } from "@mui/material";
import React, { useState } from "react";
import {useTheme, } from "@mui/material/styles";
import { Bell, CaretLeft, Lock, Key, PencilCircle, Image, Note, Keyboard, Info } from "phosphor-react";
import {faker} from "@faker-js/faker"
import Shortcuts from "../../sections/settings/Shortcuts";
import ThemeDialog from "../../sections/settings/ThemeDialog";

const Settings = () => {

    const theme = useTheme();

    const [openShortcuts, setOpenShortcuts] = useState(false)

    const [openThemeDialog, setOpenThemeDialog] = useState(false)

    const handleOpenShortcuts = () => {
      setOpenShortcuts(true);
    }

    const handleCloseShortcuts = () => {
      setOpenShortcuts(false);
    }

    const handleOpenThemeDialog = () => {
      setOpenThemeDialog(true);
    }

    const handleCloseThemeDialog = () => {
      setOpenThemeDialog(false);
    }
    
    const list = [
      {
        key: 0,
        icon: <Bell size={20} />,
        title: "Notifications",
        onclick: () => {},
      },
      {
        key: 1,
        icon: <Lock size={20} />,
        title: "Privacy",
        onclick: () => {},
      },
      {
        key: 2,
        icon: <Key size={20} />,
        title: "Security",
        onclick: () => {},
      },
      {
        key: 3,
        icon: <PencilCircle size={20} />,
        title: "Theme",
        onclick: handleOpenThemeDialog
      },
      {
        key: 4,
        icon: <Image size={20} />,
        title: "Chat Wallpaper",
        onclick: () => {},
      },
      {
        key: 5,
        icon: <Note size={20} />,
        title: "Request Account Info",
        onclick: () => {},
      },
      {
        key: 6,
        icon: <Keyboard size={20} />,
        title: "Keyboard Shortcuts",
        onclick: handleOpenShortcuts,
      },
      {
        key: 7,
        icon: <Info size={20} />,
        title: "Help",
        onclick: () => {},
      },
    ];

    return (
        <>
        <Stack direction="row" sx={{width: "100%"}}>
            {/* Left panel */}
            <Box sx={{overflowY: "scroll", height: "100vh", width: 320, backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background, boxShadow: "0px 0px 2xp rgba(0, 0, 0, 0.25 )"}}>
                <Stack p={4} spacing={5}>
                    {/* Header */}
                    <Stack direction={"row"} alignItems={"center"} spacing={3}>
                        <IconButton onClick={() => {

                        }}>
                            <CaretLeft size={24} color="#4B4B4B" />
                        </IconButton>
                        <Typography variant="h6">Settings</Typography>
                    </Stack>
                    {/* Profile */}
                    <Stack direction={"row"} spacing={3}>
                       <Avatar sx={{width: 56, height: 56}} src={faker.image.avatar()} />
                       <Stack spacing={0.5}>
                            <Typography variant="article">{faker.name.fullName()}</Typography>
                            <Typography variant="body2">{faker.word.verb()}</Typography>
                       </Stack>
                    </Stack>
                    {/* Option */}
                    <Stack spacing={4}>
                        {list.map(({key, icon, title, onclick}) => <>
                                <Stack sx={{cursor: "pointer"}} spacing={2} onClick={onclick}>
                                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                                        {icon}
                                        <Typography variant="body2">{title}</Typography>
                                    </Stack>
                                </Stack>
                                { key !== 7 && <Divider />}
                            </>)
                        }
                    </Stack>
                </Stack>
            </Box>
            {/* right panel */}
        </Stack>
        {openShortcuts && <Shortcuts open={openShortcuts} handleClose={handleCloseShortcuts} />}
        {openThemeDialog && <ThemeDialog open={openThemeDialog} handleClose={handleCloseThemeDialog} />}
        </>
    )
}

export default Settings