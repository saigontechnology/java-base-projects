import React from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import RHFTextField from "../../components/hook-form/RHFTextField";
import { Alert, Button, IconButton, InputAdornment, Stack } from "@mui/material";
import {useState} from "react"
import { Eye, EyeSlash } from "phosphor-react";

const NewPasswordForm = () => {

    const [showPassword, setShowPassword] = useState()
    const [showConfirmedPassword, setShowConfirmedPassword] = useState()

    const NewPasswordShema = Yup.object().shape({
        newPassword: Yup.string()
        .min(8, "Password has atleast 8 characters")
        .required("Password is required"),
        confirmedPassword: Yup.string()
        .required("Confirmed password is required")
        .oneOf([Yup.ref("newPassword"), null], 'Password not matching')
    });

    const defaultValues = {
        newPassword: "abcd1234",
        confirmedPassword: "abcd1234"
    }

    const methods = useForm({
        resolver: yupResolver(NewPasswordShema),
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
                <RHFTextField name="newPassword" label="New password" type={showPassword ? "text" : "password"} InputProps={{
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

                <RHFTextField name="confirmedPassword" label="Confirmed password" type={showConfirmedPassword ? "text" : "password"} InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={() => {
                                setShowConfirmedPassword(!showConfirmedPassword)
                            }}>
                                {showConfirmedPassword ? <Eye /> : <EyeSlash/>}
                            </IconButton>
                        </InputAdornment>
                    )
                }} />
            
                <Button fullWidth color="inherit" size="large" type="submit" variant="contained" 
                sx={{bgcolor: "text.primary", color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800",
                '&:hover' : {
                    bgcolor: "text.primary",
                    color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800"
                }}}>
                    Submit
                </Button>
            </Stack>
        </FormProvider>
    )
}

export default NewPasswordForm;