import Image from "next/image";
import { Transition } from '@headlessui/react';

function Animater({ data = [], animate = {}, selected, wrapperCls = "", }) {
  return (
    <div className={`dc key-service-box ${wrapperCls}`}>
      {
        data.map(d => (
          <Transition
            key={d.id}
            show={d.id === selected}
            className={`dc flex-col key-service-img-box ${d?.className || ""}`}
            enter="transition-transform duration-1000"
            leave="transition-transform duration-700"
            enterFrom={animate?.enterFrom}
            enterTo={animate?.enterTo}
            leaveFrom={animate?.enterTo}
            leaveTo={animate?.leaveTo}
          >
            <Image {...d.imgProps} />
          </Transition>
        ))
      }
    </div>
  )
}

export default Animater