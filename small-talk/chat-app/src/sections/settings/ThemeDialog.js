import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const ThemeDialog = ({open, handleClose}) => {
    
    return (
        <>
        <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} keepMounted TransitionComponent={Transition} aria-describedby="alert-dialog-slide-description" sx={{p: 4}}>
            <DialogTitle>Setting ThemeDialog</DialogTitle>
            <DialogContent>
                Theme Dialog
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>   
        </>
    )
}

export default ThemeDialog