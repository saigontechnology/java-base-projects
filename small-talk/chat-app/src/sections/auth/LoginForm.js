import { Alert, Button, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import React from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import {useState} from "react"
import * as Yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import RHFTextField from "../../components/hook-form/RHFTextField";
import { Eye, EyeSlash } from "phosphor-react";
import {Link as RouterLink} from "react-router-dom";

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState()

    const LoginShema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Invalid email"),
        password: Yup.string().required("Password is required").min(8).max(50)

    });

    const defaultValues = {
        email: "test@gmail.com",
        password: "abc123456789"
    }

    const methods = useForm({
        resolver: yupResolver(LoginShema),
        defaultValues
    })

    const {reset, setError, handleSubmit, formState: {errors, isSubmitting, isSubmitSuccessful}} = methods

    const onSubmit = async => (data) => {
        try {
            // Call api here
        } catch (error) {
            console.log(error)
            reset()
            setError("afterSubmit", {
                ...error,
                message: error.message
            })
        }
    }

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                {!!errors.afterSubmit && <Alert security="error">{errors.afterSubmit.message}</Alert>}
            
                <RHFTextField name="email" label="Email address" />
                <RHFTextField name="password" label="Password" type={showPassword ? "text" : "password"} InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={() => {
                                setShowPassword(!showPassword)
                            }}>
                                {showPassword ? <Eye /> : <EyeSlash/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }} />
            </Stack>
            <Stack alignItems={"flex-end"} sx={{my: 2}}>
                <Link variant="body2" color="inherit" underline="always" component={RouterLink} to="/auth/reset-password">
                    Forgot password?
                </Link>
            </Stack>
            <Button fullWidth color="inherit" size="large" type="submit" variant="contained" 
            sx={{bgcolor: "text.primary", color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800",
            '&:hover' : {
                bgcolor: "text.primary",
                color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800"
            }}}>
                Login
            </Button>
        </FormProvider>
    )
}

export default LoginForm;