
function Header() {
  return (
    <div className="grid mdb:flex mdb:items-center justify-center gap-12 p-8 bg-[#001252] text-white">
      <img
        className="-mb-12 xl:-ml-12"
        src="./img/microsoft/header.png"
        alt=""
        loading="lazy"
        width={483}
        height={461}
      />

      <div className="mb-6 max-mdb:text-center">
        <h1 className="mb-4 text-2xl xs:text-3xl md:text-4xl xl:text-[47px] xl:leading-[1.2] font-extrabold">
          Buy Microsoft 365 <br />
          Starting from&nbsp;
          <span className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] font-bold text-[#41A5EE] relative">
            <span className="absolute top-2.5 md:top-4 xl:top-6 left-0.5 w-12 md:w-14 xl:w-20 h-0.5 rotate-[20deg] bg-[#FF5454]"></span>
            ₹136
          </span><br className="lg:hidden" />
          &nbsp;₹ 111/mo.
        </h1>

        <p className="text-xs md:text-sm xl:text-base text-[#F9F9F9A3]">
          Supercharge Your Productivity and Security with Automated Collaboration Tools that Ensure Enterprise-Grade Security
        </p>
      </div>
    </div>
  )
}

export default Header