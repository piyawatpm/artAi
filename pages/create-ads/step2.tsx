import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Catagories = () => {
  const router = useRouter();
  const [size, setSize] = useState();
  return (
    <div className=" flex flex-col text-white py-[10%] items-center justify-center gap-y-5">
      <p className=" text-[36px] font-bold">
        <span className="text-[#8C70DC]">Step 2 :</span> Input Details{' '}
      </p>
      <div className=" mt-[30px] flex  flex-col gap-y-5  justify-center text-[18px] font-bold">
        <div className=" flex gap-x-5 items-center">
          <p className=" w-[125px] text-end">Upload Logo :</p>
          <img src="/images/upload-2.png" alt="" />
        </div>
        <div className=" flex gap-x-5 items-center">
          <p className=" w-[125px] text-end">Color Select :</p>
          <div className=" w-[443px] bg-white h-[36px] rounded-[10px]"></div>
        </div>
        <div className=" flex gap-x-5 items-center">
          <p className=" w-[125px] text-end">Brand :</p>
          <div className=" w-[443px] bg-white h-[36px] rounded-[10px]"></div>
        </div>
        <div className=" flex gap-x-5 items-center">
          <p className=" w-[125px] text-end">Title :</p>
          <div className=" w-[443px] bg-white h-[36px] rounded-[10px]"></div>
        </div>
        <div className=" flex gap-x-5 items-center">
          <p className=" w-[125px] text-end">Detail :</p>
          <div className=" w-[443px] bg-white h-[104px] rounded-[10px]"></div>
        </div>
        <Link
          href={'/create-ads/step3'}
          className=" w-[180px] mx-auto py-3 mr-[130px]  text-[18px] font-bold flex gap-x-2 text-white rounded-[15px] bg-gradient-to-l from-[#280D94] via-[#4468C5] to-[#8C70DC]  items-center justify-center mx-auto'"
        >
          <p> Next Step</p>
          <img src="/images/next.png" alt="" />
        </Link>
      </div>
    </div>
  );
};
export default Catagories;
