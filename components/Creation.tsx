import { useState } from "react";
import { Transition } from "@headlessui/react";
import CreationDetail from "./CreationDetail";
export enum CreationView {
  All = "ALL",
  TextToArt = "Text to Art",
  SketchToArt = "Sketch to Art",
  DrawingToAnimation = "Drawing to Animation",
}
const Creation = () => {
  const [creationView, setCreationView] = useState<CreationView>(
    CreationView.All
  );
  const [isReady, setIsReady] = useState(false);
  return (
    <div className=' w-full h-full flex flex-col items-center justify-center py-10 relative'>
      {creationView === CreationView.All ? (
        <h1 className=' text-[36px] font-black text-white'>
          <span className=' text-[#2DD48F]'>Choose</span> a creation method
        </h1>
      ) : (
        <h1 className=' text-[36px] font-black text-white'>
          Create <span className=' text-[#2DD48F]'> {creationView}</span>
        </h1>
      )}
      <div
        className={` flex  w-3/4 h-full items-center justify-center gap-x-10  `}
      >
        {creationView !== CreationView.All && (
          <img
            src='/images/back.png'
            className=' absolute top-1/2 left-0 cursor-pointer ml-10'
            onClick={() => {
              setCreationView(CreationView.All);
            }}
            alt=''
          />
        )}
        <Transition
          show={
            creationView === CreationView.All ||
            creationView === CreationView.TextToArt
          }
          enter=' duration-500 transition-all '
          enterFrom='transform scale-0 opacity-0 '
          enterTo='transform opacity-100 '
          leave=' transition transform duration-500 transition-all '
          leaveFrom='transform scale-100 opacity-100 '
          leaveTo='transform scale-0 opacity-0 '
          className=''
          beforeEnter={() => {
            setIsReady(false);
          }}
          afterLeave={() => {
            setIsReady(true);
          }}
        >
          <div
            onClick={() => {
              setCreationView(CreationView.TextToArt);
            }}
            className={` ${
              creationView !== CreationView.TextToArt
                ? "hover:scale-[120%] cursor-pointer duration-300"
                : " scale-[120%]"
            } flex flex-col w-fit gap-y-5 group  transition `}
          >
            <div className=' w-[280px] h-[288px] bg-[#D9D9D9] relative rounded-[15px]   '>
              <img src='/images/dog.png' className='  absolute z-10' alt='' />
              <div
                className={` w-full h-full absolute rounded-l-[15px] rounded-br-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] rounded-tr-[100%] ${
                  creationView === CreationView.TextToArt
                    ? "rounded-tr-[15px]"
                    : "rounded-tr-[100%]  group-hover:animate-full"
                }  group-hover:rounded-[15px] `}
              ></div>
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
            {creationView === CreationView.All && (
              <button className='w-4/5 py-3  text-[18px] font-black text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto'>
                Text to Art
              </button>
            )}
          </div>
        </Transition>
        <Transition
          show={
            creationView === CreationView.All ||
            creationView === CreationView.SketchToArt
          }
          enter=' duration-500 transition-all '
          enterFrom='transform scale-0 opacity-0 '
          enterTo='transform scale-100 opacity-100 '
          leave=' transition transform duration-500 transition-all '
          leaveFrom='transform scale-100 opacity-100 '
          leaveTo='transform scale-0 opacity-0 '
          className=''
          beforeEnter={() => {
            setIsReady(false);
          }}
          afterLeave={() => {
            setIsReady(true);
          }}
        >
          <div
            onClick={() => {
              setCreationView(CreationView.SketchToArt);
            }}
            className={` ${
              creationView !== CreationView.SketchToArt
                ? "hover:scale-[120%] cursor-pointer duration-300"
                : " scale-[120%]"
            } flex flex-col w-fit gap-y-5 group  transition `}
          >
            <div className=' w-[280px] h-[288px] bg-[#D9D9D9] relative rounded-[15px]   '>
              <img
                src='/images/monster.png'
                className='  absolute z-10'
                alt=''
              />
              <div
                className={` w-full h-full absolute rounded-l-[15px] rounded-br-[15px] bg-gradient-to-r from-[#0D9488]  to-[#FFB100] rounded-tr-[100%] ${
                  creationView === CreationView.SketchToArt
                    ? "rounded-tr-[15px]"
                    : "rounded-tr-[100%]  group-hover:animate-full"
                }  group-hover:rounded-[15px] `}
              ></div>
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
            {creationView === CreationView.All && (
              <button className=' w-4/5 py-3  text-[18px] font-black text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  to-[#FFB100] flex items-center justify-center mx-auto'>
                Sketch to Art
              </button>
            )}
          </div>
        </Transition>
        <Transition
          show={
            creationView === CreationView.All ||
            creationView === CreationView.DrawingToAnimation
          }
          enter=' transition transform duration-500 transition-all '
          enterFrom='transform scale-0 opacity-0 '
          enterTo='transform scale-100 opacity-100 '
          leave=' transition transform duration-500 transition-all '
          leaveFrom='transform scale-100 opacity-100 '
          leaveTo='transform scale-0 opacity-0 '
          className=''
          beforeEnter={() => {
            setIsReady(false);
          }}
          afterLeave={() => {
            setIsReady(true);
          }}
        >
          <div
            onClick={() => {
              setCreationView(CreationView.DrawingToAnimation);
            }}
            className={` ${
              creationView !== CreationView.DrawingToAnimation
                ? "hover:scale-[120%] cursor-pointer duration-300"
                : " scale-[120%]"
            } flex flex-col w-fit gap-y-5 group  transition `}
          >
            <div className=' w-[280px] h-[288px] bg-[#D9D9D9] relative rounded-[15px]   '>
              <img
                src='/images/sando.png'
                className=' w-[174px] h-[289px]  absolute z-10'
                alt=''
              />
              <div
                className={` w-full h-full absolute rounded-l-[15px] rounded-br-[15px] bg-gradient-to-r from-[#F86C75] via-[#5E25FF] to-[#4468C5] rounded-tr-[100%] ${
                  creationView === CreationView.DrawingToAnimation
                    ? "rounded-tr-[15px]"
                    : "rounded-tr-[100%]  group-hover:animate-full"
                }  group-hover:rounded-[15px] `}
              ></div>
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
            {creationView === CreationView.All && (
              <button className=' w-4/5 py-3  text-[18px] font-black text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto'>
                Drawing to Animation
              </button>
            )}
          </div>
        </Transition>
        {creationView !== CreationView.All && isReady && (
          <Transition
            show={true}
            enter=' duration-500 transition-all delay-500 '
            enterFrom='transform scale-0 opacity-0 '
            enterTo='transform scale-100 opacity-100 '
            leave=' transition transform duration-500 transition-all '
            leaveFrom='transform scale-100 opacity-100 '
            leaveTo='transform scale-0 opacity-0 '
            className=''
          >
            <CreationDetail view={creationView} />
          </Transition>
        )}
      </div>
    </div>
  );
};
export default Creation;
