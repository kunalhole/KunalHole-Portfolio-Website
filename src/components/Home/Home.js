import bgImg from "../../assets/profile-pic.png"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { useNavigate } from "react-router-dom"
import { SiTwitter, SiLinkedin, SiGithub, SiInstagram } from "react-icons/si"

const Home = () => {
  const objects = {
    initial: {
      y: "50%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  }
  const navigate = useNavigate()

  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Full Stack Developer",
      "Blockchain Geek",
      "Traveller 🏎️",
    ],
    loop: {},
  })

  return (
    <motion.section
      {...objects}
      transition={{
        delay: 0.3,
      }}
      className="h-full flex flex-col-reverse  font-sans items-center justify-around  overflow-hidden bg-transparent  md:justify-between  md:w-3/4 md:mx-auto   md:flex-row"
    >
      <div className=" flex flex-col  items-center justify-start overflow-hidden  space-y-5 md:items-start md:w-3/5">
        <h4 className="text-primary font-semibold  text-[30px]  mb-1 md:mb-3 md:text-[35px]">
          Hello, I'm Kunal Hole
        </h4>
        <h2 className="text-primary text-[25px] font-medium md:text-[30px]">
          <span className="text-rear">{text}</span>
          <Cursor />
        </h2>
        <div className="mt-2">
          <button
            onClick={navigate("/")}
            className="text-white px-4 py-2 text-base  bg-transparent border border-rear rounded-lg cursor-pointer hover:text-rear md:px-6 md:py-4 md:text-lg md:font-medium"
          >
            Get In Touch
          </button>
        </div>
        <div className="flex mt-5">
          <a
            href="https://www.linkedin.com/in/kunal-hole-3a9459189/"
            title="Kunal's Linkedin"
            className="text-primary hover:text-rear"
          >
            <SiLinkedin className="w-8 h-8 " />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-hole-3a9459189/"
            title="Kunal's Linkedin"
            className="text-primary hover:text-rear"
          >
            <SiGithub className="w-8 h-8 " />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-hole-3a9459189/"
            title="Kunal's Linkedin"
            className="text-primary hover:text-rear hover:border-b-0"
          >
            <SiTwitter className="w-8 h-8 " />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-hole-3a9459189/"
            title="Kunal's Linkedin"
            className="text-primary hover:text-rear"
          >
            <SiInstagram className="w-8 h-8 " />
          </a>
        </div>
      </div>

      <div>
        <img
          src={bgImg}
          alt="Kunal's"
          className="rounded-full object-cover h-[250px] w-[250px] md:w-[400px] md:h-[400px]"
        />
      </div>
    </motion.section>
  )
}

export default Home
