import { IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";
import {Link as RouterLink} from "react-router-dom"
import { CaretLeft } from "phosphor-react";
import ResetPasswordForm from "../../sections/auth/ResetPasswordForm";

const ResetPassword = () => {
    return (
        <>
            <Stack spacing={2} sx={{mb: 5, position: "relative"}}>
                <Typography variant="h3" paragraph>Forgot your password ?</Typography>
                <Typography variant="body2" sx={{color: "text.secondary", mb: 5}}>
                    Please enter the email address associated with your account and we will email you a link
                    to reset your password.
                </Typography>
                {/* Register Form */}
                <ResetPasswordForm />
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

export default ResetPassword