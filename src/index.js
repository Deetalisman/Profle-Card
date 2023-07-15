import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const mySkill = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JAVASCRIPT",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "WEB DESIGN",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "GIT and GITHUB",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "REACT",
    level: "advanced",
    color: "#60dafb",
  },
  {
    skill: "SWELTER",
    level: "beginner",
    color: "#ff3800",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <Data />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="img/background.png" alt="user" />;
}
function Data() {
  return (
    <div className="data">
      <h1>Ajiboye Ismail</h1>
      <p>
        Ismail is a self taught frontend developer that develops good and
        satisfing ui for his client.God help me to become a senior developer
      </p>
      <Skills />
    </div>
  );
}

function Skills() {
  return (
    <ul className="skill-list">
      {mySkill.map((Skil) => (
        <Skill skill={Skil.skill} color={Skil.color} level={Skil.level} />
      ))}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <p>{skill}</p>
      <p>{level}</p>
    </li>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
