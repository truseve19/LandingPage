
function Header() {
  return (
    <div className="df justify-center gap-12 p-8 bg-[#001252] text-white">
      <img
        className="-mb-12 -ml-12"
        src="./img/microsoft/header.png"
        alt=""
      />

      <div className="mb-6">
        <h1 className="mb-4 text-[47px] leading-[1.2] font-extrabold">
          Buy Microsoft 365 <br />
          Starting from&nbsp;
          <span className="text-xl font-bold text-[#41A5EE] relative">
            <span className="absolute top-2.5 left-0.5 w-12 h-0.5 rotate-[20deg] bg-[#FF5454]"></span>
            ₹196
          </span>
          &nbsp;₹ 111/mo.
        </h1>

        <p className="text-[#F9F9F9A3]">
          Supercharge Your Productivity and Security with Automated Collaboration Tools <br />
          that Ensure Enterprise-Grade Security
        </p>
      </div>
    </div>
  )
}

export default Header