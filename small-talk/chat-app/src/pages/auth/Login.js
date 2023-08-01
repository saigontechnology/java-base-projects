import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import {Link as RouterLink} from "react-router-dom"
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";

const Login = () => {
    return (
        <>
            <Stack spacing={2} sx={{mb: 5, position: "relative"}}>
                <Typography variant="h4">Login to SmallTalk</Typography>
                <Stack direction={"row"} spacing={0.5}>
                    <Typography variant="body2">New user ?</Typography>
                    <Link to="/auth/register" component={RouterLink} variant="body1">
                        Create an account
                    </Link>
                </Stack>
                {/* Login form */}
                <LoginForm />
                {/* Authen Social */}
                <AuthSocial />
            </Stack>
        </>
    )
}

export default Login