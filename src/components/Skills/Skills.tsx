import React from "react";
import {Skill} from "./Skill/Skill";
import s from "./Skills.module.css"
import htmlImg from "../../img/skilles/HTML.svg"
import cssImg from "../../img/skilles/CSS3.svg"
import reactImg from "../../img/skilles/React.png"

export const Skills = () => {
    return (
        <div>
            <h3 className="title">Skills</h3>
            <div className={s.skillsWrapper}>
                <Skill title="HTML5"
                       subtitle={"В HTML5 реализовано множество новых синтаксических особенностей. Например, элементы video, audio и canvas, а также возможность использования SVG и математических формул. Эти новшества разработаны для упрощения создания и управления графическими и мультимедийными объектами в сети без необходимости использования сторонних API и плагинов."}
                       img={htmlImg} />
                <Skill title="CSS3"
                       subtitle={"CSS позволяет представлять один и тот же документ в различных стилях или методах вывода, таких как экранное представление, печатное представление, чтение голосом (специальным голосовым браузером или программой чтения с экрана) или при выводе устройствами, использующими шрифт Брайля"}
                       img={cssImg}/>
                <Skill title="React"
                       subtitle={"React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую скорость разработки, простоту и масштабируемость. В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как MobX, Redux и GraphQL."}
                       img={reactImg}/>
            </div>
        </div>
    );
};