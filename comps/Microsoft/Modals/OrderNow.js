import Modal from "../../UIComp/Modal";

function OrderNow({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      title="Order Now!"
    >
      <div className="text-left">
        <div className="mb-4 mt-6">
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


        <div className="mb-4">
          <legend className="text-[15px] font-medium text-[#6B6B6BC9]">
            Product Category
          </legend>

          <div className="df gap-6">
            <div className="df">
              <input
                className=" border border-[#B9B0B05C] rounded-[10px] accent-primary"
                type="radio"
                name=""
                id=""
              />
              <label htmlFor="">
                Business
              </label>
            </div>

            <div className="df">
              <input
                className=" border border-[#B9B0B05C] rounded-[10px] accent-primary"
                type="radio"
                name=""
                id=""
              />
              <label htmlFor="">
                Enterprise
              </label>
            </div>
          </div>
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

export default OrderNow