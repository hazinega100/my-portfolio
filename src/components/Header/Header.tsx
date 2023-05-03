import React from "react";
import s from "./Header.module.css"

export const Header = () => {
    return (
        <div>
            <header className={s.header}>
                <div className={s.container}>
                    <ul className={s.headerList}>
                        <li className={s.headerItem}><a className={s.headerLink} href="#">home</a></li>
                        <li className={s.headerItem}><a className={s.headerLink} href="#">skills</a></li>
                        <li className={s.headerItem}><a className={s.headerLink} href="#">projects</a></li>
                        <li className={s.headerItem}><a className={s.headerLink} href="#">contacts</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
};