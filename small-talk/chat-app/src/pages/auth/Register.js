import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import {Link as RouterLink} from "react-router-dom"
import AuthSocial from "../../sections/auth/AuthSocial";
import RegisterForm from "../../sections/auth/RegisterForm";

const Register = () => {
    return (
        <>
            <Stack spacing={2} sx={{mb: 5, position: "relative"}}>
                <Typography variant="h4">Get Started to SmallTalk</Typography>
                <Stack direction={"row"} spacing={0.5}>
                    <Typography variant="body2">Already have an account ?</Typography>
                    <Link to="/auth/login" component={RouterLink} variant="body1">
                        Sign in
                    </Link>
                </Stack>
                {/* Register Form */}
                <RegisterForm />
                {/* Links */}
                <Typography component={"div"} sx={{color: "text.secondary", mt: 3, typography: "caption", textAlign: "center"}}>
                    {"By Signinng up, I argee to "}
                    <Link color={"text.primary"} underline="always">
                        Term of service
                    </Link>
                    {" and "}
                    <Link color={"text.primary"} underline="always">
                        Privacy policy
                    </Link>
                </Typography>
                {/* Authen Social */}
                <AuthSocial />
            </Stack>
        </>
    )
}

export default Register