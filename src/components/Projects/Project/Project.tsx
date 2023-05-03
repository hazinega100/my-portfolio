import React from "react";
import s from "./Project.module.css"

type ProjectPropsType = {
    img: string
    title: string
    subtitle: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div>
            <div className={s.projectWrapper}>
                <a href="#"><img className={s.projectImg} src={props.img} alt="project"/></a>
                <div className={s.projectTitle}>{props.title}</div>
                <div className={s.projectSubtitle}>{props.subtitle}</div>
            </div>
        </div>
    );
};