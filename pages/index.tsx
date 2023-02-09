import Image from "next/image";
const Header = () => {
  return (
    <div className=' w-full  bg-[#172D3B] text-[12px] sm:text-[16px] font-bold flex px-[5%] md:px-[15%] pb-3 pt-2 justify-between'>
      <Image
        src='/images/logo.png'
        width={172}
        height={69}
        alt=''
        className=' w-auto sm:w-[172px] h-auto sm:h-[69px]'
      />
      <div className=' flex items-center justify-center text-[#6ED1D7] gap-x-5'>
        <p className=' sm:block hidden'>Pricing</p>
        <p className=' sm:block hidden'>Whitepaper</p>
        {/* <img src='/images/setting.png' alt='' /> */}
        <button className=' text-white py-2 px-4 sm:px-7 rounded-[15px] bg-gradient-to-br from-[#0D9488] to-[#4468C5]'>
          Sing in
        </button>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <div className=' bg h-full relative flex flex-col'>
      <Header />
      <div className=' w-full flex  h-full px-5 sm:px-0  '>
        <div className=' w-full lg:w-1/2 h-full bg-[url("/images/bg-20.png")] bg-cover bg-center bg-opacity-10 lg:bg-none lg:pr-[10%] my-auto flex flex-col items-center lg:items-end justify-center'>
          <img
            src='/images/head.png'
            className=' absolute opacity-25 sm:scale-150  lg:hidden'
            alt=''
          />
          <div className=' flex flex-col items-center  lg:items-end z-10 '>
            <h1 className=' text-[50px] sm:text-[100px] tracking-widest leading-[1em] font-bold text-transparent textgradient'>
              Art<span className=' text-[35px] sm:text-[70px]'>s</span>Ai
            </h1>
            <p className=' text-[21px] sm:text-[42px] text-[#4f99be] tracking-wider font-bold'>
              Generator
            </p>
            <p className=' text-[10px] sm:text-[18px] text-white max-w-[368px] mt-3 text-center sm:text-justify font-bold'>
              Create amazing artwork using the power of Artificial Intelligence
              in seconds.
              <span className=' text-[11px] sm:text-[20px] text-transparent textgradient-pp'>
                {" "}
                Try it now!
              </span>
            </p>
            <button className=' mx-auto mt-5 flex items-center gap-x-2  text-white py-[5px] sm:py-[10px] px-[10px] sm:px-[20px] bg-gradient-to-br from-[#0D9488] to-[#4468C5] rounded-[15px] text-[10px] sm:text-[20px] font-bold '>
              <p>Create</p>{" "}
              <img
                src='/images/edit.png'
                className=' sm:w-auto w-[15px]'
                alt=''
              />
            </button>
          </div>
        </div>
        <div className='   w-1/2 h-full  my-auto  bg-[url("/images/bg.png")] bg-cover bg-center z-10 items-center  justify-start hidden lg:flex'>
          <img src='/images/head.png' alt='' />
        </div>
      </div>
      <div className=' absolute flex flex-col w-fit items-center bottom-0 left-1/2 translate-x-[-50%]'>
        <p className='   text-center text-white text-[8px] sm:text-[14px]'>
          Copyright © 2023 ArtsAi By Sandora, All rights reserved.
        </p>
        <p className=' text-[#2DD48F] text-[8px] sm:text-[14px]'>
          Terms & Conditions | Privacy Policy
        </p>
      </div>
    </div>
  );
}
