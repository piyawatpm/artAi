import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Catagories = () => {
  const router = useRouter();
  const [size, setSize] = useState();
  return (
    <div className=" flex flex-col text-white py-[10%] items-center justify-center gap-y-5">
      <p className=" text-[36px] font-bold">
        <span className="text-[#8C70DC]">Step 1 :</span> Select Creative Size{' '}
      </p>
      <div className=" mt-[30px] flex gap-x-10 justify-center text-[18px] font-medium">
        <div className=" flex flex-col gap-y-3 items-center">
          <img src="/images/square.png" alt="" />
          <p>Square</p>
        </div>
        <div className=" flex flex-col gap-y-3 items-center">
          <img src="/images/landscape.png" alt="" />
          <p>Landscape</p>
        </div>
        <div className=" flex flex-col gap-y-3 items-center">
          <img src="/images/portrait.png" alt="" />
          <p>Portrait</p>
        </div>
        <div className=" flex flex-col gap-y-3 items-center">
          <img src="/images/stories.png" alt="" />
          <p>Stories</p>
        </div>
      </div>
      <Link
        href={'/create-ads/step2'}
        className=" w-[180px] mx-auto py-3  text-[18px] font-bold flex gap-x-2 text-white rounded-[15px] bg-gradient-to-l from-[#280D94] via-[#4468C5] to-[#8C70DC]  items-center justify-center mx-auto'"
      >
        <p> Next Step</p>
        <img src="/images/next.png" alt="" />
      </Link>
    </div>
  );
};
export default Catagories;
