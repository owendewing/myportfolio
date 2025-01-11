import React from "react";
import CSS from "./assets/Css.png";
import html from "./assets/HTML.png";
import firebase from "./assets/firebase.png";
import javascript from "./assets/Javascript.png";
import react from "./assets/react.png";
import reactNative from "./assets/ReactNative.png";
import spotifyApi from "./assets/spotify.png";
import swift from "./assets/Swift.png";
import typescript from "./assets/typescript.png";
import portfolio from "./assets/Portfolio.png";
import nonstop from "./assets/Nonstop.PNG";
import nonstopVideo from "./assets/NonstopDemo.mov";
import triviaTime from "./assets/triviaTime.png";
import triviaTimeMovie from "./assets/Trivia-Time.mov";
import littleLemon from "./assets/littleLemon.png";
import littleLemonVideo from "./assets/LittleLemonDemo.mov";
import "./Projects.css";
import Modal from "react-modal";
import { useState } from "react";
import demo from "./assets/demo.png";
import github from "./assets/github.png";

Modal.setAppElement("#root");

const handleLittleLemonGithub = () => {
  window.open("https://github.com/owendewing/Little-Lemon");
};

const handleNonstopGithub = () => {
  window.open("https://github.com/jxbal/nonstop");
};

const handlePortfolioGithub = () => {
  window.open("https://github.com/owendewing/myportfolio");
};

const ProjectDiv = ({
  projectName,
  tech,
  description,
  projectImage,
  projectImageAlt,
  demos,
  githubs,
  openGithubFunction,
}) => {
  const [imageModal, setImageModal] = useState(false);
  const [videoModal, setVideoModal] = useState(false);

  const openModal = () => {
    setImageModal(true);
  };

  const closeModal = () => {
    setImageModal(false);
  };

  const openVideo = () => {
    setVideoModal(true);
  };

  const closeVideo = () => {
    setVideoModal(false);
  };

  return (
    <div className="container">
      <div className="project-container">
        <div className="project-column">
          <h1 className="project-name">{projectName}</h1>
          <div>
            <div className="project-row">
              <span className="project-tech">Made with: </span>
              <div className="project-tech-logos">
                {tech.map((techItem, index) => (
                  <img
                    key={index}
                    src={techItem.icon}
                    alt={techItem.name}
                    className="project-images"
                  ></img>
                ))}
              </div>
            </div>
            <p className="project-description">{description}</p>
            <div className="buttons-container">
              {demos && (
                <button className="project-demo-button" onClick={openVideo}>
                  <h1 className="project-button-text">Demo</h1>
                  <img
                    src={demo}
                    alt="video-playback-logo"
                    className="icon"
                  ></img>
                </button>
              )}
              {githubs && (
                <button
                  className="project-github-button"
                  onClick={openGithubFunction}
                >
                  <h1 className="project-button-text">Code</h1>
                  <img src={githubs} alt="github-icon" className="icon"></img>
                </button>
              )}
            </div>
            <Modal
              isOpen={videoModal}
              onRequestClose={closeVideo}
              className="project-video-modal"
              overlayClassName="overlay"
              contentLabel={`${projectName} Video`}
            >
              <div className="videomodal-content">
                <video
                  src={demos}
                  alt={`${projectName} Video`}
                  width="1000"
                  height="600"
                  controls
                ></video>
              </div>
            </Modal>
          </div>
        </div>
        <div className="project-image-container">
          <img
            src={projectImage}
            alt={projectImageAlt}
            className="project-image"
            onClick={openModal}
          ></img>
        </div>
        <div className="overlay-dim" />
        <Modal
          isOpen={imageModal}
          onRequestClose={closeModal}
          className="project-image-modal"
          overlayClassName="overlay"
          contentLabel={`${projectName} Image`}
        >
          <div className="modal-content">
            <img
              src={projectImage}
              alt={projectImageAlt}
              className="project-image-full"
              onClick={closeModal}
            ></img>
          </div>
        </Modal>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        <ProjectDiv
          projectName="My Portfolio Website"
          tech={[
            { icon: react, name: "react-logo" },
            { icon: javascript, name: "javascript-logo" },
            { icon: CSS, name: "css-logo" },
            { icon: html, name: "html-logo" },
          ]}
          description="My Portfolio Website is a project created with ReactJS to display my personal and educational projects
        in an organized and creative fashion. This website also serves as a route to my resume, github, and email for contact purposes."
          projectImage={portfolio}
          projectImageAlt="Portfolio-picture"
          githubs={github}
          openGithubFunction={handlePortfolioGithub}
        ></ProjectDiv>
        <ProjectDiv
          projectName="Nonstop"
          tech={[
            { icon: reactNative, name: "reactNative-logo" },
            { icon: typescript, name: "typescript-logo" },
            { icon: spotifyApi, name: "spotifyApi-logo" },
            { icon: firebase, name: "firebase-logo" },
          ]}
          description="Nonstop is an app created with React Native that allows Spotify users to post a daily song that 
        they are enjoying. Users can add friends and custsomize their profiles. The profile page also depicts a previously posted
        section where users can access their older posts sorted by date."
          projectImage={nonstop}
          projectImageAlt="Nonstop-picture"
          // githubs={github}
          // openGithubFunction={handleNonstopGithub}
          demos={nonstopVideo}
        ></ProjectDiv>
        <ProjectDiv
          projectName="Little Lemon"
          tech={[
            { icon: react, name: "react-logo" },
            { icon: javascript, name: "javascript-logo" },
            { icon: CSS, name: "css-logo" },
            { icon: html, name: "html-logo" },
          ]}
          description="Little Lemon is a front-end web app created with ReactJS, CSS, and HTML. It was the capstone project from the Meta Front-End Development 
        Certification. This web app permits users to make a reservation at the Little Lemon Italian restaurant. The reservation feature includes selecting a date,
        a time (based on the date), a group of people, and an occasion."
          projectImage={littleLemon}
          projectImageAlt="Little-Lemon-picture"
          openGithubFunction={handleLittleLemonGithub}
          githubs={github}
          demos={littleLemonVideo}
        ></ProjectDiv>
        <ProjectDiv
          projectName="Trivia Time"
          tech={[
            { icon: swift, name: "swift-logo" },
            { icon: firebase, name: "firebase-logo" },
          ]}
          description="Trivia Time is trivia-based app created with Swift. Players can create an account and play a trivia game consisting of 10 questions from random 
        genres. Players' scores are based on a combination of the amount of questions they answered correctly with how fast they complete the 10 questions. Players' scores
        are then placed on a leaderboard."
          projectImage={triviaTime}
          projectImageAlt="Trivia-Time-picture"
          demos={triviaTimeMovie}
        ></ProjectDiv>
      </div>
    </div>
  );
};

export default Projects;
