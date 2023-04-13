import { useState } from "react";
import Link from "next/link";

import RightArrow from "../../svg/arrow.svg";
import Hamburger from "../../svg/hamburger.svg";
import Cross from "../../svg/cross.svg";

import links from "../../constants/links";
import ConnectUsBtn from "../Common/ConnectUsBtn";

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="df gap-6 px-4 xs:px-6 py-2">
      <Link href="/" className="mr-auto">
        <img
          className="h-16"
          src="/truseve-logo.png"
          alt="Truseve logo"
        />
      </Link>

      <div className="lg:hidden">
        <button
          className="not-theme p-0.5 hover:bg-white rounded group"
          onClick={() => setOpen(p => !p)}
        >
          {
            !open
              ? <Hamburger className="group-hover:stroke-primary" />
              : <Cross className="w-6 h-6 group-hover:fill-primary" />
          }
        </button>
      </div>

      <div className={`nav-wrapper ${open ? "" : "max-lg:hidden"}`}>
        <div className="group shrink-0 lg:pb-2">
          <button
            className="not-theme text-[#191c1f] lg:hover:text-primary max-lg:py-1 max-lg:px-1.5 max-lg:bg-white lg:py-1"
          >
            Product & Solution
          </button>

          <div className="nav-products">
            {
              links.map(l => (
                <div
                  key={l.title}
                  className="max-lg:mb-2"
                >
                  <Link
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className="df mb-2 md:mb-4 font-semibold text-[#010101] hover:text-primary cursor-pointer"
                  >
                    {l.title}
                  </Link>

                  {l.list.map(a => (
                    <Link
                      key={a.title}
                      href={a.to}
                      className="df lg:px-1 lg:p-0.5 lg:mr-1.5 mb-2 text-[13px] xl:text-[15px] text-[#525A62] hover:text-primary hover:bg-[rgba(62,99,235,.1)] group/navlink"
                      onClick={() => setOpen(false)}
                    >
                      {a.title}
                      <RightArrow className="w-5 h-5 ml-auto hidden group-hover/navlink:block" />
                    </Link>
                  ))}
                </div>
              ))
            }
          </div>
        </div>

        <Link
          href=""
          className="block py-1 max-lg:px-1.5 shrink-0 text-[#191c1f] hover:text-primary"
          onClick={() => setOpen(false)}
        >
          About us
        </Link>

        <Link
          href=""
          className="block py-1 max-lg:px-1.5 shrink-0 text-[#191c1f] hover:text-primary"
          onClick={() => setOpen(false)}
        >
          Contact us
        </Link>

        <ConnectUsBtn
          txt="Request Quote"
          className="shrink-0 max-xs:absolute max-xs:bottom-4"
        />
      </div>
    </nav>
  )
}

export default Nav