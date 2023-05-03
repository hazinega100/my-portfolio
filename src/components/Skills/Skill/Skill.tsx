import React from "react";
import s from "./Skill.module.css"

type SkillPropsType = {
    img: string
    title: string
    subtitle: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div>
            <div className={s.skillWrapper}>
                <img className={s.skillImg} src={props.img} alt="skill"/>
                <div className={s.skillTitle}>{props.title}</div>
                <p className={s.skillSubtitle}>{props.subtitle}</p>
            </div>
        </div>
    );
};