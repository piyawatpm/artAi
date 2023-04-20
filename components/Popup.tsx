import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10  ' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-80' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto pt-[75px]'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <div className=' relative  xl:w-[70%]'>
                  <img
                    src={`/images/slide.png`}
                    className=' w-full sm:rounded-[20px]'
                  ></img>
                  <button onClick={closeModal}>
                    <img
                      src='/images/close.png'
                      className='top-0 xl:top-5 right-0 xl:right-5 absolute w-[40px] sm:w-auto scale-50 sm:scale-75'
                    ></img>
                  </button>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
