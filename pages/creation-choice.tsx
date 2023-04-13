import { useRouter } from 'next/router';

const Catagories = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col text-white py-[10%] items-center justify-center gap-y-5">
      <h1 className=" text-[36px] font-bold">
        <span className=" text-[#2DD48F]">Catagories</span> of AI base Services
      </h1>
      <div className=" w-full flex items-center justify-center gap-x-20 mt-12">
        <div
          onClick={() => router.push('/create-arts')}
          className=" flex flex-col gap-y-3 hover:scale-125 cursor-pointer transition duration-300"
        >
          <img src="/images/digital-arts.png" alt="" />
          <p className=" text-transparent textgradient-1 text-[16px] text-center">
            Experience art <br />
            in a new way with AI
          </p>
        </div>
        <div
          onClick={() => router.push('/create-ads')}
          className=" flex flex-col gap-y-3 hover:scale-125 cursor-pointer transition duration-300"
        >
          <img src="/images/ads-social.png" alt="" />
          <p className=" text-transparent textgradient-2 text-[16px] text-center">
            Smarter social media <br />
            campaigns with AI
          </p>
        </div>
      </div>
    </div>
  );
};
export default Catagories;
