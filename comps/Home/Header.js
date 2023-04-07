import { useEffect, useState } from "react";
import Image from "next/image";

import ConnectUsBtn from "../Common/ConnectUsBtn";

function Header() {
  const [current, setCurrent] = useState("infrastructure")
  const [text, setText] = useState("")

  useEffect(() => {
    let id = setTimeout(() => {
      if (text !== current) {
        setText(current.substring(0, text.length + 1))
      }
    }, 130)

    return () => clearTimeout(id)
  }, [text])

  useEffect(() => {
    let id = null
    if (text === current) {
      setCurrent(p => {
        if (p === "infrastructure") return "operations"
        if (p === "operations") return "solutions"
        return "infrastructure"
      })

      id = setTimeout(() => {
        setText("")
      }, 2000)
    }

    return () => clearTimeout(id)
  }, [text])

  return (
    <section className="bg-light relative max-sm:text-center">
      <div className="grid sm:grid-cols-3 gap-4 items-center max-sm:min-h-[30vh] md:max-w-2xl mdb:max-w-3xl lg:max-w-5xl xl:max-w-6xl md:mx-auto">
        <div className="sm:col-span-2">
          <h1 className="theme-h1">
            One stop solution for <br />
            all your IT&nbsp;
            <span id="text" className="inline-block mx-auto">{text}</span>
            <span id="cursor" className="inline-block ml-0.5"></span>
          </h1>

          <p className="my-4 text-sm md:text-base xl:text-lg text-[rgba(0,0,0,.56)]">
            We serve businesses of all sizes and sectors
          </p>

          <ConnectUsBtn
            txt={<>Let’s Connect <img className="w-7" src="/img/home/hand.webp" alt="" /> </>}
            className="df mx-auto sm:mx-0 px-6 py-2 text-xs md:text-sm xl:text-base"
          />
        </div>

        <div className="max-sm:hidden">
          <Image
            src="/img/home/header.png"
            alt=""
            width={380}
            height={320}
          />
        </div>
      </div>
    </section>
  )
}

export default Header