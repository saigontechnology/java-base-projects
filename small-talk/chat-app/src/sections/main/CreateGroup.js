import React from "react";
import { Dialog, DialogTitle, DialogContent, Slide} from "@mui/material";
import CreateGroupForm from "../auth/CreateGroupForm";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroup = ({open, handleClose}) => {
    
    return (
        <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} keepMounted TransitionComponent={Transition} aria-describedby="alert-dialog-slide-description" sx={{p: 4}}>
            <DialogTitle sx={{mb: 3}}>Create New Group</DialogTitle>
            <DialogContent>
                <CreateGroupForm handleClose={handleClose} />
            </DialogContent>
        </Dialog>
    )
}

export default CreateGroup