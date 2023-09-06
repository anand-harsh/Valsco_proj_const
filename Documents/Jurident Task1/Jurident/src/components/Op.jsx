import img from '../assets/Image.svg';
import img1 from '../assets/Image (1).svg';
import img2 from '../assets/Image (2).svg';
import './Op.css'; // Make sure to have your CSS file imported here

function Op() {
  return (
    <div className="ourprojects">
      <h1 className="header">
        <span style={{ color: "#BDBDBD" }}>Our</span> <br />
        <span className='dark:text-white' style={{ fontWeight: "700" }}>Projects</span>{" "}
      </h1>
      <div className="op-main dark:bg-darkGrey">
        <div className="section">
          <div className="image">
            <img src={img} alt="" className="img"/>
          </div>
          <div className="op-content">
            <h1 className="project-title dark:text-white">01/PROJECT NAME</h1>
            <p className="project-description dark:text-white">
              Goblin concept digital sculpture with human-like skin learned a lot
              of quick tips and look development.
            </p>
            <p className='dark:text-white'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
            <a href="/project" className="project-link">More shots from this project</a>
          </div>
        </div>
        <div className="section">
          <div className="image">
            <img src={img1} alt="" className="img"/>
          </div>
          <div className="op-content">
            <h1 className="project-title dark:text-white">02/PROJECT NAME</h1>
            <p className="project-description dark:text-white">
              Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.
            </p>
            <p className='dark:text-white'>Crafted in Figma and published using Makers. The easiest way to build simple sites</p>
            <a href="#" className="project-link">See case study</a>
          </div>
        </div>
        <div className="section">
          <div className="image">
            <img src={img2} alt="" className="img"/>
          </div>
          <div className="op-content">
            <h1 className="project-title dark:text-white">03/PROJECT NAME</h1>
            <p className="project-description dark:text-white">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <p className='dark:text-white'>Vellt officia consequat duis enim vellt molllt. Exercitation veniam consequat sunt nostrud amet.</p>
            <a href="#" className="project-link">See case study</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Op;