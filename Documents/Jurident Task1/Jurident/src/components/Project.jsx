import "./Project.css";
import landing1 from "../assets/landing1.png";
import landing2 from "../assets/landing2.png";
import landing3 from "../assets/landing3.png";

const Landing = () => {
  return (
    <>
      <div className="parent">
        <div className="div1">
          <h1 className="h1-light">Project</h1>
          <h1 className="h1-bold dark:text-white">Genesis 2.1</h1>
        </div>
        <div className="div2">
          <div className="div3">
            <img src={landing1} alt="landin1" />
          </div>
          <div className="div4">
            <img src={landing2} alt="landin2" />
          </div>
          <div className="div5">
          <p className="dark:text-white dark:font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="dark:text-white dark:font-thin">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div className="div6">
          <img src={landing3} alt="landin3" />
        </div>
      </div>
    </>
  );
};

export default Landing;
