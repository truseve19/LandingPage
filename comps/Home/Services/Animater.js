import Image from "next/image";
import { Transition } from '@headlessui/react';

function Animater({ data = [], selected, wrapperCls = "" }) {
  return (
    <div className={`dc key-service-box ${wrapperCls}`}>
      {
        data.map(d => (
          <Transition
            key={d.id}
            show={d.id === selected}
            className={`dc flex-col key-service-img-box max-sm:p-2`}
            enter="transition-transform duration-1000"
            leave="transition-transform duration-700"
            enterFrom={d.animate.enterFrom}
            enterTo={d.animate.enterTo}
            leaveFrom={d.animate.enterTo}
            leaveTo={d.animate.leaveTo}
          >
            <Image {...d.imgProps} />
          </Transition>
        ))
      }
    </div>
  )
}

export default Animater