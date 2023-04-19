import { useState } from "react";
import Enterprise from "./Enterprise";
import Buisness from "./Buisness";

const options = [
  "For Business",
  "For Enterprises"
]

function Plans() {
  const [active, setActive] = useState("For Business")

  return (
    <div className="pt-8 bg-light">
      <h2 className="py-6 text-2xl md:text-3xl xl:text-[38px] font-bold text-[#202020] text-center">
        Price Plans
      </h2>

      <div className="w-fit mb-8 mx-auto py-[3px] px-1.5 bg-[#3C68FF2E] rounded-[5px]">
        {
          options.map(o => (
            <button
              key={o}
              onClick={() => setActive(o)}
              className={`not-theme px-6 py-2 first:mr-1 text-[13px] md:text-[15px] xl:text-[17px] font-medium ${o === active ? "bg-[#3C68FF] text-white" : "text-[#151515D4] hover:bg-[#3C68FF2E]"} rounded-[5px]`}
            >
              {o}
            </button>
          ))
        }
      </div>

      <div className="grid mdb:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto px-6 pb-8">
        {
          active === "For Business" &&
          <Buisness />
        }

        {
          active === "For Enterprises" &&
          <Enterprise />
        }
      </div>
    </div>
  )
}

export default Plans