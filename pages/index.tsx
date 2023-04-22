import Creation from '@/pages/create-arts';
import Header from '@/components/Header';
import MyModal from '@/components/Popup';
import { Transition } from '@headlessui/react';
import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';
import Catagories from '@/pages/creation-choice';
import { useRouter } from 'next/router';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
const imageStyle = [
  { name: 'Art', api: 'text2img' },
  { name: 'Cute', api: 'cute-creature-generator' },
  { name: 'PopSonic', api: '' },
  { name: 'Fantasphere', api: 'fantasy-portrait-generator' },
  { name: 'Cyberverse', api: 'cyberpunk-portrait-generator' },
  { name: 'Dreamlike', api: 'surreal-portrait-generator' },
  { name: 'Comics', api: 'comics-portrait-generator' },
  { name: 'Modernity', api: 'future-architecture-generator' },
  { name: 'Graffiti-art', api: 'street-art-generator' },
  { name: '3D-Origami', api: 'origami-3d-generator' },
  { name: '3D-Hologram', api: 'hologram-3d-generator' },
  { name: 'Retro-Innovation', api: 'steampunk-generator' },
];
type view = 'main' | 'creation' | 'change';
function Home() {
  const [view, setView] = useState<view>('main');
  const router = useRouter();
  const [open, setOpen] = useState(1);
  // const handleOpen = (value) => {
  //   setOpen(open === value ? 0 : value);
  // };
  return (
    <div className=" h-full w-full relative flex flex-col bg px-[38px]">
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
        <div className={` w-full flex   h-[702px] px-3 sm:px-0`}>
          <div className=' w-full lg:w-1/2 h-full bg-[url("/images/bg-20.png")] bg-cover bg-center bg-opacity-10 lg:bg-none lg:pr-[5%] my-auto flex flex-col items-center lg:items-end justify-center'>
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
                  router.push('/creation-choice');
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
      <div className=" max-w-screen-xl mx-auto bg-[#030303]/[23%] p-5 xl:px-[53px] sm:py-[46px] justify-between rounded-[20px] sm:rounded-[45px] w-full h-fit gap-y-10 flex flex-col">
        <div className=" flex sm:flex-row flex-col w-full h-1/2">
          <div className=" sm:w-1/2 flex flex-col">
            <p className=" text-[#406CC0] text-[10px] xl:text-[16px] font-medium">
              Text to Art
            </p>
            <p className="text-[21px] xl:text-[36px] font-bold text-white">
              Transform TEXT into Art with AI
            </p>
            <p className=" text-[10px] xl:text-[16px] text-white font-medium">
              Turn Words into Lifelike Images with Text-to-Image AI! Create
              Beautiful, Realistic Images with Simple Text Descriptions. Perfect
              for Artists & Creatives. Try Now!
            </p>
            <button
              onClick={() => {
                router.push('/text-to-art-info');
              }}
              className=" xl:flex hidden py-2 px-9 text-[10px] xl:text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC]  items-center justify-center mr-auto mt-3"
            >
              Generate
            </button>
          </div>
          <div className=" xl:w-1/2 h-full   flex items-center justify-center">
            <img
              src="/images/index/text-to-art.gif"
              className=" xl:scale-[80%] xl:my-0 my-5 "
              alt=""
            />
          </div>
          {/* button for mobile */}
          <button
            onClick={() => {
              router.push('/text-to-art-info');
            }}
            className=" py-2 px-5 xl:px-9 mx-auto text-[12px] xl:text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC] flex xl:hidden items-center justify-center mr-auto mt-3"
          >
            Generate
          </button>
        </div>
        <div className=" flex w-full xl:flex-row flex-col-reverse h-1/2 xl:text-end ">
          <button
            onClick={() => {
              router.push('/image-to-art-info');
            }}
            className=" py-2 px-5 xl:px-9  mx-auto text-[12px] xl:text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC] flex xl:hidden items-center justify-center ml-auto mt-3"
          >
            Generate
          </button>
          <div className=" xl:w-1/2 h-full flex items-center justify-center ">
            <img
              src="/images/index/image-to-image.gif"
              className=" xl:w-[400px] xl:h-[290px] xl:my-0 my-5"
              alt=""
            />
          </div>
          <div className=" xl:w-1/2 flex flex-col xl:justify-end">
            <p className=" text-[#406CC0] text-[10px] xl:text-[16px] font-medium">
              Image to Art
            </p>
            <p className="text-[21px] xl:text-[36px] font-bold text-white">
              Revolutionary Image-to-Art AI Technology
            </p>
            <p className=" text-[10px] xl:text-[16px] text-white font-medium">
              Transform Your Images with AI Magic! Adjust Colors, Lighting & Add
              Effects with Ease. Perfect for Photographers, Designers &
              Hobbyists. Try Now!
            </p>
            <button
              onClick={() => {
                router.push('image-to-art-info');
              }}
              className=" py-2 px-9  text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC] hidden xl:flex items-center justify-center ml-auto mt-3"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto gradient-blue p-5 xl:px-[53px] mt-[50px] xl:py-[46px] justify-between rounded-[20px] xl:rounded-[45px] w-full h-fit flex flex-col">
        <div className=" flex w-full xl:flex-row flex-col">
          <div className=" xl:w-1/2 flex flex-col">
            <p className=" text-[#406CC0] text-[10px] xl:text-[16px] font-medium">
              Image to Animation
            </p>
            <p className="text-[21px] xl:text-[36px] font-bold text-white">
              AI-GENERATED ANIMATIONS image TO ANIMATION
            </p>
            <p className=" text-[10px] xl:text-[16px] text-white font-medium">
              Created image to animation is an exciting new concept that allows
              artists and creators to transform their drawings into personalized
              and visually stunning animations. Try Now!
            </p>
            <button
              onClick={() => {
                router.push('/create-arts');
              }}
              className=" py-2 px-9  xl:text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC] hidden xl:flex items-center justify-center mr-auto mt-3"
            >
              Generate
            </button>
          </div>
          <div className=" xl:w-1/2 h-full flex items-center justify-center ">
            <img
              src="/images/index/image-to-animation.png"
              className=" xl:my-0 my-5"
              alt=""
            />
          </div>
          <button
            onClick={() => {
              router.push('/create-arts');
            }}
            className=" py-2 px-5 xl:px-9 text-[12px] xl:text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC]  mx-auto xl:hidden flex items-center justify-center mr-auto mt-3"
          >
            Generate
          </button>
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto gradient-blue p-5 xl:px-[53px] mt-[50px] xl:py-[46px] justify-between rounded-[20px] xl:rounded-[45px] w-full h-fit flex flex-col">
        <div className=" flex w-full xl:flex-row flex-col-reverse  ">
          <button
            onClick={() => {
              router.push('/social-ads-info');
            }}
            className=" py-2 px-5 xl:px-9 text-[12px] mx-auto xl:text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC] xl:hidden flex items-center justify-center ml-auto mt-3"
          >
            Generate
          </button>
          <div className=" xl:w-1/2 h-full flex items-center justify-center ">
            <img src="/images/index/ai-ads.png" alt="" />
          </div>
          <div className=" xl:w-1/2 flex flex-col xl:text-end">
            <p className=" text-[#0D9488] text-[10px] xl:text-[16px] font-medium">
              AI Social Ads
            </p>
            <p className="text-[21px] xl:text-[36px] font-bold text-white uppercase xl:leading-[40px] xl:my-3">
              Transform Your Social Ads with AI-Powered Creator!
            </p>
            <p className=" text-[10px] xl:text-[16px] text-white font-medium">
              Create Eye-Catching Social Ads Effortlessly with Our AI-Powered
              Tool! Select Ad Size, Input Brand Details & Fine-Tune Ad Options.
              Save Time & Boost Ad Effectiveness - Try Now!
            </p>
            <button
              onClick={() => {
                router.push('/social-ads-info');
              }}
              className=" py-2 px-9  text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488]  via-[#4468C5] to-[#8C70DC] hidden xl:flex items-center justify-center ml-auto mt-3"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto gradient-blue p-5 xl:px-[53px] flex flex-col justify-center items-center rounded-[20px] xl:rounded-[45px] w-full text-center mt-[50px]  text-white">
        <h1 className=" text-[21px] xl:text-[28px] font-bold mb-5 xl:mb-[30px]">
          Ready for some AI-powered fun?
        </h1>
        <p className=" xl:text-[16px] text-[10px]">
          Check out these awesome image styles below and generate some cool and
          exciting images!
        </p>
        <div className=" grid grid-cols-4 xl:grid-cols-6 my-10 gap-y-4">
          {imageStyle.map((style) => {
            return (
              <div
                key={style.name}
                className={` flex flex-col gap-y-1 cursor-pointer whitespace-nowrap items-center justify-center `}
              >
                <img
                  src={`/images/image_style/${style.name}.png`}
                  className=" w-[60px] xl:w-[80px] h-[60px] xl:h-[80px]"
                  alt=""
                  onClick={() => {
                    router.push('/docs-and-resources');
                  }}
                />
                <p className=" xl:text-[16px] text-[10px]">{style.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto flex flex-col justify-center items-center  w-full text-center my-[50px]  text-white">
        <div className=" flex flex-col items-start">
          <h1 className=" text-[21px] xl:text-[28px] font-bold -translate-x-[15px]">
            Unleash Your Creativity with Our AI Tools
          </h1>{' '}
          <ul className=" text-[10px] xl:mt-0 mt-3 xl:text-[16px] font-medium list-decimal justify-center text-left ">
            <li>Join Us Today by Signing Up to Create Your Account!</li>
            <li>
              {
                "View Package Details and Purchase Credits on Our 'Package Credit' Page!"
              }
            </li>
            <li>
              Explore Our AI Tools - Choose from Text-to-Image, Image-to-Image,
              Social Ads, and Photo Effects!
            </li>
            <li>
              Follow the Easy Instructions for Your Selected AI Tool and Create
              Amazing Results!
            </li>
            <li>
              Download Your Generated Files and Enjoy Your Stunning Creations!
            </li>
          </ul>
        </div>
      </div>
      <div className=" max-w-screen-xl mx-auto flex flex-col items-center justify-start my-[50px] gap-y-3 w-full">
        <p className=" font-medium text-[10px] xl:text-[16px] text-center mx-auto w-fit">
          Join community
        </p>
        <div className=" flex gap-x-5 items-center">
          <img
            onClick={() => {
              router.push('');
            }}
            src="/images/social/discord-g.png"
            alt=""
            className=" cursor-pointer w-[25px] xl:w-auto"
          />
          <img
            src="/images/social/telegram-g.png"
            alt=""
            className=" cursor-pointer w-[25px] xl:w-auto"
          />
          <img
            onClick={() => {
              router.push('https://www.facebook.com/artsaiaus/');
            }}
            src="/images/social/facebook-g.png"
            alt=""
            className=" cursor-pointer w-[25px] xl:w-auto"
          />
          <img
            onClick={() => {
              router.push('https://www.instagram.com/artsaiaus/');
            }}
            src="/images/social/instragram-g.png"
            alt=""
            className=" cursor-pointer w-[26px] xl:w-auto"
          />
          <img
            onClick={() => {
              router.push('https://www.tiktok.com/@artsaiaus?lang=en');
            }}
            src="/images/social/linked-in-g.png"
            alt=""
            className=" cursor-pointer w-[25px] xl:w-auto"
          />
          <img
            onClick={() => {
              router.push(' https://twitter.com/artsaiaus');
            }}
            src="/images/social/twitter-g.png"
            alt=""
            className=" cursor-pointer w-[25px] xl:w-auto"
          />
          <img
            onClick={() => {
              router.push(
                'https://www.youtube.com/channel/UCux7292YzDpN0PyflaPkZ9g'
              );
            }}
            src="/images/social/youtube-g.png"
            alt=""
            className=" cursor-pointer w-[25px] xl:w-auto"
          />
          <img
            onClick={() => {
              router.push('https://www.tiktok.com/@artsaiaus?lang=en');
            }}
            src="/images/social/tiktok-g.png"
            alt=""
            className=" cursor-pointer w-[20px] xl:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
