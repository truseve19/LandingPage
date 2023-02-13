import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Close from "../../svg/cross.svg";

function Modal({
  isOpen, closeModal, wrapperCls = "",
  title = "", needTitleBar = true,
  children
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50"
        onClose={closeModal}
      >
        <div className="min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="h-screen flex items-center justify-center">
              <div className={`max-w-fit xs:min-w-[380px] p-6 mx-4 xs:mx-0 transform bg-white shadow-xl rounded-2xl ${wrapperCls}`}>
                {
                  needTitleBar &&
                  <div className="df">
                    {title && <h1>{title}</h1>}

                    <Close
                      className="w-8 h-8 ml-auto hover:fill-primary"
                      onClick={closeModal}
                    />
                  </div>
                }

                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal