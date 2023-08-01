import React from "react";
import { Avatar, Box, Divider, IconButton, Stack, Menu, MenuItem } from "@mui/material";
import Logo from "../../assets/Images/logo.ico"
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";

import { useState } from "react";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles"

import useSettings from "../../hooks/useSettings"
import AntSwitch from "../../components/settings/AntSwitch";

const ProfileOptions = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Avatar src={faker.image.avatar()} 
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} size={20}/>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
                vertical: "center",
                horizontal: "right"
            }}
            transformOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}>
                <Stack spacing={1} px={1}>
                    {Profile_Menu.map((el) => (
                        <MenuItem>
                            <Stack sx={{width: 100}} direction="row" alignItems="center" justifyContent="space-between">
                                <span>{el.title}</span>
                                {el.icon}
                            </Stack>
                        </MenuItem>
                    ))}
                </Stack>
        </Menu>
      </>
    )
}

const SideBar = () => {
    const theme = useTheme()

    const [selected, setSelected] = useState(0);

    const {onToggleMode} = useSettings();

    return (
        <Box p={2} sx={{backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width: 100}}>
            <Stack direction="column" alignItems={"center"} justifyContent="space-between" sx={{height: "100%"}} spacing={3}>
                <Stack alignItems={"center"} spacing={4}>
                <Box sx={{backgroundColor: theme.palette.primary.main, height: 64, width: 64,borderRadius: 1.5}}>
                    <img src={Logo} alt={"Small Talk Logo"} />
                </Box>
                <Stack spacing={3} sc={{width: "max-content"}} direction="column" alignItems="center">
                    {Nav_Buttons.map((el) => (
                    el.index === selected ? 
                        <Box p={1} sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5}}>
                        <IconButton sx={{width: "max-content", color: "#fff"}} key={el.index} >{el.icon}</IconButton>
                        </Box>
                    : <IconButton onClick={() =>{
                        setSelected(el.index);
                    }} sx={{width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.primary}} key={el.index} >{el.icon}</IconButton> 
                    ))}
                    <Divider sx={{width: "48px"}} />
                    {selected === 3 ? (
                    <Box p={1} sx={{backgroundColor: theme.palette.primary.main, borderRadius: 1.5}}>
                        <IconButton sx={{width: "max-content", color: "#fff"}}>
                            <Gear />
                        </IconButton>
                        </Box>
                    ) : (
                        <IconButton  onClick={() =>{
                        setSelected(3);
                        }} sx={{width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.primary}}>
                        <Gear />
                        </IconButton>
                    )}
                </Stack>
                </Stack>
                <Stack spacing={4}>
                <AntSwitch onChange={() => {
                    onToggleMode();
                }} defaultChecked />
                <ProfileOptions />
                </Stack>
            </Stack>
        </Box>
    )
}

export default SideBar;