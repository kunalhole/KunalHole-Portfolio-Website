import { useState } from "react"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [message, setMessage] = useState("")
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(mail)
    console.log(message)
    // emailjs
    //   .sendForm(
    //     "service_cw9wrsh",
    //     "template_vprgqka",
    //     form.current,
    //     "H5ZTB8trWyejsGNvt"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text)

    //       setName("")
    //       setMail("")
    //       setMessage("")
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
  }
  return (
    <main className="w-full h-full flex justify-center items-center">
      <section className=" w-1/2 h-4/6 flex flex-col p-5 space-y-10">
        <div className="flex flex-col justify-center items-center space-y-5">
          <h1 className="text-primary font-semibold text-4xl">
            <span className="text-rear text-5xl">C</span>ontact{" "}
            <span className="text-rear text-5xl">M</span>e
          </h1>
          <p className="text-lg text-primary font-extralight">
            Please fill out the form below to discuss any work opportunities.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-5 items-center"
        >
          <input
            type="text"
            value={name}
            className="w-1/2 p-3 rounded-lg text-primary font-light bg-transparent border border-rear  focus:border-rear"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={mail}
            className="w-1/2 p-3 rounded-lg text-primary font-light bg-transparent border border-rear"
            placeholder="Your Email"
            onChange={(e) => setMail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-1/2 p-3 bg-transparent font-thin rounded-lg border border-rear text-primary"
          ></textarea>
          <input
            className="border border-rear text-primary font-medium px-6 py-4  rounded-lg cursor-pointer hover:text-rear"
            type="submit"
            value="Send 📧"
            disabled={!name || !mail || !message}
          ></input>
        </form>
      </section>
    </main>
  )
}

export default Contact
