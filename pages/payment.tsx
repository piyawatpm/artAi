import type { NextPage } from "next";
import { useState } from "react";

const CreateTextToArt = () => {
  return (
    <div className=' w-full h-full flex flex-col items-center justify-center px-10 '>
      <h1 className=' text-[36px] font-black text-white'>Payment</h1>
      <p className=' text-[15px] font-light text-[#2DD48F]'>
        Please select your payment method.
      </p>
      <div className=' flex flex-col w-[578px] h-[359px] gap-y-5 bg-[#0A1923] items-center justify-center rounded-[15px] mt-10'>
        <img
          src='/images/paypal.png'
          className=' cursor-pointer hover:scale-[110%]'
          alt=''
        />
        <img
          src='/images/metamask.png'
          className=' cursor-pointer hover:scale-[110%]'
          alt=''
        />
      </div>
    </div>
  );
};

export default CreateTextToArt;
