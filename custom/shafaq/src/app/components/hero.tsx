"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section style={{minWidth:"100%"}}>
      <div className="hero">
        <div className="image-section">
          <Image
            className="img"
            src={require("../../../public/picture/image1.jpg")}
            alt={"pic"}
            width={400}
            height={400}
          ></Image>
        </div>

        <div className="content">
          <h1
            id="head"
            style={{
              fontWeight: "normal",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
          <span style={{ color: "#374151" }}>Hi I'm,</span> <span style={{ color: "#F2506D" }}>ShafaqueAnees</span>
          </h1>
          <div
            style={{
              height: "2px",
              width: "40%",
              margin: "auto",
              marginBottom: "20px",
              background: "#F2506D",
            }}
          ></div>
          <p className="para">
          I have built this portfolio with Next.js and Tailwind CSS, and I am actively advancing my skills in both Next.js and React. My expertise lies in HTML, CSS, and JavaScript, with a growing command of TypeScript. Driven by a passion for continuous learning, I am drawn to projects that challenge me and foster growth in both technical and creative aspects. I aim to deliver high-quality work that reflects my dedication and adaptability in an ever-evolving field.

          </p>

          <button id="btn">Hire me</button>
        </div>
      </div>


      {/* 2nd */}


      <div id="project">
  <section className="project-container">
    <div className="project-header">
      <h1>My Projects</h1>
    </div>
    <div className="project-row">
      <div className="project-item">
        <Image
          src="/picture/web.png"
          alt="Website Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>GIAIC Website Project</h2>
          <h1>Website</h1>
          <p>
            I specialize in creating visually engaging and user-friendly websites, blending creativity with functionality.
          </p>
          <a href="https://giaic-dashboard.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/atm-insert-card.jpg"
          alt="ATM Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>ATM Project</h2>
          <h1>ATM</h1>
          <p>
            The ATM project is designed to simulate basic banking functionalities, allowing users to perform transactions securely.
          </p>
          <a href="https://github.com/shafaqueAnees" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/calculator.png"
          alt="Calculator Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Calculator Project</h2>
          <h1>Calculator</h1>
          <p>
            A simple yet powerful tool for basic arithmetic operations like addition, subtraction, multiplication, and division.
          </p>
          <a href="https://calculator-ten-psi-47.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/stopwatch.png"
          alt="stopwatch"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Stop watch </h2>
          <h1>Stopwatch</h1>
          <p>
            An interactive game that tests users' knowledge across various topics with multiple-choice questions and real-time feedback.
          </p>
          <a href="https://stopwatch-sage-five.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/port.png"
          alt="Portfolio "
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Portfolio</h2>
          <h1>My portfolio</h1>
          <p>
            Create a portfolio with complete information and project
          </p>
          <a href="https://portfolio-final-iota-fawn.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/todo.jpg"
          alt="To-Do List Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>To-Do List Project</h2>
          <h1>To-Do List</h1>
          <p>
            A simple task management app that helps users organize and keep track of their daily activities and tasks.
          </p>
          <a href="https://basic-react-tvw7.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>

      <div className="project-item">
        <Image
          src="/picture/resume.png"
          alt="simple Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Resume Bulider</h2>
          <h1>Resume</h1>
          <p>
            An interactive game for players, focusing on engaging activities and increasing user participation.
          </p>
          <a href="https://resume-shafaq-h2tr.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
        
      </div>
      <div className="project-item">
        <Image
          src="/picture/simple webpage.png"
          alt="simple"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Simple Webpage</h2>
          <h1>Assignment Q2</h1>
          <p>
            Creating a simple webpage ,including Home, about and course required 
          </p>
          <a href="https://home-work-q2-wy88.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>
      <div className="project-item">
        <Image
          src="/picture/portfolio.png"
          alt="Portfolio Project"
          className="project-image"
          width={500}
          height={300}
        />
        <div className="project-info">
          <h2>Biography project</h2>
          <h1> professional bio </h1>
          <p>
      professional portfolio where you can saerch project, task and many others
          </p>
          <a href="https://professional-bio-gilt.vercel.app/" target="_blank" rel="noopener noreferrer">
            View Project..
          </a>
        </div>
      </div>


     
    </div>
    
  </section>
  
</div> 

      </section>
  );
}
