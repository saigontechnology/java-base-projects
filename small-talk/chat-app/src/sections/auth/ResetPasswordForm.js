import { Alert, Button, Stack } from "@mui/material";
import React from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import RHFTextField from "../../components/hook-form/RHFTextField";

const ResetPasswordForm = () => {

    const ResetPasswordShema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Invalid email")
    });

    const defaultValues = {
        email: "test@gmail.com"
    }

    const methods = useForm({
        resolver: yupResolver(ResetPasswordShema),
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
            <Stack spacing={2}>
                {!!errors.afterSubmit && <Alert security="error">{errors.afterSubmit.message}</Alert>}
                <RHFTextField name="email" label="Email address" />
            
                <Button fullWidth color="inherit" size="large" type="submit" variant="contained" 
                sx={{bgcolor: "text.primary", color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800",
                '&:hover' : {
                    bgcolor: "text.primary",
                    color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800"
                }}}>
                    Send Request
                </Button>
            </Stack>
        </FormProvider>
    )
}

export default ResetPasswordForm;