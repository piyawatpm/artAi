import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FacebookShareButton } from 'react-share';

const Catagories = () => {
  const router = useRouter();
  const [size, setSize] = useState();
  return (
    <div className=" flex flex-col text-white  py-[30px] h-[645px] items-center justify-center gap-y-5">
      <p className=" text-[36px] font-bold">
        <span className="text-[#8C70DC]">Create</span> AI Ads & Social Creative
      </p>
      <div className=" mt-[0px] flex   gap-y-5  justify-center text-[18px] font-bold">
        <img src="/images/complete.png" alt="" />
        <div className=" flex flex-col"></div>
        <div className=" flex flex-col text-white text-[18px] font-bold items-center justify-center ">
          <button
            // onClick={downloadImage}
            className="w-[200px] py-3  mt-10 text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r from-[#0D9488] via-[#4468C5] to-[#8C70DC] flex items-center p-[20%] gap-x-3 mx-auto"
          >
            <img src="/images/download.png" alt="" />
            Download
          </button>
          <FacebookShareButton url={'https://www.artsai.io/'} >
            <button
              // onClick={onSubmit}
              className="w-[200px] mt-3 py-3  text-[18px] font-bold text-white rounded-[15px] bg-gradient-to-r bg-[#0D9488] flex items-center p-[20%] gap-x-3 mx-auto"
            >
              <img src="/images/share.png" alt="" />
              Shere
            </button>
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
};
export default Catagories;
