import React from "react";
import "./Skills.css";
import react from "./assets/react-new.svg";
import javascript from "./assets/Javascript.png";
import java from "./assets/java.png";
import langsmith from "./assets/langsmith.png";
import ragas from "./assets/ragas.png";
import git from "./assets/git.svg";
import python from "./assets/python.png";
import pandas from "./assets/pandas.png";
import r from "./assets/R.png";
import typescript from "./assets/typescript.png";
import bootstrap from "./assets/bootstrap.svg";
import html from "./assets/HTML.png";
import css from "./assets/Css.png";
import vscode from "./assets/vscode.png";
import sql from "./assets/sql.png";
import mysql from "./assets/mysql.png";
import reactNative from "./assets/react-native-new.webp";
import firebase from "./assets/firebase.png";

const Skills = () => {
  const skills = [
    { name: "React", icon: react },
    { name: "JavaScript", icon: javascript },
    { name: "Java", icon: java },
    { name: "LangSmith", icon: langsmith },
    { name: "Ragas", icon: ragas },
    { name: "Git", icon: git },
    { name: "Python", icon: python },
    { name: "Pandas", icon: pandas },
    { name: "R", icon: r },
    { name: "TypeScript", icon: typescript },
    { name: "Bootstrap", icon: bootstrap },
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "Visual Studio Code", icon: vscode },
    { name: "SQL", icon: sql },
    { name: "MySQL", icon: mysql },
    { name: "React Native", icon: reactNative },
    { name: "Firebase", icon: firebase }
  ];

  return (
    <div id="skills" className="skills-container">
      <div className="skills-content">
        <h1 className="skills-title">Technologies and Tools</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
