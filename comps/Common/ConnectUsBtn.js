import { useState } from "react";
import ConnectUs from "../Home/Modals/ConnectUs";

function ConnectUsBtn({ txt, className }) {
  const [modal, setModal] = useState(false)

  const updateModal = () => setModal(p => !p)

  return (
    <>
      <button
        className={className}
        onClick={updateModal}
      >
        {txt}
      </button>

      {
        modal &&
        <ConnectUs
          isOpen
          closeModal={updateModal}
        />
      }
    </>
  )
}

export default ConnectUsBtn