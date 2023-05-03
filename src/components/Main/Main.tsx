import React from "react";
import s from "./Main.module.css"
import MyPhoto from "../../img/EgaHazin.jpg"

export const Main = () => {
    return (
        <div>
            <section className={s.main}>
                <div className={s.mainWrapper}>
                    <div className={s.mainItem}>
                        <p className={s.mainItemDescr}>Hello!</p>
                        <p className={s.mainItemDescr}>My name <strong>Egor Guzanov</strong></p>
                        <p className={s.mainItemDescr}>I'm Front-End Developer</p>
                    </div>
                    <img className={s.mainImg} src={MyPhoto} alt="MyPhoto"/>
                </div>
            </section>
        </div>
    );
};