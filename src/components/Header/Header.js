import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { AiOutlineDownload } from "react-icons/ai"

const Header = () => {
  const navigate = useNavigate()
  const objects = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  }

  const handleDownload = async () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1WCBkK4XuO2TrNAbYvNHSTFqx_BUei1Y_/view?usp=drivesdk"

    const downloadLink = document.createElement("a")
    downloadLink.href = resumeUrl
    downloadLink.download = "Kunal_Hole_Resume.pdf"
    downloadLink.click()
  }

  return (
    <motion.header
      {...objects}
      transition={{
        deplay: 0.2,
      }}
      className=" text-primary w-full h-fit py-5 max-w-[75vw] sticky top-0 z-10 flex justify-between items-center mx-auto "
    >
      <h2
        onClick={() => navigate("/")}
        className=" text-[3rem] font-bold cursor-pointer "
      >
        <span className="text-rear">K </span>unal
      </h2>

      <div className="m-[2rem] cursor-pointer text-xl">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button
        onClick={handleDownload}
        className="flex items-center border border-rear rounded-lg px-4 py-2 justify-center hover:text-rear"
      >
        Resume
        <AiOutlineDownload className=" m-2 animate-bounce" />
      </button>
    </motion.header>
  )
}

export default Header
