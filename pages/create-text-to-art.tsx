import type { NextPage } from "next";
import { useState } from "react";

const CreateTextToArt = () => {
  const [letter, setLetter] = useState("");
  const clearText = () => {
    setLetter("");
  };
  return (
    <div className=' w-full h-full flex flex-col items-center justify-center px-10 '>
      <h1 className=' text-[36px] font-black text-white'>
        Create <span className=' text-[#2DD48F]'>Text to Art</span>
      </h1>
      <div className=' flex flex-col w-3/4 gap-y-5'>
        <div className=' flex items-center justify-between px-[32px]'>
          <p className=' text-[24px] font-bold text-transparent textgradient'>
            Enter Text
          </p>
          <p
            onClick={clearText}
            className=' cursor-pointer text-[18px] font-bold text-white underline'
          >
            Clear text
          </p>
        </div>
        <div className=' relative w-full h-[200px]'>
          <textarea
            name=''
            value={letter}
            onChange={(e) => {
              setLetter(e.target.value);
            }}
            placeholder='Describe the image you want to create'
            id=''
            maxLength={600}
            className=' rounded-[15px] bg-white w-full h-[200px] px-[32px] py-[25px] relative'
          ></textarea>
          <p className=' text-[#B0AAAA] text-[16px] font-medium absolute bottom-[2%] right-[1%]'>
            {letter.length}/600
          </p>
        </div>
      </div>
      <button className='w-[200px] mt-[80px] py-3  text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center justify-center mx-auto'>
        Create Art
      </button>
    </div>
  );
};

export default CreateTextToArt;
