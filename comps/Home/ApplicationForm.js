import Circle from "../../svg/circle.svg";
import Cloud from "../../svg/cloud.svg";

function ApplicationForm() {
  return (
    <section id="contact-form" className="bg-[#EFF1F6] relative isolate">
      <div className="contact-form-divider-bg absolute inset-0 -z-10"></div>

      <Circle className="absolute top-1/2 left-0 z-[1]" />
      <Circle className="absolute top-20 right-0 z-[1]" />
      <Cloud className="w-[173px] h-20 max-sm:scale-75 absolute bottom-8 right-0 fill-[#FFFFFF21]" />
      <Cloud className="w-[173px] h-20 max-sm:hidden absolute top-1/2 right-20 fill-[#FFFFFF21]" />
      <Cloud className="w-[173px] h-20 max-sm:hidden absolute bottom-32 left-60 fill-[#FFFFFF26]" />
      <Cloud className="w-[173px] h-20 max-sm:scale-75 absolute bottom-8 left-0 fill-[#FFFFFF26]" />

      <h2 className="theme-h2 mb-2 font-semibold text-[#030E36]">
        Contact our Team
      </h2>

      <div className="mb-8 lg:mb-12 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-[#494949] text-center">
        Just fill out the form and we will be in touch with you <br /> as soon as possible!
      </div>

      <form className=" max-w-xs md:max-w-md mx-auto mb-16 p-8 text-sm md:text-base bg-[#FAFBFC] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-2xl relative">
        <Cloud className="max-sm:hidden absolute top-8 -right-40 -z-10 fill-[#5482F9DE]" />
        <Cloud className="max-sm:hidden absolute top-20 -left-40 -z-10 fill-[#5482F9DE]" />
        <label className="block mb-2 text-[#837F7F]" htmlFor="">Name</label>
        <input
          type="text"
          className="mb-6 bg-[#F0F3F4] rounded shadow-[inset_0_4px_4px_rgba(0,0,0,0.01)]"
        />

        <label className="block mb-2 text-[#837F7F]" htmlFor="">Company name</label>
        <input
          type="text"
          className="mb-6 bg-[#F0F3F4] rounded shadow-[inset_0_4px_4px_rgba(0,0,0,0.01)]"
        />

        <label className="block mb-2 text-[#837F7F]" htmlFor="">Mobile Number</label>
        <input
          type="text"
          className="mb-12 bg-[#F0F3F4] rounded shadow-[inset_0_4px_4px_rgba(0,0,0,0.01)]"
        />

        <button className="block mx-auto px-12 py-2 rounded">
          Submit
        </button>
      </form>
    </section>
  )
}

export default ApplicationForm