import Creation from '@/components/Creation';
import Header from '@/components/Header';
import MyModal from '@/components/Popup';
import { Transition } from '@headlessui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

type view = 'main' | 'creation' | 'change';
function Home() {
  const [view, setView] = useState<view>('main');


  return (
    <div className=" h-full relative flex flex-col">
      <MyModal />
      <Transition
        show={view === 'main'}
        enter="transition ease-in-out duration-300 transform "
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom=" translate-x-0"
        leaveTo="-translate-x-full"
        className="w-full h-full "
        afterLeave={() => {
          setView('creation');
        }}
      >
        <div className={` w-full flex   h-full px-5 sm:px-0`}>
          <div className=' w-full lg:w-1/2 h-full bg-[url("/images/bg-20.png")] bg-cover bg-center bg-opacity-10 lg:bg-none lg:pr-[10%] my-auto flex flex-col items-center lg:items-end justify-center'>
            <img
              src="/images/head.png"
              className=" absolute opacity-25 sm:scale-150  lg:hidden"
              alt=""
            />
            <div className=" flex flex-col items-center  lg:items-end z-10 ">
              <h1 className=" text-[50px] sm:text-[100px] tracking-widest leading-[1em] font-bold text-transparent textgradient">
                Art<span className=" text-[35px] sm:text-[70px]">s</span>Ai
              </h1>
              <p className=" text-[21px] sm:text-[42px] text-[#36ECF5] tracking-wider font-bold">
                Generator
              </p>
              <p className=" text-[10px] font-medium sm:text-[18px] text-white max-w-[368px] mt-3 text-center sm:text-justify ">
                Unleash your creativity with AI-powered artwork in seconds using
                our online platform.
                <span className=" text-[11px] sm:text-[20px] text-transparent textgradient-pp font-bold">
                  {' '}
                  Try it now!
                </span>
              </p>
              <button
                onClick={() => {
                  setView('change');
                }}
                className=" mx-auto mt-5 flex items-center gap-x-2  text-white py-[5px] sm:py-[10px] px-[10px] sm:px-[20px] bg-gradient-to-br from-[#0D9488] to-[#4468C5] rounded-[15px] text-[10px] sm:text-[20px] font-bold "
              >
                <p>Create</p>{' '}
                <img
                  src="/images/edit.png"
                  className=" sm:w-auto w-[15px]"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className='   w-1/2 h-full  my-auto  bg-[url("/images/bg.png")] bg-cover bg-center z-10 items-center  justify-start hidden lg:flex'>
            <img src="/images/head.png" alt="" />
          </div>
        </div>
      </Transition>
      <Transition
        afterLeave={() => {
          setView('main');
        }}
        show={view === 'creation'}
        enter="transition ease-in-out duration-300 transform "
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform "
        leaveFrom=" translate-x-0"
        leaveTo="translate-x-full"
        className="w-full h-full "
      >
        <Creation />
      </Transition>
    </div>
  );
}

export default Home;
