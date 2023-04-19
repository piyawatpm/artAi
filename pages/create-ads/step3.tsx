import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Catagories = () => {
  const router = useRouter();
  const [size, setSize] = useState();
  return (
    <div className=" flex flex-col text-white  py-[30px] h-[645px] items-center justify-center gap-y-5">
      <p className=" text-[36px] font-bold">
        <span className="text-[#8C70DC]">Step 3 :</span> Upload Background
      </p>
      <div className=" mt-[30px] flex  flex-col gap-y-5  justify-center text-[18px] font-bold">
        <img src="/images/upload-3.png" alt="" />
        <Link
          href={'/create-ads/complete'}
          className=" w-[180px] mx-auto py-3  mt-10 text-[18px] font-bold flex gap-x-2 text-white rounded-[15px] bg-gradient-to-l from-[#280D94] via-[#4468C5] to-[#8C70DC]  items-center justify-center mx-auto'"
        >
          <p> Create</p>
        </Link>
      </div>
    </div>
  );
};
export default Catagories;
