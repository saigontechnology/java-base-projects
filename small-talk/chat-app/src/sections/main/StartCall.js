import React from "react";
import { Dialog, DialogTitle, DialogContent, Slide, Stack} from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import {CallLogs, MembersList} from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({open, handleClose}) => {
    
    return (
        <Dialog maxWidth="md" open={open} onClose={handleClose} keepMounted TransitionComponent={Transition} aria-describedby="alert-dialog-slide-description" sx={{p: 4}}>
            <DialogTitle sx={{mb: 3}}>Start Call</DialogTitle>
            <DialogContent>
                <Stack spacing={1}>
                    <Stack sx={{width: "100%"}}>
                        <Search>
                            <SearchIconWrapper>
                                <MagnifyingGlass color="#709CE6"/>
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search..." inputProps={{"aria-label": "search"}}/>
                        </Search>
                    </Stack>
                    {/*{CallLogs.map((el) => <CallElement {...el} />)}*/}
                    {MembersList.map((el) => <CallElement {...el} />)}
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default StartCall