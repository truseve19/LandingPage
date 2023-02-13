import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Arrow from "../../svg/dropdown.svg";
import links from "../../constants/links";

function Footer() {
  const [active, setActive] = useState("")

  return (
    <footer className="grid sm:grid-cols-3 xl:grid-cols-7 gap-4 md:gap-8 p-4 xs:p-6 sm:p-8 text-sm bg-[#E6E8ED] text-[#525A62]">
      {
        links.map(l => (
          <div
            key={l.title}
            className={`overflow-hidden ${active === l.title ? "" : "max-sm:h-6"}`}
          >
            <strong
              className="df mb-2 md:mb-4 text-[15px] font-semibold text-[#494949] cursor-pointer"
              onClick={() => setActive(p => p === l.title ? "" : l.title)}
            >
              {l.title}

              <Arrow className="w-4 h-4 ml-auto sm:hidden" />
            </strong>

            {l.list.map(a => (
              <Link href="/" key={a} className="block mb-2 hover:text-primary">
                {a}
              </Link>
            ))}
          </div>
        ))
      }

      <div className="sm:col-span-3 xl:col-span-1">
        <Link href="/" className="block mb-2">About us</Link>
        <Link href="/" className="block mb-2">Privacy policy</Link>
        <div className="mb-4">Truseve Private limited, No 3, Teynampet, Chennai</div>
        <div className="df gap-4 flex-wrap">
          <Image
            src="/img/footer/fb.png"
            alt=""
            width={24}
            height={24}
          />
          <Image
            src="/img/footer/insta.png"
            alt=""
            width={24}
            height={24}
          />
          <Image
            src="/img/footer/twitter.png"
            alt=""
            width={24}
            height={24}
          />
          <Image
            src="/img/footer/watsapp.png"
            alt=""
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer