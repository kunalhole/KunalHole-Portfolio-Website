const Skill = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h3 className="text-xl text-rear font-medium">Programming Language</h3>
        <div className=" space-x-2 space-y-2">
          <button className="bg-cplus px-2 py-2 rounded-lg md:px-4 md:py-2 col-span-2">
            C++
          </button>
          <button className="bg-javascript text-secondary px-2 py-2 rounded-lg md:px-4 md:py-2">
            JavaScript
          </button>
          <button className="bg-cplus px-2 py-2 rounded-lg md:px-4 md:py-2">
            C
          </button>
          <button className="bg-gray-700 px-2 py-2 rounded-lg md:px-4 md:py-2">
            Solidity
          </button>
          <button className="bg-java px-2 py-2 rounded-lg md:px-4 md:py-2">
            Java
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-xl text-rear font-medium">FrameWorks & Libiries</h3>
        <div className="space-y-3 space-x-2">
          <button className="bg-react rounded-lg px-4 py-2">React.Js</button>
          <button className="bg-next text-secondary rounded-lg px-4 py-2">
            Next.Js
          </button>
          <button className="bg-node  rounded-lg px-4 py-2">Node.Js</button>
          <button className="bg-next text-secondary rounded-lg px-4 py-2">
            Express.Js
          </button>
          <button className="bg-redux  rounded-lg px-4 py-2">
            Redux Toolkit
          </button>
          <button className="bg-tailwind rounded-lg px-4 py-2">
            TailwindCSS
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl text-rear font-medium">Databases</h3>
        <div className="space-x-3">
          <button className="bg-yellow-500 rounded-lg px-4 py-2">
            Firebase
          </button>
          <button className="bg-mysql rounded-lg px-4 py-2">MySQL</button>
          <button className="bg-mongo rounded-lg px-4 py-2">MongoDB</button>
          <button className="bg-ganashe rounded-lg px-4 py-2">Ganache</button>
        </div>
      </div>
    </div>
  )
}

export default Skill
