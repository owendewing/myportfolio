import React from 'react'
import CSS from "./assets/Css.png"
import html from "./assets/HTML.png"
import firebase from "./assets/firebase.png"
import javascript from "./assets/Javascript.png"
import react from "./assets/react.png"
import reactNative from "./assets/ReactNative.png"
import spotifyApi from "./assets/spotify.png"
import swift from "./assets/Swift.png"
import typescript from "./assets/typescript.png"
import portfolio from "./assets/Portfolio.png"
import nonstop from "./assets/Nonstop.PNG"
import triviaTime from "./assets/triviaTime.png"
import littleLemon from "./assets/littleLemon.png"
import "./Projects.css"
import Modal from 'react-modal';
import { useState } from 'react'

Modal.setAppElement('#root');

const ProjectDiv = ( {projectName, tech, description, projectImage, projectImageAlt, demos }) => {
  const [imageModal, setImageModal] = useState(false)

  const openModal = () => {
    setImageModal(true);
  }

  const closeModal = () => {
    setImageModal(false);
  }

  return (
    <div className="container">
    <div className= "project-container">
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
          className="project-images">  
          </img>
        ))}
        </div>
      </div>
      <p className="project-description">{description}</p> 
      </div>
      </div>
      <div className="project-image-container">
        <img src={projectImage} alt={projectImageAlt} className="project-image" onClick={openModal} ></img>
      </div>
      <Modal 
          isOpen = {imageModal}
          onRequestClose={closeModal}
          className="project-image-modal"
          overlayClassName="overlay"
          contentLabel={`${projectName} Image`}>
            <div className="modal-content">
              <img src={projectImage} alt={projectImageAlt} className="project-image-full" onClick={closeModal}></img>
            </div>
      </Modal>
      <div className="project-buttons">
        {/* {demos.map((demo,) => (
          <button onClick={}>
          </button>
        ))} */}
      </div>
    </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-grid">
        <ProjectDiv 
        projectName = "My Portfolio Website"
        tech={[{icon: react, name: "react-logo"}, {icon: javascript, name: "javascript-logo"}, {icon: CSS, name: "css-logo"}, {icon: html, name: "html-logo"}]}
        description="My Portfolio Website is a project created with ReactJS to display my personal and educational projects
        in an organized and creative fashion. This website also serves as a route to my resume, github, and email for contact purposes."
        projectImage={portfolio}
        projectImageAlt="Portfolio-picture"></ProjectDiv>
        <ProjectDiv 
        projectName = "Nonstop" 
        tech={[{icon: reactNative, name: "reactNative-logo"}, {icon: typescript, name: "typescript-logo"}, {icon: spotifyApi, name: "spotifyApi-logo"}, {icon: firebase, name: "firebase-logo"}]}
        description="Nonstop is an app created with React Native that allows Spotify users to post a daily song that 
        they are enjoying. Users can add friends and custsomize their profiles. The profile page also depicts a previously posted
        section where users can access their older posts sorted by date. Finally, users can interact with new listeners through the chat feature that matches users
        together based on if they posted the same song or not."
        projectImage={nonstop}
        projectImageAlt="Nonstop-picture"></ProjectDiv>
        <ProjectDiv 
        projectName = "Little Lemon" 
        tech={[{icon: react, name: "react-logo"}, {icon: javascript, name: "javascript-logo"}, {icon: CSS, name: "css-logo"}, {icon: html, name: "html-logo"}]}
        description="Little Lemon is a front-end web app created with ReactJS, CSS, and HTML. It was the capstone project from the Meta Front-End Development 
        Certification. This web app permits users to make a reservation at the Little Lemon Italian restuarant. The reservation feature includes selecting a date,
        a time (based on the date), a group of people, and an occasion."
        projectImage={littleLemon}
        projectImageAlt="Little-Lemon-picture"></ProjectDiv>
        <ProjectDiv 
        projectName = "Trivia Time" 
        tech={[{icon: swift, name: "swift-logo"}, {icon: firebase, name: "firebase-logo"}]}
        description="Trivia Time is triva-based app created with Swift. Players can create an account and play a trivia game consisting of 10 questions from random 
        genres. Players' scores are based on a combination of the amount of questions they answered correctly with how fast they complete the 10 questions. Players' scores
        are then placed on a leaderboard. Firebase/Firestore is used to authenitcate users and store their high scores."
        projectImage={triviaTime}
        projectImageAlt="Trivia-Time-picture"></ProjectDiv>
    </div>
    </div>
  )
}

export default Projects
