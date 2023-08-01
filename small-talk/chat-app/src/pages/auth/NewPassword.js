import { IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";
import {Link as RouterLink} from "react-router-dom"
import { CaretLeft } from "phosphor-react";
import NewPasswordForm from "../../sections/auth/NewPasswordForm";

const NewPassword = () => {
    return (
        <>
            <Stack spacing={2} sx={{mb: 5, position: "relative"}}>
                <Typography variant="h3" paragraph>Reset your password ?</Typography>
                <Typography variant="body2" sx={{color: "text.secondary", mb: 5}}>
                    Please set your new password
                </Typography>
                {/* NewPassword Form */}
               <NewPasswordForm />
                {/* Links */}
                <Link to="/auth/login" component={RouterLink} variant="subtile2" color={"inherit"}
                sx={{
                    mt: 3, mx: "auto", alignItems: "center", display: "inline-flex"
                }}
                underline="none">
                    <IconButton>
                        <CaretLeft />
                    </IconButton>
                    Return to login page
                </Link>
            </Stack>
        </>
    )
}

export default NewPassword