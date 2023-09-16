import { useState } from "react"
import Achievement from "./Achievement"
import Education from "./Education"
import Skill from "./Skill"

import photo from "../../assets/photo.jpeg"

const About = () => {
  const [type, setType] = useState("education")
  return (
    <section
      className="text-primary overflow-hidden h-full"
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

      <div className="flex justify-between flex-wrap p-10">
        <div className="w-[35%]">
          <img
            src={photo}
            alt="photoPic"
            className="w-full h-3/4 object-contain rounded-4xl"
          />
        </div>
        <div className="w-[60%] space-y-5">
          <h1 className="text-5xl font-semibold">
            <span className="text-6xl text-rear">A</span>bout{" "}
            <span className="text-6xl text-rear">M</span>e
          </h1>
          <p className="w-9/12 text-slate-300 font-extralight">
            To secure a challenging position as a Full Stack Web Developer in
            Blockchain where my technical skills, creativity, and
            problem-solving abilities can be utilized to design, develop, and
            maintain high-quality web applications that meet client
            requirements.
          </p>

          <div className="flex mt-20 mb-40 justify-between w-[60%]">
            <button
              className={`${
                type === "education" ? "border-rear" : "border-none"
              }`}
              onClick={() => setType("education")}
            >
              Education
            </button>
            <button
              className={`${type === "skill" ? "border-rear" : "border-none"}`}
              onClick={() => setType("skill")}
            >
              Skills
            </button>
            <button
              className={`${
                type === "achievement" ? "border border-rear " : "border-none"
              }`}
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
            <Achievement />
          ) : (
            <Education /> // Default to Education if the type is not recognized.
          )}
        </div>
      </div>
    </section>
  )
}

export default About