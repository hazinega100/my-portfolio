import React from "react";
import s from "./Contacts.module.css"
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export const Contacts = () => {
    return (
        <div>
            <h3 className="title">Contacts</h3>
            <div className={s.ContactsWrapper}>
                <form action="#">
                    <TextField className={s.ContactsInput} label="Your Name" variant="outlined" />
                    <TextField className={s.ContactsInput} label="Your Mail" variant="outlined" /><br/>
                    <TextField className={s.ContactsTextAria}
                               label="Your Suggestion"
                               placeholder="Message"
                               rows={4}
                               multiline
                    />
                    <Button variant="contained" color="error">send a message</Button>
                </form>

            </div>

        </div>
    );
};