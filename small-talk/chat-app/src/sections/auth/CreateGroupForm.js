import { Alert, Button, Stack } from "@mui/material";
import React from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import RHFTextField from "../../components/hook-form/RHFTextField";
import RHFAutocomplete from "../../components/hook-form/RHFAutocomplete";

const MEMBERS = ["Name 1", "Name 2"]

const CreateGroupForm = ({handleClose}) => {

    const NewGroupShema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        members: Yup.array().min(2, "Must have at least 2 members"),
    });

    const defaultValues = {
        title: "",
        members: []
    }

    const methods = useForm({
        resolver: yupResolver(NewGroupShema),
        defaultValues
    })

    const {reset,watch, setError, handleSubmit, formState: {errors, isSubmitting, isSubmitSuccessful}} = methods

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
                
                <RHFTextField name="title" label="Name" />
                
                <RHFAutocomplete name="members" label="Members" 
                multiple 
                freeSolo 
                options={MEMBERS.map((option) => option)} 
                ChipProps={{size: "medium"}} 
                />

                <Stack spacing={2} direction={"row"} alignItems={"center"} justifyContent={"end"}>   
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained">
                        Create
                    </Button>
                </Stack>
            </Stack>
             
            
        </FormProvider>
    )
}

export default CreateGroupForm;