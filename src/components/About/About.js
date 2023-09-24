import { useState } from "react"

import Education from "./Education"
import Skill from "./Skill"

import photo from "../../assets/photo.jpeg"
import Experience from "./Experience"
import { motion } from "framer-motion"

const About = () => {
  const imgPart = {
    initial: {
      x: "-50%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  }

  const contentPart = {
    initial: { x: "50%", opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  }

  const [type, setType] = useState("education")
  return (
    <section
      className="text-primary  h-full w-full md:overflow-hidden flex justify-between  p-10"
      // id="about"
      // className="text-primary bg-gray-400  w-4/6 mx-auto  h-full  flex  flex-col items-center"
    >
      <motion.img
        {...imgPart}
        transition={{
          delay: 0.2,
        }}
        src={photo}
        alt="photoPic"
        className=" hidden ml-5 md:inline-block object-contain rounded-lg  "
      />

      <motion.div
        {...contentPart}
        transition={{
          delay:0.2
        }}
        className="w-full flex flex-col items-center md:w-[60%] space-y-10"
      >
        <h1 className=" text-4xl md:text-5xl font-semibold">
          <span className="text-5xl md:text-6xl text-rear">A</span>bout{" "}
          <span className="text-5xl md:text-6xl text-rear">M</span>e
        </h1>
        <p className="w-full md:w-9/12  text-justify text-slate-300 font-extralight">
          To secure a challenging position as a Full Stack Web Developer in
          Blockchain where my technical skills, creativity, and problem-solving
          abilities can be utilized to design, develop, and maintain
          high-quality web applications that meet client requirements.
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
        <div className="w-[60%] h-full">
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
      </motion.div>
    </section>
  )
}

export default About
