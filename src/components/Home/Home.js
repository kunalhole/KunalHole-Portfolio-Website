import bgImg from "../../assets/profile-pic.png"
import { motion } from "framer-motion"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { useNavigate } from "react-router-dom"
import { SiTwitter, SiLinkedin, SiGithub, SiInstagram } from "react-icons/si"

const Home = () => {
  const leftPart = {
    initial: {
      x: "-50%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  }
  const rightPart = {
    initial: {
      x: "50%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
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
    <section className="h-full flex flex-col-reverse  items-center justify-around  overflow-x-hidden overflow-y-hidden bg-transparent  md:justify-between  md:w-3/4 md:mx-auto   md:flex-row">
      <motion.div
        {...leftPart}
        transition={{
          delay: 0.4,
        }}
        className=" flex flex-col  items-center justify-start overflow-hidden  space-y-8 md:items-start md:w-3/5"
      >
        <h2 className="text-primary text-6xl font-semibold">Hari Krishna ,</h2>
        <h4 className="text-primary font-normal  text-[30px]  mb-1 md:mb-3 md:text-[35px]">
          I'm Kunal Hole From <span className="text-orange-600">Bh</span>ar
          <span className="text-green-600">at</span>
        </h4>
        <h2 className="text-primary text-[25px] font-medium md:text-[30px]">
          <span className="text-rear">{text}</span>
          <Cursor />
        </h2>
        <div className="mt-2">
          <button
            onClick={() => navigate("/contact")}
            className="text-white px-4 py-2 text-base  bg-transparent border border-rear rounded-lg cursor-pointer hover:text-rear md:px-6 md:py-4 md:text-lg md:font-medium"
          >
            Get In Touch
          </button>
        </div>
        <div className="flex space-x-10">
          <a
            href="https://www.linkedin.com/in/kunal-hole-3a9459189/"
            className="text-primary hover:text-rear hover:border-b-0 m-0 hover:pb-0"
          >
            <SiLinkedin title="Kunal's LinkdIn" className="w-8 h-8 " />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-hole-3a9459189/"
            className="text-primary hover:text-rear hover:border-b-0 m-0 hover:pb-0"
          >
            <SiGithub title="Kunal's Github" className="w-8 h-8 " />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-hole-3a9459189/"
            className="text-primary hover:text-rear hover:border-b-0 m-0 hover:pb-0"
          >
            <SiTwitter title="Kunal's Twitter" className="w-8 h-8 " />
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-hole-3a9459189/"
            className="text-primary hover:text-rear hover:border-b-0 m-0 hover:pb-0"
          >
            <SiInstagram title="Kunal's Instagram" className="w-8 h-8 " />
          </a>
        </div>
      </motion.div>

      <motion.div
        {...rightPart}
        transition={{
          delay: 0.4,
        }}
      >
        <img
          src={bgImg}
          alt="Kunal's"
          className="rounded-full object-cover h-[250px] w-[250px] md:w-[400px] md:h-[400px]"
        />
      </motion.div>
    </section>
  )
}

export default Home
