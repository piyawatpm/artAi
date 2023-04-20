import { useRouter } from 'next/router';

const Catagories = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col text-white  flex-1 h-[550px] xl:h-[645px] xl:px-0 px-[38px] py-[40px] items-center gap-y-5">
      <h1 className=" text-[21px] xl:text-[36px] font-bold">
        <span className=" text-[#2DD48F]">Categories</span> of AI base Services
      </h1>
      <div className=" w-full flex items-center justify-center my-auto gap-x-5 xl:gap-x-20">
        <div
          onClick={() => router.push('/create-arts')}
          className=" flex flex-col gap-y-3 hover:scale-125 cursor-pointer transition duration-300"
        >
          <img src="/images/digital-arts.png" className=' xl:w-auto w-[160px]' alt="" />
          <p className=" text-transparent textgradient-1 text-[10px] xl:text-[16px] text-center">
            Experience NFT art <br />
            in a new way with AI
          </p>
        </div>
        <div
          onClick={() => router.push('/social-ads-info')}
          className=" flex flex-col gap-y-3 hover:scale-125 cursor-pointer transition duration-300"
        >
          <img src="/images/ads-social.png"  className=' xl:w-auto w-[160px]'alt="" />
          <p className=" text-transparent textgradient-2 text-[10px] xl:text-[16px] text-center">
            Smarter social media <br />
            campaigns with AI
          </p>
        </div>
      </div>
    </div>
  );
};
export default Catagories;
