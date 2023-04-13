import Link from 'next/link';
import { useRouter } from 'next/router';

const Catagories = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col text-white py-[10%] items-center justify-center gap-y-5">
      <div className=" w-full flex items-center justify-center gap-x-20 mt-12">
        <div className=" ">
          <img src="/images/ai-ads.png" alt="" />
        </div>
        <div className=" flex flex-col gap-y-3 transition duration-300">
          <p className=" text-[42px] font-bold">
            <span className=" text-transparent font-bold text-[62px] textgradient-2">
              AI Ads
            </span>{' '}
            <br />& Social Creative
          </p>
          <p className=" text-[20px] font-normal">
            Smarter social media campaigns with AI
          </p>
          <Link
            href={'/create-ads/step1'}
            className=" w-full mx-auto py-3  text-[18px] font-medium text-white rounded-[15px] bg-gradient-to-l from-[#F86C75] via-[#5E25FF] to-[#4468C5] flex items-center justify-center mx-auto'"
          >
          Create Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Catagories;
