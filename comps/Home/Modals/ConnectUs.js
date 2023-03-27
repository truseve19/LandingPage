import Image from "next/image";
import Modal from "../../UIComp/Modal";

function ConnectUs({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title=""
    >
      <div className="px-4 text-left">
        <h1 className="df gap-1 -mt-1 mb-4 text-xl lg:text-[26px] font-bold text-[#202020]">
          <Image
            height={32}
            width={32}
            src="/img/home/thunder.webp"
            alt=""
            className="rotate-12 scale-[1.2] -ml-3"
          />
          Connect with us !
        </h1>

        <div className="mb-4">
          <label htmlFor="" className="text-[15px] font-medium text-[#6B6B6BC9]">
            Name
          </label>

          <input
            className=" border border-[#B9B0B05C] rounded-[10px]"
            type="text"
            name=""
            id=""
          />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="text-[15px] font-medium text-[#6B6B6BC9]">
            Business email
          </label>

          <input
            className=" border border-[#B9B0B05C] rounded-[10px]"
            type="text"
            name=""
            id=""
          />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="text-[15px] font-medium text-[#6B6B6BC9]">
            Mobile number
          </label>

          <input
            className=" border border-[#B9B0B05C] rounded-[10px]"
            type="text"
            name=""
            id=""
          />
        </div>

        <div className="mb-8">
          <label htmlFor="" className="text-[15px] font-medium text-[#6B6B6BC9]">
            Interested product
          </label>

          <select
            className="border border-[#B9B0B05C] rounded-[10px]"
            name=""
            id=""
          >
            <option value=""></option>
          </select>
        </div>

        <button className="block mx-auto px-12 py-1.5">
          Submit
        </button>
      </div>
    </Modal>
  )
}

export default ConnectUs