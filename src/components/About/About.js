import { useState } from "react"

import Education from "./Education"
import Skill from "./Skill"

import photo from "../../assets/photo.jpeg"
import Experience from "./Experience"

const About = () => {
  const [type, setType] = useState("education")
  return (
    <section
      className="text-primary h-full w-full  md:overflow-hidden "
      // id="about"
      // className="text-primary bg-gray-400  w-4/6 mx-auto  h-full  flex  flex-col items-center"
    >
      {/* <div className=" w-3/4 my-8 bg-violet-400">
        <p>
          To Secure a challenging position as a Full Stack Web Developer in
          Blockchain where my technical skills,creativity, and problem solving
          abilities can be utilized to design, develop, and maintain
          high-quality web application that meet client requirements.
        </p>
      </div>
      <div className="bg-yellow-400 w-3/4 flex flex-col  h-full">
        <div className="w-full flex justify-between items-center p-5">
          <button onClick={() => setType("education")}>Education</button>
          <button onClick={() => setType("skill")}>Skills</button>
          <button onClick={() => setType("achievement")}>Achievements</button>
        </div>

        {type === "eduaction" ? (
          <Education />
        ) : type === "skill" ? (
          <Skill />
        ) : type === "achievement" ? (
          <Achievement />
        ) : (
          <Education />
        )}
      </div> */}

      <div className="flex justify-between  flex-wrap p-10">
        <div className="w-1/2 md:w-[35%]">
          <img
            src={photo}
            alt="photoPic"
            className=" hidden md:inline-block w-full h-3/4 object-contain rounded-4xl "
          />
        </div>
        <div className=" w-full flex flex-col items-center md:w-[60%] space-y-5">
          <h1 className=" text-4xl md:text-5xl font-semibold">
            <span className="text-5xl md:text-6xl text-rear">A</span>bout{" "}
            <span className="text-5xl md:text-6xl text-rear">M</span>e
          </h1>
          <p className="w-full md:w-9/12 text-center text-slate-300 font-extralight">
            To secure a challenging position as a Full Stack Web Developer in
            Blockchain where my technical skills, creativity, and
            problem-solving abilities can be utilized to design, develop, and
            maintain high-quality web applications that meet client
            requirements.
          </p>

          <div className="flex mt-20 mb-40 space-x-4 justify-between md:w-[60%]">
            <button
              className="text-xl font-medium active:text-rear"
              onClick={() => setType("education")}
            >
              Education
            </button>
            <button
              className="text-xl font-medium active:text-rear"
              onClick={() => setType("skill")}
            >
              Skills
            </button>
            <button
              className="text-xl font-medium active:text-rear"
              onClick={() => setType("achievement")}
            >
              Experience
            </button>
          </div>

          {/* Render content based on the selected type */}
          {type === "education" ? (
            <Education />
          ) : type === "skill" ? (
            <Skill />
          ) : type === "achievement" ? (
            <Experience />
          ) : (
            <Education /> // Default to Education if the type is not recognized.
          )}
        </div>
      </div>
    </section>
  )
}

export default About
