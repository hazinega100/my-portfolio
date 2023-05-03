import React from "react";
import s from "./Hire.module.css"
import Button from "@mui/material/Button";

export const Hire = () => {
    return (
        <div>
            <h3 className="title">Contact Me</h3>
            <div className={s.btn}>
                <Button variant="contained" color="error">hire me</Button>
            </div>
        </div>

    );
};