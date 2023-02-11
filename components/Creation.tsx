import { useState } from "react";
import { Transition } from "@headlessui/react";
const Creation = () => {
  const [createView, setCreateView] = useState(0);
  return (
    <div className=' w-full h-full flex flex-col items-center justify-center py-10'>
      <h1 className=' text-[36px] font-black text-white'>
        <span className=' text-[#2DD48F]'>Choose</span> a creation method
      </h1>
      <div className={` flex  w-3/4 h-full items-center  gap-x-10 `}>
        <Transition
          show={createView === 0 || createView === 1}
          enter=' duration-500 transition-all '
          enterFrom='transform scale-0 opacity-0 '
          enterTo='transform opacity-100 '
          leave=' transition transform duration-500 transition-all '
          leaveFrom='transform scale-100 opacity-100 '
          leaveTo='transform scale-0 opacity-0 '
          className=''
        >
          <div
            onClick={() => {
              setCreateView(1);
            }}
            className={` ${
              createView !== 1
                ? "hover:scale-[120%] cursor-pointer duration-300"
                : " scale-[120%]"
            } flex flex-col w-fit gap-y-5 group `}
          >
            <div className=' w-[280px] h-[288px] bg-[#D9D9D9] relative rounded-[15px]   '>
              <img src='/images/dog.png' className='  absolute z-10' alt='' />
              <div className=' w-full h-full absolute  rounded-l-[15px] rounded-br-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] rounded-tr-[100%] group-hover:animate-full group-hover:rounded-[15px] '></div>
              <div className='  bg-white rounded-[20px] w-[144px] h-[166px] absolute bottom-[5%]  right-[5%] rotate-[6.64deg]'>
                <div className=' bg-[#EDEDED] border-[1px] flex px-[20px] text-[24px] font-bold border-solid border-[#A4A4A4] rounded-[20px] absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'>
                  <span className='inline-flex  text-black overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform'>
                    Dog
                  </span>
                  <span className='box-border inline-block w-1 h-5 ml-1 my-auto  bg-white  animate-cursor will-change-transform'></span>
                </div>
              </div>
              <img
                src='/images/text.png'
                className='absolute top-0 right-[10%]'
                alt=''
              />
            </div>
            {createView === 0 && (
              <button className='w-4/5 py-3  text-[18px] font-black text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto'>
                Text to Art
              </button>
            )}
          </div>
        </Transition>
        <Transition
          show={createView === 0 || createView === 2}
          enter=' duration-500 transition-all '
          enterFrom='transform scale-0 opacity-0 '
          enterTo='transform scale-100 opacity-100 '
          leave=' transition transform duration-500 transition-all '
          leaveFrom='transform scale-100 opacity-100 '
          leaveTo='transform scale-0 opacity-0 '
          className=''
        >
          <div
            onClick={() => {
              setCreateView(2);
            }}
            className=' flex flex-col w-fit gap-y-5 group hover:scale-[120%] cursor-pointer duration-300'
          >
            <div className=' w-[280px] h-[288px] bg-[#D9D9D9] relative rounded-[15px]   '>
              <img
                src='/images/monster.png'
                className='  absolute z-10'
                alt=''
              />
              <div className=' w-full h-full absolute  rounded-l-[15px] rounded-br-[15px] bg-gradient-to-r from-[#0D9488]  to-[#FFB100] rounded-tr-[100%] group-hover:animate-full group-hover:rounded-[15px] '></div>
              <div className='  bg-white rounded-[20px] w-[124px] h-[166px] absolute bottom-[5%]  right-[5%] rotate-[6.64deg]'>
                <img
                  src='/images/monster-mini-color.png'
                  className='absolute top-0 right-[5%] z-10 opacity-0 group-hover:animate-appear group-hover:opacity-100 '
                  alt=''
                />
                <img
                  src='/images/monster-mini.png'
                  className='absolute top-0 right-[5%] '
                  alt=''
                />
              </div>
              <img
                src='/images/sketch.png'
                className='absolute top-0 right-[5%]'
                alt=''
              />
            </div>
            <button className=' w-4/5 py-3  text-[18px] font-black text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  to-[#FFB100] flex items-center justify-center mx-auto'>
              Sketch to Art
            </button>
          </div>
        </Transition>
        <Transition
          show={createView === 0 || createView === 3}
          enter=' transition transform duration-500 transition-all '
          enterFrom='transform scale-0 opacity-0 '
          enterTo='transform scale-100 opacity-100 '
          leave=' transition transform duration-500 transition-all '
          leaveFrom='transform scale-100 opacity-100 '
          leaveTo='transform scale-0 opacity-0 '
          className=''
        >
          <div
            onClick={() => {
              setCreateView(3);
            }}
            className=' flex flex-col  w-fit gap-y-5 group hover:scale-[120%] cursor-pointer duration-300'
          >
            <div className=' w-[280px] h-[288px] bg-[#D9D9D9] relative rounded-[15px]   '>
              <img
                src='/images/sando.png'
                className=' w-[174px] h-[289px]  absolute z-10'
                alt=''
              />
              <div className=' w-full h-full absolute  rounded-l-[15px] rounded-br-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] rounded-tr-[100%] group-hover:animate-full group-hover:rounded-[15px]'></div>
              <div className='  bg-white rounded-[20px] w-[144px] h-[166px] absolute bottom-[5%]  right-[5%] rotate-[6.64deg]'>
                <img
                  src='/images/sando-mini.png'
                  className='absolute top-0 right-[10%] '
                  alt=''
                />
              </div>
              <img
                src='/images/drawing.png'
                className='absolute top-0 right-[0%]'
                alt=''
              />
            </div>
            <button className=' w-4/5 py-3  text-[18px] font-black text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto'>
              Drawing to Animation
            </button>
          </div>
        </Transition>
      </div>
    </div>
  );
};
export default Creation;
