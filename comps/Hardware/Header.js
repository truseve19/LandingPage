
function Header() {
  return (
    <section className="hardware-products-p-x max-sm:py-20 relative text-white">
      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] xl:leading-[1.2] font-bold">
        The Best Hardwares for <br />
        Unbeatable Performance, <br />
        Customization, and Reliability!
      </h1>

      <p className="mt-4 mb-8 text-sm md:text-base xl:text-lg font-medium opacity-80">
        30 years of service in Hardware industry
      </p>

      <button className="px-8 py-2 lg:px-12 lg:py-3 text-sm md:text-base font-medium bg-[#002D58] border border-[#007BFF] rounded-[5px]">
        Connect Now
      </button>

      <img
        className="absolute inset-0 object-cover w-full h-full -z-10"
        src="/img/hardware/header.png"
        alt=""
      />
    </section>
  )
}

export default Header