import React from "react";
import s from "./Projects.module.css"
import {Project} from "./Project/Project";
import todo from "../../img/projects/todo.jpg"
import social from "../../img/projects/socialNetwork.png"

export const Projects = () => {
    return (
        <div>
            <h3 className="title">Projects</h3>
            <div className={s.projectsWrapper}>
                <Project img={todo}
                         title="todolist"
                         subtitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quos saepe tenetur voluptas? Animi aspernatur autem beatae, distinctio dolor doloremque excepturi expedita minus, modi porro, rem soluta veritatis vero. Autem."}/>
                <Project img={social}
                         title="social network"
                         subtitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quas quasi quia repellendus repudiandae, sapiente similique veritatis! Consequatur consequuntur corporis ipsam obcaecati similique soluta tempore! Dolores, laboriosam, saepe! Autem, nulla!"}/>
            </div>
        </div>
    );
};