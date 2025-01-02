import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";
import photo from "./assets/IMG_1916.JPG";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";

const handleGithub = () => {
  window.open("https://github.com/owendewing");
};

const handleResume = () => {
  window.open("https://www.linkedin.com/in/owen-dewing/");
};

const Home = () => {
  return (
    <div>
      <div className="header"></div>
      {/* <div className="text-container">
        <h1 className="welcome-text">Welcome</h1>
      </div> */}
      <div className="home-container">
        <div className="paragraph-container">
          <h1 className="personal-paragraph">
            Hello, my name is Owen Dewing. I am a student at Loyola Marymount
            University studying Computer Science. I am an aspring
            front-end/full-stack developer interested in UI/UX design.
          </h1>
        </div>
        <img src={photo} alt="personal" className="personal-image" />
      </div>
      <div className="external-links">
        <div className="github-button">
          <button onClick={handleGithub} className="github-items">
            <h1 className="github-text">Github</h1>
            <img src={github} alt="github icon" className="github-photo" />
          </button>
        </div>
        <div className="linkedin-button">
          <button onClick={handleResume} className="linkedin-items">
            <h1 className="linkedin-text">LinkedIn</h1>
            <img
              src={linkedin}
              alt="linkedin icon"
              className="linkedin-photo"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Home></Home>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
