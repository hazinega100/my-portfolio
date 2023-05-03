import React from "react";
import s from "./Footer.module.css"
import insta from "../../img/icons/instagram.svg"
import linkedIn from "../../img/icons/linkedIn.svg"
import vk from "../../img/icons/vk.svg"
import github from "../../img/icons/gitHub.svg"
import telegram from "../../img/icons/telegram.svg"

export const Footer = () => {
    return (
        <div>
            <h3 className="title">Egor Guzanov</h3>
            <div className={s.footer}>
                <a href="#"><img src={insta} alt="insta"/></a>
                <a href="#"><img src={linkedIn} alt="linkedIn"/></a>
                <a href="#"><img src={vk} alt="vk"/></a>
                <a href="#"><img src={github} alt="github"/></a>
                <a href="#"><img src={telegram} alt="telegram"/></a>
            </div>
        </div>
    );
};